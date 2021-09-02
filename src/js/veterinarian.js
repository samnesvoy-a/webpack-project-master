import Person from "./person";

export default class Veterinar extends Person{
   #diagnosis = { 
      ill : 'ill',
      healthy: 'healthy' 
    };
    constructor ( fistName, lastName, hospital){
        super(fistName,lastName);
        this.hospital = hospital;

    }
    getFullName(){
        return `${this.fistName} ${this.lastName} from  ${this.hospital.name}`;
    };
    
    _setDiagnosis(animal){
      if(animal.weight > 20){
          return {
            diagnosis: this.#diagnosis.ill,
            info: 'overweight',
         };
      }else if(animal.food === 'pet food'){
        return {
            diagnosis: this.#diagnosis.ill,
            info: animal.changeFood('meet with rise'),
         };
      }else if(animal.isHomeless){
        return {
            diagnosis: this.#diagnosis.healthy,
            info: `change home. ${this.hospital.findHome(animal)} hes new friend ${animal.nickname}`,
         }
        }
      return {
        diagnosis:  this.#diagnosis.healthy,
        info: `${animal.nickname} ${animal.location}`
     };
    };
    
    treatAnimal(animal){
      let animalDiagnos = this._setDiagnosis(animal);
      if(animalDiagnos.diagnosis === 'ill'){
          this.hospital.addAnimal(animal);
          return {
            info: `${animal.nickname} from ${animal.location}`,
            fullDiagnos: `${animalDiagnos.diagnosis} : ${animalDiagnos.info}`
          }
      }
     return animalDiagnos;
    }


}