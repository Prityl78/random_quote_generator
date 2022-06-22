class Person {
constructor (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
getInformation () {
    return `Hello, ${this.firstName} ${this.lastName}! You are ${this.age} years old.`
}
};

const myForm = document.getElementById("info-form")
const info=document.getElementById("info")
function clearFields(){
    document.getElementById('firstname').value =" "
    document.getElementById('lastname').value =" "
    
    document.getElementById('age').value =" "
}
myForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const fName = document.getElementById("firstname").value
    const lName = document.getElementById("lastname").value
const age = document.getElementById("age").value

    console.log(fName, lName, age);
    const displayName = new Person(fName, lName, age)
info.innerHTML=displayName.getInformation()
clearFields()
})







/*export default Person;*/