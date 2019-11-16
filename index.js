// content box
var box = document.createElement("div"),
    sizeOfBox = 550;

box.style.width = sizeOfBox + 'px';
box.style.height = sizeOfBox + 'px';
box.style.margin = "30px auto";
box.style.border = "3px solid #777";
box.style.boxShadow = "0 1rem 3rem rgba(0,0,0,.175)"

document.body.appendChild(box);
var numberDiv = prompt("Hi there \nHow many squares per side?");

var sizeSBox = ((sizeOfBox/numberDiv) - 2).toFixed(2),
    double = Math.pow(numberDiv, 2);

// create small box
function newDiv () {
    var smallBoxes = document.createElement("div");
    smallBoxes.style.width = sizeSBox;
    smallBoxes.style.height = sizeSBox;
    smallBoxes.style.border = "1px solid #00b894";
    smallBoxes.style.background = "#00cec9";
    smallBoxes.style.float = "left";
    smallBoxes.style.box_sizing = "border-box";
    smallBoxes.onmouseover = function() {
        smallBoxes.style.background = "#ff7675"
    }
    
    box.appendChild(smallBoxes);
} 

while (double > 0) {
    newDiv();
    double--;
}
