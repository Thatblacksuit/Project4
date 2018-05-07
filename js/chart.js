var dps = [];   //dataPoints. 
var chart;
var startTime;


window.onload = function () {
	
	//store start time in unixtime 

	
	//set uplistener for button
	$('#submit').on('click', function() {
	
		updateChart(taxtotal);        //when submit button is clicked, chart updates
		
	});
	
	//setup chart
    chart = new CanvasJS.Chart("chartContainer",{
      	title :{
      		text: "Your Salary Over Time"       //sets chart title
      	},
      	axisX: {						
      		title: "Year",                      //sets axis x title
            minimum: 2010,                      //sets axis x minimum value
            maximum: 2019,                      //sets axis x maxiumum value
            interval: 1,                        //sets the interval between each point
            labelFontSize: 10,                  //sets axis x font size
      	},
      	axisY: {						
      		title: "Salary (£)",                //sets axis y title
            labelFontSize: 10,                  //sets axis y font size
      	},
        

      	data: [{
      		type: "line",                       //sets graph type
      		dataPoints : dps                    //declares datapoints
      	}],  
        
   	        options: {
            responsive: true,                   //enables responsive design
            maintainAspectRatio: false,         //disables maintenance of aspect ratio
        }
    
    });
	  
};

function updateChart(taxtotal) {
      var yearly = document.getElementById('year-range').value;
      	//set new y value
      	yVal = taxtotal;              
		
		//x value is time since start 
		xVal = yearly;
      	
		//add them to the data points to draw
		dps.push({x: xVal,y: yVal});


		//redraw the chart after an interval of 10ms
        setInterval(function(){ wait() }, 10);
              		
        function wait() {
            chart.render();
        }
	  }
