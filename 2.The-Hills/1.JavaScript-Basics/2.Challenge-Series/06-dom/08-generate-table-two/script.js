/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


function table() {
    // get the reference for the target id

    let body = document.getElementById("target");
  
    // this makes the table and table body elements

    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
  
    // now i make all of the cells

    for (let i = 0; i < 10; i++) {
      // and then the rows

      let row = document.createElement("tr");
  
      for (let j = 0; j < 10; j++) {

        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row

        let cell = document.createElement("td");
        let cellText = document.createTextNode("help");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body

      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>

    tbl.appendChild(tblBody);
    // put the table into the body

    body.appendChild(tbl);
    // make a border with 2 as its attribute

    tbl.setAttribute("border", "2");
  }

  table()
