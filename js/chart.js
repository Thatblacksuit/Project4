var dps = [];   //dataPoints. 
var chart;
var startTime;


window.onload = function () {
	
	//store start time in unixtime 
//	startTime = Date.now();
	
	//set uplistener for button
	$('#submit').on('click', function() {
	
		updateChart(taxtotal);
		
	});
	
	//setup chart
    chart = new CanvasJS.Chart("chartContainer",{
      	title :{
      		text: "Your Salary Over Time"
      	},
      	axisX: {						
      		title: "Year",
            minimum: 2010,
            maximum: 2019,
            interval: 1,
      	},
      	axisY: {						
      		title: "Salary (£)"
      	},
        

      	data: [{
      		type: "line",
      		dataPoints : dps
      	}],  
        
//        XAxes: [{
//      		ticks:{
//                
//            }
//      	}],
   	        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    
    });
	  
};

function updateChart(taxtotal) {
      var yearly = document.getElementById('year-range').value;
      	//set new random y values
      	yVal = taxtotal;
		
		//x value is time since start 
		xVal = yearly;
		//concert from milliseocnds to seconds (divide by a thousand)
//		xVal = xVal / 1000;
      	
		//add them to the data points to draw
		dps.push({x: xVal,y: yVal});
      	
		//don't let the chart get too big 
		//if there are more than 100 data points then start removing older data points
//      	if (dps.length >  10 )
//      	{
//      		dps.shift();				
//      	}

		//redraw the chart

        setInterval(function(){ wait() }, 10);
              		
        function wait() {
            chart.render();
        }
	  }
