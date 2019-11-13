/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function table() {

    // get the reference for the target id

    let body = document.getElementById("target");
  
    // then i create the table body and table elements

    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
  


    // this makes all the cells

    for (let i = 0; i < 10; i++) {


      // and this makes the rows

      let row = document.createElement("tr");
  
      for (let j = 0; j < 1; j++) {

        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row

        let cell = document.createElement("td");
        let cellText = document.createTextNode("cell " + i);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  

      // add the row to the end of the table body

      tblBody.appendChild(row);
    }
  

    // puts the tbody in the table

    tbl.appendChild(tblBody);


    // appends <table> into <body>

    body.appendChild(tbl);


    // makes a border with a 2 attribute

    tbl.setAttribute("border", "2");
  }

  table()
