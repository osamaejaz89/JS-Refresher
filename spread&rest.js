const person = {
  name: "Alpha",
  age: 26,
  greet() {
    console.log("Hi , I am " + this.name);
  },
};

person.greet();

//Spread Object

const copiedPerson = { ...person };
console.log(copiedPerson);

//Rest parameter

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4, 5));

const hobbies = ["Sports", "Cooking"];

for (let hobby of hobbies) {
  console.log(hobby);
}

console.log(hobbies.map((hobby) => "Hobby: " + hobby));
console.log(hobbies);

hobbies.push("Cricket");
console.log(hobbies);

//Spread Array

const copiedHobbies = [...hobbies];
console.log(copiedHobbies);
