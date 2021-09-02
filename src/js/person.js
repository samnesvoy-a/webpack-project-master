
export default class Person {
    constructor (fistName, lastName) {
        this.fistName = fistName;
        this.lastName = lastName;
    }
    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}