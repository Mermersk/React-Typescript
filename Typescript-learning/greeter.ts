class Student {

    private fullName: string;

    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }

    getFullName() {
        return this.fullName;
    }

}

interface Person {
    firstName: string;
    lastName: string;

}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "Marion", "User");

document.body.textContent = greeter(user);

console.log(user.getFullName())