function displayDateTime() {
    var currentDate = new Date();
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = monthNames[currentDate.getMonth()];
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var day = dayNames[currentDate.getDay()];
    var date = currentDate.getDate();
    var hours = (currentDate.getHours()<10?'0':'') + currentDate.getHours();
    var minutes = (currentDate.getMinutes()<10?'0':'') + currentDate.getMinutes();
    var seconds = (currentDate.getSeconds()<10?'0':'') + currentDate.getSeconds();
  
    var dateTime = day + " " + date + " " + month + " " + hours + ":" + minutes + ":" + seconds;
  
    document.getElementById("p1").innerHTML = dateTime;
  }
  
  setInterval(displayDateTime, 1000);
  
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the page from reloading
    if (info.style.display === "none") {
      info.style.display = "block";
    } else {
      info.style.display = "none";
    }
  });
  // var menu = document.getElementById("myMenu");
      
  //     // Hide the menu when the user clicks anywhere on the page
  //     window.onclick = function(event) {
  //       if (event.target != menu) {
  //         menu.style.display = "none";
  //       }
  //     }
      
  //     // Show the menu when the user right-clicks on the element
  //     document.getElementById("myDiv").oncontextmenu = function(event) {
  //       event.preventDefault();
  //       menu.style.left = event.pageX + "px";
  //       menu.style.top = event.pageY + "px";
  //       menu.style.display = "block";
  //     }
  
  
        const f = document.getElementById('form');
        const q = document.getElementById('query');
        const google = 'https://www.google.com/search?q=';
  
        function submitted(event) {
          event.preventDefault();
          const url = google + '+' + q.value;
          const win = window.open(url, '_blank');
          win.focus();
        }
  
        f.addEventListener('submit', submitted);