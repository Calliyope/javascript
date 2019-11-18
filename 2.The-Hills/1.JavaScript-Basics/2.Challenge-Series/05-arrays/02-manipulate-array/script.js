(function () {

    // Here I make a variable called fruits. The variable is an array of values. 
    let fruits = [
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ];

    // Line 20 is a click event. It has a listener which waits for the click attached the button with the ID 'run'. 

    document.getElementById("run").addEventListener("click", function () {

        fruits.splice(9, 1, 'kiwi');
        fruits.splice(0, 1, 'banana');
        alert(fruits);


    });








})();