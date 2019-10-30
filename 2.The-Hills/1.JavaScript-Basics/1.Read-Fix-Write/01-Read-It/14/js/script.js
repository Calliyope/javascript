const theatres = [
  {
    number: 1,
    capacity: 250,
    occupied: 234,
  }, {
    number: 2,
    capacity: 250,
    occupied: 80,
  }, {
    number: 3,
    capacity: 150,
    occupied: 132,
  }, {
    number: 4,
    capacity: 100,
    occupied: 10,
  },
];

// Here the const calculateAvailable is being made by takinf the theatres and making a calculation. the available will be the capacity - the occupied
const calculateAvailable = theatre => {
  theatre.available = theatre.capacity -  theatre.occupied;
  return theatre;
};


//the console logs the theatres length (how many theatres there are) then it lofs the total capacity which is made using the reduce function - taking the total of all theatres and then adding them? then lastly is logs the calculation of the available spots by performing the calculate Available function we made above
console.log(`Theatres:`, theatres.length);
console.log(`Total capacity:`, theatres.reduce((total, theatre) => total + theatre.capacity, 0));
console.table(theatres.map(theatre => calculateAvailable(theatre)));
