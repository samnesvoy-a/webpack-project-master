import Cat from "./cat";
import Dog from "./dog";
import Hospital from "./hospital";
import Person from "./person";
import Veterinar from "./veterinarian";


function main () {
    let hospital = new Hospital('Happy Animals');
    let doctor = new Veterinar( 'Alina', 'Toliupa', hospital);
    let dog = new Dog('Bob', 'meat', 'Kiev', 22);
    let dog_2 = new Dog('Bim', 'meet','Dnipro', 5);
    let cat = new Cat('Bars', 'pet food', 'Odessa');
    let cat_2 = new Cat('Alisa', 'pet food', 'hospital', false); //бездомное
    let cat_3 = new Cat('Sibastian', 'fish', 'hospital'); //бездомное
    let person = new Person('ALex', 'Slobodian');
    let person_2 = new Person('Julia', 'Zenkina');
    let person_3 = new Person('Emir', 'Opoku');
    //добавить в больницу животных и людей, которые ищут животных;
    // let conclusion = doctor.treatAnimal(cat);
    hospital.addPeople(person);
    hospital.addPeople(person_2);
    hospital.addPeople(person_3);
    hospital.addAnimal(dog);
    hospital.addAnimal(cat);
    let arrAnimals = [cat, dog, dog_2, cat_2, cat_3];
    console.group(doctor.getFullName());
    arrAnimals.forEach(animal => {
        console.log(doctor.treatAnimal(animal));
        
    });
    console.groupEnd();

}
main();