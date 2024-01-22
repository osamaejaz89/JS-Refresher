const person = {
    name: 'Alpha',
    age: 26,
    greet() {
        console.log("Hi , I am " + this.name)
    }
}

person.greet()