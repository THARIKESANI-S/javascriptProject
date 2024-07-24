let imageElement = document.getElementById("image");
let spanElement = document.getElementById("imageWidth");
let defaultImageWidth = 200;

imageElement.style.width = defaultImageWidth + "px";
let width = defaultImageWidth;
spanElement.textContent = width + "px";
function decreaseSize(){
    
    if(width > 100){
        width = width - 5;
        imageElement.style.width = width + "px";
        document.getElementById("warningMessage").textContent = "";
        spanElement.textContent = width + "px";
    }
   else{
        document.getElementById("warningMessage").textContent = "Can't Visible. Increase the size of the Image.";
        document.getElementById("warningMessage").style.color = "red";
       
   }
    
}

function increaseSize(){
    
    if(width < 300){
        width = width + 5;
        imageElement.style.width = width + "px";
        document.getElementById("warningMessage").textContent = "";
        spanElement.textContent = width + "px";
    }
   else{
        document.getElementById("warningMessage").textContent = "Too Big. Decrease the size of the Image.";
        document.getElementById("warningMessage").style.color = "red";
       
   }
}