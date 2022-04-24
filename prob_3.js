"use strict";
class Pizza {
    constructor(_size, _extraCheese, _pepperoniToppings, _hamToppings, _pinneapleTopping) {
        this._size = _size;
        this._extraCheese = _extraCheese;
        this._pepperoniToppings = _pepperoniToppings;
        this._hamToppings = _hamToppings;
        this._pinneapleTopping = _pinneapleTopping;
    }
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
    }
    get extraCheese() {
        return this._extraCheese;
    }
    set extraCheese(value) {
        this._extraCheese = value;
    }
    get pepperoniToppings() {
        return this._pepperoniToppings;
    }
    set pepperoniToppings(value) {
        this._pepperoniToppings = value;
    }
    get hamToppings() {
        return this._hamToppings;
    }
    set hamToppings(value) {
        this._hamToppings = value;
    }
    get pinneapleTopping() {
        return this._pinneapleTopping;
    }
    set pinneapleTopping(value) {
        this._pinneapleTopping = value;
    }
    cheeseValue() {
        if (this.extraCheese) {
            return 1;
        }
        else {
            return 0;
        }
    }
    getCost() {
        let pizzaCost;
        switch (this._size) {
            case "Small":
                pizzaCost = 10 + (this.cheeseValue() * 2) + (this._pepperoniToppings * 2) + (this._hamToppings * 2) + (this._pinneapleTopping * 2);
                break;
            case "Medium":
                pizzaCost = 12 + (this.cheeseValue() * 4) + (this._pepperoniToppings * 2) + (this._hamToppings * 2) + (this._pinneapleTopping * 2);
                break;
            case "Large":
                pizzaCost = 14 + (this.cheeseValue() * 6) + (this._pepperoniToppings * 3) + (this._hamToppings * 3) + (this._pinneapleTopping * 3);
                break;
            case "Extra-Large":
                pizzaCost = 18 + (this.cheeseValue() * 6) + (this._pepperoniToppings * 4) + (this._hamToppings * 4) + (this._pinneapleTopping * 4);
                break;
            default:
                console.log("manda tamaño");
                break;
        }
        return pizzaCost;
    }
}
const smallPizza = new Pizza("Small", true, 1, 1, 1);
let small = smallPizza.getCost();
console.log(small);
const mediumPizza = new Pizza("Medium", true, 1, 1, 1);
let medium = mediumPizza.getCost();
console.log(medium);
const largePizza = new Pizza("Large", true, 1, 1, 1);
let large = largePizza.getCost();
console.log(large);
const extraPizza = new Pizza("Extra-Large", true, 1, 1, 1);
let extra = extraPizza.getCost();
console.log(extra);
