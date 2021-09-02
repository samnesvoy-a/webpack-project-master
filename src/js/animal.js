export default class Animal {
    constructor (nickname, food, location) {
      this.nickname = nickname;
      this.food = food;
      this.location = location;
    }

  changeFood(newFood) {
      this.food = newFood;
        return `change food. Now ${this.nickname} eats ${this.food}`;
    }
}