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

const parseFeeInfo = fee =>
  wrapWithTag(fee.title, `p`) +
  wrapWithTag(fee.price, `p`);



// Then I display the plain fee information

const createList = feeList => {
  return `<ul>${feeList
    .map(fees => wrapWithTag(parseFeeInfo(fees), `li`))
    .join(``)
  }</ul>`;
};

document.write(createList(feeList));