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



