
var destinationType; //used sets what should be returned (image date OR file path to image for example)

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
	destinationType=navigator.camera.DestinationType;   
    
}

function capturePhoto() {   //determines whether an image was successfully captured
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
	destinationType: destinationType.DATA_URL });
}
	
function onPhotoDataSuccess(imageData) {
	var image = document.getElementById('image');  //declares image section
	image.style.display = 'block';         //styles the image to give it display block
	image.src = "data:image/jpeg;base64," + imageData;     //determines source of image
}

function onFail(message) {
      alert('Failed because: ' + message);      //error recieved if the image could not be captured
}