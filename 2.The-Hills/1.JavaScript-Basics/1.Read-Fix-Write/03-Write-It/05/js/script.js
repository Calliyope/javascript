// Array of the fees

const fees = [
  {
    price: 10.75,
    title: "Normal Price"
  }, {
    price: 9.75,
    title: "Discount Price"
  }, {
    price: 8.05,
    title: "Kinepolis Student Card"
  }
];



// Array of the extras

const extras = [
  {
    price : 2.00,
    title : "Supplement 3D"
  }, {
    price : 2.00,
    title : "Supplement Escape"
  }, {
    price : 3.00,
    title : "Supplement HFR 3D"
  }, {
    price : 0.75,
    title : "Supplement Long Film (>/=2u15)"
  }, {
    price : 2.50,
    title : "Supplement Cosy Zone"
  }, {
    price : 1.00,
    title : "Supplement Atmos"
  }
];



// The tagging script.

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;



// First I process the fee data so that it can be displayed

const parseFeeInfo = fee => {
   const pTitle = wrapWithTag(fee.title, `p`);
   const pPrice = wrapWithTag(fee.price, `p`);

   return wrapWithTag(pTitle + pPrice, 'li');
}

// Then I display the plain fee information

const createList = (feeList, extraList) => {
  let outputHtml = "";

  for(const fee of feeList) {
    outputHtml += "<ul>";

    outputHtml += wrapWithTag(`${fee.title} (${fee.price})`, "li");

    for(const extra of extraList){
        const name = `${fee.title} + ${extra.title}`;
        const price = fee.price + extra.price;

        outputHtml += wrapWithTag(`${name} (${price})`, "li");
    }

    outputHtml += "</ul>";
  }

  return outputHtml;

};

document.write(createList(fees, extras));