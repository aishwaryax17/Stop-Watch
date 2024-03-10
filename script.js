var sec=0;
var stop1;
var min=0;
var hr=0;
const getTime=num=>num.toString().padStart(2,"0")
function Start(){
    document.getElementById("myTextBox").innerText="";
    document.getElementById("myTextBox2").innerText="";
    stop1= setInterval(()=>{
    sec++;
    if(sec==60){
        min++;
        sec=0
    }
     if(min==60){
        hr++;
        min=0;
        sec=0;
     }
    document.getElementById("time").innerHTML=`${getTime(hr)} : ${getTime(min)} : ${getTime(sec)}`;
   },10)

}

function Stop(){
   clearInterval(stop1)
}

function Reset(){
    var i=1
    var now = new Date();
    var date = now.toDateString();
    var time = now.toLocaleTimeString();
    Stop();
    sec=0;
    document.getElementById("time").innerHTML="00 : 00 : 00";
    var table = document.getElementById("history");
    // Create a header row
   
  
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4=row.insertCell(3)
    cell4.innerHTML= "Date:"+ date + '|' + "Time:" + time;
    cell1.innerHTML = document.getElementById("myTextBox").value;
    cell2.innerHTML=document.getElementById("myTextBox2").value;
    cell3.innerHTML = `${getTime(hr)} : ${getTime(min)} : ${getTime(sec)}`;
    var inputElement = document.getElementById('myTextBox');
    inputElement.value = '';
    var inputEleme = document.getElementById('myTextBox2');
    inputEleme.value = '';
    
    
   
}


function updateDateTime() {
    var datetimeElement = document.getElementById('datetime');
    var now = new Date();
    var date = now.toDateString();
    var time = now.toLocaleTimeString();
  
    document.getElementById("timed").innerHTML='Date: ' + date + ' | Time: ' + time;
  }
  
  // Update every second
  setInterval(updateDateTime, 1000);
  
  // Initial update
  updateDateTime();

  

  let contentsDeleted = false;

  function deleteContents() {
      if (!contentsDeleted) {
          // Get the element by its ID
          let contentElement = document.getElementById("history");

          // Check if the element exists
          if (contentElement) {
              // Remove all child elements (delete contents)
              while (contentElement.firstChild) {
                  contentElement.removeChild(contentElement.firstChild);
              }

              // Update the variable to indicate that contents have been deleted
              contentsDeleted = true;

              // Optionally, you can add new content or perform other actions here
          }
      }
  }
