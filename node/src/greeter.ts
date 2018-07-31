class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function Greeter(person: Person){
    return `Hello, ${person.firstName} ${person.lastName}!`;
}

let user = new Student("Yoshito", "", "Tabuchi");

document.body.innerHTML = Greeter(user);
