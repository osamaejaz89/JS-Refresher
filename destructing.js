const person = {
  name: "Alpha",
  age: 26,
  greet() {
    console.log("Hi , I am " + this.name);
  },
};

//Destructing Objects
const printName = ({ name }) => {
    console.log(name)
}

printName(person)

const { name, age } = person;
console.log(name, age)


const hobbies = ["Sports", "Cooking"];

for (let hobby of hobbies) {
  console.log(hobby);
}

console.log(hobbies.map((hobby) => "Hobby: " + hobby));
console.log(hobbies);

hobbies.push("Cricket");
console.log(hobbies);

//Destructing Arrays

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
