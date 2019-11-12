/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    // The click event

    document.getElementById("run").addEventListener("click", function () {




        // First I will make a random generated array

        const randomArray = Array.from({
            length: 10
        }, () => Math.floor(Math.random() * 100));

        // check if it works

        console.log(randomArray);




        // The array will be displayed in its particlar output boxes

        document.getElementById("n-1").innerHTML = randomArray[0];
        document.getElementById("n-2").innerHTML = randomArray[1];
        document.getElementById("n-3").innerHTML = randomArray[2];
        document.getElementById("n-4").innerHTML = randomArray[3];
        document.getElementById("n-5").innerHTML = randomArray[4];
        document.getElementById("n-6").innerHTML = randomArray[5];
        document.getElementById("n-7").innerHTML = randomArray[6];
        document.getElementById("n-8").innerHTML = randomArray[7];
        document.getElementById("n-9").innerHTML = randomArray[8];
        document.getElementById("n-10").innerHTML = randomArray[9];





        // I will identify the smallest number

        document.getElementById("min").innerHTML = Math.min.apply(null, randomArray);




        // the biggest number

        document.getElementById("max").innerHTML = Math.max.apply(null, randomArray);




        // the sum of the numbers

        let reduceMethod = (accumulator, currentValue) => accumulator + currentValue;

        document.getElementById("sum").innerHTML = randomArray.reduce(reduceMethod);




        // the average of all numbers

        let arrAvg = randomArray => randomArray.reduce((a, b) => a + b, 0) / randomArray.length;

        console.log(arrAvg(randomArray));
        document.getElementById("average").innerHTML =  arrAvg(randomArray);
    });

})();