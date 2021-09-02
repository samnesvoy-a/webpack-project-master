
export default class Hospital {
    #illAnimals = [];
    #findingPetsPeople = [];
    constructor (name){
        this.name = name;
       }
    getAnimals() {
        return this.#illAnimals;
    };
    getFindingPetsPeople() {
        return this.#findingPetsPeople;
    };
    addAnimal(animal) {
            this.#illAnimals.push(animal);
        };
    addPeople(human){
        this.#findingPetsPeople.push(human)
    };
    findHome(animal) {
        if(this.#illAnimals.find(beast => beast.nickname === animal.nickname)){
            return {
                status: restricted,
                message: `We need to heal ${animal.nickname} firstly`,
              };
        }else if(animal.isHomless){
           let newParent = this.#findingPetsPeople.pop();
           return {
            status: success,
            name: `${newParent.fistName}  ${newParent.lastName}`
            };
        }
    };
};