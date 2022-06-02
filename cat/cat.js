class Cat {
    constructor(name) {
        this.name = name
        this.tiredness = 5
        this.hunger = 5
        this.loneliness = 0
        this.happiness = 5
    }

    feed() {
        this.hunger -= 1
        this.happiness += 1
        if (this.hunger < 0) {
            this.hunger = 0
        }
        
    }
    sleep() {
        this.tiredness -= 1
        this.happiness += 1
        if (this.tiredness < 0) {
            this.tiredness = 0
        }
    }
    pet() {
        this.loneliness -= 1
        this.happiness += 1
        if (this.loneliness < 0) {
            this.loneliness = 0
        }
    }

    timePasses() {
        console.log("Time passes ...")
        this.happiness -= 3
        this.loneliness += 1
        this.hunger += 1
        this.tiredness += 1
        this.outputCat()
    }

    getCatDescription() {
        return `
        <div>tiredness: ${this.tiredness}</div>
        <div>hunger: ${this.hunger}</div>
        <div>loneliness: ${this.loneliness}</div>
        <div>happiness: ${this.happiness}</div>
        `
    }

    outputCat() {
        const catHtml = document.getElementById('catdisplay');
        catHtml.innerHTML = this.getCatDescription()
        // console.log(this.getCatDescription())
    }
}

const myCat = new Cat('Neti')
myCat.outputCat()

setInterval(() => {myCat.timePasses()}, 5000)


function catFeed(){
    const feedClick = document.getElementById('feed');
    feedClick.addEventListener('click', function(){
        myCat.feed()
    })
}
function catSleep(){
    const sleepClick = document.getElementById('sleep');
    sleepClick.addEventListener('click', function(){
        myCat.sleep()
    })
}
    
function myPet(){
    const petClick = document.getElementById('pet');
    petClick.addEventListener('click', function(){
        myCat.pet()
    })
}







// 1. Render cat status as html page at the start
// 1.1 creat html for state variable
// 2. Create html buttons and add eventListiners to them that will call cat methods(feed, sleep, pet) - myCat.feed()
// 2.1 After call to cat methods render cat data again
// hint: inside of the cat methods feed, sleep, pet call rendering 
// function from object itself: this.outputCat()
// 3. Creat intervals that calls timePasses in every 3s and render all cat data again
