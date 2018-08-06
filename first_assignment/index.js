//let sqColor = document.getElementById("culori");
//let clickIt = document.getElementById("myButton");
let rectangle_color = "blue";
let button = document.getElementById ("myButton");

button.addEventListener('click', (event) => {
    let rectangle = document.getElementById("culori");
    console.log(rectangle_color + ":ceva");

    if (rectangle_color === "blue"){
        rectangle_color = "red";
    } else {
        rectangle_color = "blue";
    }
    rectangle.style.backgroundColor =  rectangle_color;
})
//let myRectangle = document.getElementById("culori");
//console.log(myRectangle.style.backgroundColor + "ceva");




