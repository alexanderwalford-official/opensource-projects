getdata(); 

function getdata() {	

// Backup Server 
	 $.ajax({
        url: 'https://renovatesoftware.com/index.html',
        dataType: 'html',
          statusCode: {
              200: function(){
                  document.getElementById("backup").innerHTML = "- Backup Server Is ONLINE";
				  document.getElementById("summary").innerHTML = document.getElementById("summary").innerHTML + " The backup server is currently online, which means there will be limited services availible.";
				  
				  document.getElementById("top").style.backgroundColor ="orange";
				  document.getElementById("statustext").innerHTML = "Issues detected.";
              },
              404: function() {
                  document.getElementById("backup").innerHTML = "- Backup Server Is OFFLINE";
				  document.getElementById("summary").innerHTML = document.getElementById("summary").innerHTML + " The backup server is currently offline, which means all services availible and should be functional.";
              },
			  timeout: 3000 // sets timeout to 3 seconds
          }
     });
	 

	 $.get( "https://dl.dropboxusercontent.com/s/jznw4xwidrw9ldt/reports.txt?dl=0", function( data ) {
  $( ".result" ).html( data );
  document.getElementById("reports").innerHTML = document.getElementById("reports").innerHTML + data;
});


let time;

// Central Server
$.ajax({
    url: 'https://renovatesoftware.com',
    startTime: performance.now(),
    success: function(){

        //Calculate the difference in milliseconds.
        time = performance.now() - this.startTime;

        document.getElementById("response").innerHTML = document.getElementById("response").innerHTML + time.toFixed(2) + "MS";
		document.getElementById("summary").innerHTML = document.getElementById("summary").innerHTML + " We also know that your network repsonse time was " + time.toFixed(2) + "MS";
		
		if (time.toFixed(2) > 400.00 && time.toFixed(2) < 600.00) {
		document.getElementById("summary").innerHTML = document.getElementById("summary").innerHTML + ", which is acceptable. "
		}
		
		else if (time.toFixed(2) < 200.00) {
		document.getElementById("summary").innerHTML = document.getElementById("summary").innerHTML + ", which is amazing. You should be able to upload files to renovatesoftware.com quickly and load webpages instantly."
		}
		
		else if (time.toFixed(2) < 400.00 && time.toFixed(2) > 200.00) {
		document.getElementById("summary").innerHTML = document.getElementById("summary").innerHTML + ", which is great. You should be able to upload files to renovatesoftware.com at a decent speed and load webpages quickly."
		}
		
		else if (time.toFixed(2) > 600.00 && time.toFixed(2) < 800.00) {
		document.getElementById("summary").innerHTML = document.getElementById("summary").innerHTML + ", which is poor. The server may be under load or under attack. You currently have a slow connection. "
		}
		
		else if (time.toFixed(2) > 800.00) {
		document.getElementById("summary").innerHTML = document.getElementById("summary").innerHTML + ", which is terrible. The server may be under load or under attack. You currently have a very slow connection."
		}
		
		else {
		
		}
    },
	error: function () {
	console.log("error");
	document.getElementById("response").innerHTML = "- ⚠ Website is OFFLINE.";
	document.getElementById("summary").innerHTML = "renovatesoftware.com is offline. All services are offline. We apologize for any inconveniences caused.";
	document.getElementById("firewall").innerHTML = "- Firewall status is UNKNOWN.";
	document.getElementById("portal").innerHTML = "";
	document.getElementById("login").innerHTML = "";
	document.getElementById("server").innerHTML = "- Central Server is OFFLINE.";
	document.getElementById("backup").innerHTML = "- Backup Server is OFFLINE.";
	
	document.getElementById("top").style.backgroundColor ="red";
	document.getElementById("statustext").innerHTML = "Major issues detected.";
	},
	timeout: 3000 // sets timeout to 3 seconds
});

// Webapp Page
$.ajax({
        url: 'https://renovatesoftware.com/webapp/home',
        dataType: 'html',
          statusCode: {
              200: function(){
                  document.getElementById("portal").innerHTML = "- Renovate Portal Is ONLINE";
              },
              404: function() {
                  document.getElementById("portal").innerHTML = "- Renovate Portal Is OFFLINE";
              },
			  timeout: 3000 // sets timeout to 3 seconds
          }
     });
	 
// Login URL	 
$.ajax({
        url: 'https://renovatesoftware.com/login',
        dataType: 'html',
          statusCode: {
              200: function(){
                  document.getElementById("login").innerHTML = "- Login System Is ONLINE";
				  document.getElementById("server").innerHTML = "- Central Server Is ONLINE";
				  document.getElementById("summary").innerHTML = document.getElementById("summary").innerHTML + " The Central Server responded as being online; this means that all services should be online. Check the Firewall status before considering connecting.";
				  
              },
              404: function() {
                  document.getElementById("login").innerHTML = "- Login System Is OFFLINE";
				  document.getElementById("server").innerHTML = "- Central Server Is OFFLINE";
				  
				  document.getElementById("top").style.backgroundColor ="red";
	document.getElementById("statustext").innerHTML = "Major issues detected.";
				  
				  document.getElementById("summary").innerHTML = document.getElementById("summary").innerHTML + " There is a major issue with the Central Server. Please expect a lack of services or possibly an attack. If the Firewall is offline, do not connect.";
				  
              },
			  timeout: 3000 // sets timeout to 3 seconds
          }
     });
	 
// Dropbox reports file.	 
$.get( "https://dl.dropboxusercontent.com/s/ay78xwh3tftlq2y/threats.txt?dl=0", function( data ) {
$( ".result" ).html( data );
document.getElementById("threats").innerHTML = document.getElementById("threats").innerHTML + data;
});

// Firewall Check
$.ajax({
     url: 'http://renovatesoftware.com:160',
     success: function(){
     document.getElementById("top").style.backgroundColor ="green";
	 document.getElementById("statustext").innerHTML = "No issues detected.";
	 document.getElementById("firewall").innerHTML = "- Network Firewall is ONLINE.";
     document.getElementById("summary").innerHTML = document.getElementById("summary").innerHTML + "We know that the RSL Network is currently secure and safe to connect to as the firewall is online."
     },
	 404: function() {
     document.getElementById("summary").innerHTML = document.getElementById("summary").innerHTML + "We know that the RSL Network is currently unstable as the firewall is offline. Connect at your own risk."
     document.getElementById("top").style.backgroundColor ="orange";
	 document.getElementById("statustext").innerHTML = "Issues detected.";
	 document.getElementById("firewall").innerHTML = "- Network Firewall is OFFLINE.";	 
	 },
	 
     error: function(xhr, status, error){
     document.getElementById("top").style.backgroundColor ="green";
	 document.getElementById("statustext").innerHTML = "No issues detected.";
	 document.getElementById("firewall").innerHTML = "- Network Firewall is ONLINE.";
     document.getElementById("summary").innerHTML = document.getElementById("summary").innerHTML + "We know that the RSL Network is currently secure and safe to connect to as the firewall is online."
     }
});

// Set the date & time.
document.getElementById("datetime").innerHTML = document.getElementById("datetime").innerHTML + new Date();
}
