class Pizza{
    private _size: string;
    private _extraCheese: boolean;
    private _pepperoniToppings: number;
    private _hamToppings: number;
    private _pinneapleTopping: number;
    
    constructor(_size: string, _extraCheese: boolean, _pepperoniToppings: number, _hamToppings: number, _pinneapleTopping: number){
        this._size = _size
        this._extraCheese = _extraCheese
        this._pepperoniToppings = _pepperoniToppings
        this._hamToppings = _hamToppings
        this._pinneapleTopping = _pinneapleTopping
    }
    public get size(): string {
        return this._size;
    }
    public set size(value: string) {
        this._size = value;
    }
    public get extraCheese(): boolean {
        return this._extraCheese;
    }
    public set extraCheese(value: boolean) {
        this._extraCheese = value;
    }
    public get pepperoniToppings(): number {
        return this._pepperoniToppings;
    }
    public set pepperoniToppings(value: number) {
        this._pepperoniToppings = value;
    }
    public get hamToppings(): number {
        return this._hamToppings;
    }
    public set hamToppings(value: number) {
        this._hamToppings = value;
    }
    public get pinneapleTopping(): number {
        return this._pinneapleTopping;
    }
    public set pinneapleTopping(value: number) {
        this._pinneapleTopping = value;
    }
    cheeseValue(){
        if(this.extraCheese)
        {
            return 1
        }else{
            return 0
        }
    }
    
    getCost(){
        let pizzaCost 
        switch(this._size){
            case "Small": 
                pizzaCost = 10+ (this.cheeseValue() * 2) +(this._pepperoniToppings *2)+(this._hamToppings *2)+(this._pinneapleTopping*2)
            break;
            case "Medium":
                pizzaCost = 12+ (this.cheeseValue() * 4) +(this._pepperoniToppings *2)+(this._hamToppings *2)+(this._pinneapleTopping*2)
            break;
            case "Large":
                pizzaCost = 14+ (this.cheeseValue() * 6) +(this._pepperoniToppings *3)+(this._hamToppings *3)+(this._pinneapleTopping*3)
            break;
            case "Extra-Large":
                pizzaCost = 18+ (this.cheeseValue() * 6) +(this._pepperoniToppings *4)+(this._hamToppings *4)+(this._pinneapleTopping*4)
            break;
            default:
            console.log("manda tamaño")
            break
        }
        return pizzaCost
    }

}

const smallPizza = new Pizza("Small",true,1,1,1);
let small =smallPizza.getCost()
console.log(small)
const mediumPizza = new Pizza("Medium",true,1,1,1);
let medium =mediumPizza.getCost()
console.log(medium)
const largePizza = new Pizza("Large",true,1,1,1);
let large =largePizza.getCost()
console.log(large)
const extraPizza = new Pizza("Extra-Large",true,1,1,1);
let extra =extraPizza.getCost()
console.log(extra)
