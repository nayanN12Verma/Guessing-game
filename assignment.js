// Qs1.Create a program that generates a random number represent in a dice roll.
// [The number should be between 1 and 6]
 let random = Math.floor(Math.random()*5)+1;
  console.log(random);

// Qs2.Create an object representing a car that stores the following properties
//  for the car:name,model,color.Print the car’s name.
   let car = {
     name: "BMW",
     model: "chakachak",
     color:"Yellow"
    }
    console.log(car.name);

// Qs3.Create an object Person with their name, age and city.
// Edit their city’s original value to change into “NewYork”.
// Add a new property country and set it to the UnitedStates
     let person = {
        Name: "Nayan",
        Age: "22",
        city:"Bhopal"
     }
     console.log(person);
     person.city = "NewYork";
     person.country ="UnitedStates";