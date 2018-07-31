class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function Greeter(person) {
    return `Hello, ${person.firstName} ${person.lastName}!`;
}
let user = new Student("Yoshito", "", "Tabuchi");
document.body.innerHTML = Greeter(user);
//# sourceMappingURL=greeter.js.map