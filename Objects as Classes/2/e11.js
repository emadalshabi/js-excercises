

let car = {
    make: "Emadaz",
    model: "hoo",
    year: 2024,
    start: function() {
        return "car start";
        
    }
};

console.log("Car information:");
console.log("Make: " + car.make);
console.log("Model: " + car.model);
console.log("Year: " + car.year);

var emad =  Object.create(car);
console.log(emad. start() )




