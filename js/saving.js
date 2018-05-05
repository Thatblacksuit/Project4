//global variables
var fileimage  = "";
var fileBinding;
var fileEntry;

console.log("setting up events");

//setup event listeners
$(document).on("pagecreate","#pageone", onPageCreated);

//setup listener for device API load
document.addEventListener("deviceready", onDeviceReady, false);

// once jQuery page 'pageone' has been created 
function onPageCreated() {

     console.log("page created");
	
	//setup buttons
	$('#camerasave').on("click", writeFile);
//	$('#deleteFile').on("click", deleteFile);
	
	// setup RactiveJS binding

	//binding between variable 'filetext' and the template 
	fileBinding = new Ractive({
		el: 'container',
		template: '#template',
		data: { fileimage: fileimage}
	});


	//detects changes in the text box and updates the 'filetext' value with the new value
	fileBinding.observe( 'fileimage', function ( newValue, oldValue ) {
  		filetext = newValue; 
	});
    
}

function onDeviceReady() {
	console.log("device ready");
	//setup access to filesystem
	//window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
    window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, gotFS, fail);
}

//get access to file and CREATE if does not exists
function gotFS(fileSystem) {
    
 	fileSystem.getFile("Images", {create: true, exclusive: false}, gotFileEntry, fail);
}

//get file entry
function gotFileEntry(fileEntry) {
	console.log("got file entry");
	this.fileEntry = fileEntry
	fileEntry.file(gotDirEntry, fail);
}

function gotDirEntry(DirEntry){
    
            dirEntry.getFile("new image", {
            create: true,
            exclusive: false
        }, gotFile, fail);
}

//get file itself
function gotFile(file){
    console.log("got file");
    fileEntry.createWriter(gotFileWriter, fail);
}

    function gotFileWriter(writer) {
        writer.onwrite = function (evt) {
           // alert("write completed");
        };
        writer.write(stored_Content);
        writer.abort();
    }

    function fail(error) {
        alert(error.code);
    }

//DELETE file
//function deleteFile()
//{
//    
//    console.log("deleteFile");
//	
//	fileEntry.remove(
//		function () {
//			alert("File deleted");
//            onDeviceReady();
//		}, 
//		fail
//	);
//	
//	//reload file system
//  	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
//}

function fail(error) {
	alert("Cannot use file: " + error.message);
}


