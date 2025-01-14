// listen to input so by enter press fire a function
var myInputEnter = document.getElementById("myInput");

myInputEnter.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the funtion
      mySearch()
    }
  }); 

// by press a search button this function will parse a input text and go to google search
function mySearch() {
    let myInput = document.getElementById("myInput").value;

    if(myInput) {
        var words = "";

        myInput = myInput.split(' ');

        for(i=0;i<myInput.length;i++) {
            words += myInput[i];
            if(i<myInput.length-1) {
                words += "+";
            }
        }

        
        location.replace(`https://www.google.com/search?q=${words}`);
    }
    else {
        // alert message if input empty
        let alertBox =
            document.getElementById("customAlertBox");
        let alert_Message_container =
            document.getElementById("alertMessage");
        let custom_button =
            document.querySelector(".custom-button");
        let close_img =
            document.querySelector(".close");
        let body =
            document.querySelector("body");

       
                alert_Message_container.innerHTML =
                    "please type something in input box!";
                alertBox.style.display = "block";
            

        close_img.addEventListener
            ('click', function () {
                alertBox.style.display = "none";
            });

    }
    
}