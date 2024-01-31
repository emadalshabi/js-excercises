var divText= document.getElementById("sentance");
var divScndBtn= document.getElementById('sentance');
divScndBtn.addEventListener("click", function(){
divText.textContent = "wow ! I changed " ;
});



function newItem(){  
    var item=document.createElement("li"); 
    var toDoList = document.getElementById('list');
    toDoList.appendChild(item);
}
var addToListBtn = document.getElementById("btn")
addToListBtn.addEventListener("click", function(){
    newItem()
    });

    var googleImg= document.getElementById('barca');
    var googlBtn= document.getElementById('changeimg');
    googlBtn.addEventListener("click", function(){
       changeImg() ;
        });
    function changeImg(){
        googleImg.src = "barca2.jpg";
    }

    function validateLogin() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username === "Emad" && password === "emad10") {
            alert("Login successful! Welcome, " + username );
        } else {
            alert("Login failed. check your username and password.");
        }
    }
