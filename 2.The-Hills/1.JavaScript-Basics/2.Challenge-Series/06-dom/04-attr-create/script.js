/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // First get the value of the id: source  --  attribute: data-image and then console log to make sure I have the right information

    let source = document.getElementById("source").getAttribute("data-image"); 
    
    console.log(source);

    // Now make a new element for the image inside the target id
    
    let newElement = document.createElement("img");

    // Set the attribute of the img to the source gained from line 16
    
    newElement.setAttribute("src", source); 

    // append the new element to the target id

    target.appendChild(newElement);

    // remove the source

    let toRemove = document.getElementById('source');
    toRemove.remove();

})();
