/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // First I select all the elements which have the class target by using querySelectorAll

    let targetClass = document.querySelectorAll(".target");




    
    // Then I use the new constant to target the class and change the html

    targetClass[0].innerHTML = "owned";
    targetClass[1].innerHTML = "owned";
    targetClass[2].innerHTML = "owned";
    targetClass[3].innerHTML = "owned";
    targetClass[4].innerHTML = "owned";

   

})();
