/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let number = 0;

    // click event

    document.getElementById("next").addEventListener("click", function () {
        // check the button works
        console.log("NEXT!")

        // This if loop checks if the number (0) is the same as the gallery arrays length -1. if it is then it says the number will be 0
        if (number == gallery.length - 1) {
            number = 0;

            // here it says the number will add 1 so that the gallery will keep moving
        } else {
            number++;
        }
        // This asks for the img element to have its attribute source set to the galler variable and then the number which comes from the if loop
        document.querySelector('img').setAttribute('src', gallery[number]);

    });

})();