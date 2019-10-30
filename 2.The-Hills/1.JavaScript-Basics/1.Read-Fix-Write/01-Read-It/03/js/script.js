const amount = 10;

for (let i = 0; i < amount; i++) {
  console.log(i);
  document.write(`<p>${i + 1}</p>`);
}


//I predict that this is going to log 1-9 in the console and display 11 on the screen....

//I was wrong about what would be displayed!

// This created 10 paragraphs that appear one on top of the other. It logs each instance of the operation performed so it shows us 1-10

//        1
//        2
//        3
//        4
//        5
//        6
//        7
//        8
//        9
//        10

// The console indeed did log 0-9. It checks if i is bigger than the amount (10) and logs it every time until the amount would be equal to the amount.