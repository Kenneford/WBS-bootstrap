class Car{
    constructor(name, color, isAutomatic = false){
        this.name = name
        this.color = color
        this.gearbox = 'manual'
        this._speed = 0
        if(isAutomatic){
            this.gearbox = 'automatic'
        }
    }
    accelerate(increase = 10){
        if(this.color == 'silver'){
            console.log(`My ${this.name} say: SILVER`)
        } else{
            console.log(`My ${this.name} say: WROOM ... WROOM`)
        }
        this._speed += increase
        console.log(`Speed is now ${this._speed}`)
    }
    breakSpeed(decrease = 10){
        this._speed -= decrease
        if(this._speed < 0){
            this._speed = 0
        }
        console.log(`Breaking... speed is now ${this._speed}`)
    }
    gearType(){
        if(this.gearbox == 'automatic'){
            console.log(`My car ${this.name} has an automatic changing gearbox 👍`)
        } else if(this.gearbox == 'manual'){
            console.log(`My car ${this.name} has a manual changing gearbox 😒`)
        }
    }

}
console.log(typeof Car);

const car1 = new Car('Ford', 'brown');

console.log(car1)
car1.accelerate(30)
car1.accelerate()
car1.accelerate()
car1.breakSpeed()
car1.breakSpeed()
car1.breakSpeed()
car1.gearType()

const car2 = new Car('Volvo', 'red')

console.log(car2)
car2.accelerate()
car2.gearType()

const car3 = new Car('Vw', 'silver', true)

console.log(car3)
car3.accelerate()
car3.gearType()





class FacebookUser{
    constructor(account, email, password){
        this.account = account
        this.email = email
        this.password = password
    }
    greet(){
        console.log(`Hello ${this.account}`)
    }
}

const facebookUser1 = new FacebookUser('Kenn', 'kenn@email.com', '***********')
const facebookUser2 = new FacebookUser('Max', 'max@email.com', '***********')

const facebookUsers = [facebookUser1, facebookUser2]
console.log(facebookUsers)
facebookUser1.greet()
facebookUser2.greet()


//GT 
class SportsCar extends Car{
    openDoors(){
        console.log(`Doors open now`)
    }
    accelerate(increase = 10){
        this._speed += increase * 2
        console.log(`${this.name} rallyspeed is now ${this._speed}`)

    }
    breakSpeed(decrease = 10){
        this._speed -= 10
        super.breakSpeed(decrease)
        // if(this._speed < 0){
        //     this._speed = 0
        // }
        console.log(`Breaking... speed is now ${this._speed}`)
    }
}

const sportsCar1 = new SportsCar('ToyotaGT', 'red and white')
sportsCar1.openDoors()
sportsCar1.accelerate(30)
sportsCar1.accelerate()
sportsCar1.accelerate()
sportsCar1.accelerate()
sportsCar1.breakSpeed(20)