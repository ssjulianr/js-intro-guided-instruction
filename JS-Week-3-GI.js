// Easy 

let run = action("running");
let swim = action("swimming");

function action(x){
    console.log(`Today's Exercise: ${x}`)
}

// Medium 

let slices = 8; 

function cutPizzaSlices(x){
    console.log(slices/x)
}

cutPizzaSlices(4);

// Hard 

function createPII(name, ssn){
    const pii = {
        name: name,
        ssn: ssn
    };

    function getName(){
        return pii.name;
    }

    return getName;
}

const myPII = createPII("Rusty Shackleford", "xxx-xx-xxxx");

console.log(myPII());

// Very Hard

class Person{


constructor(name, job , age, languages) {

    this.name = name;
    this.job = job;
    this.age = age;
    this.language = [languages];
}


exercise(){
    console.log(`Get Them Gains`);
}


fetchJob(){
    console.log(`${this.name} is a ${this.job}`);
}
}


Person.prototype.isBusy = true;

Person.prototype.completeTask = function (){
    if(this.isBusy){
        console.log(`${this.name} completed task and is not busy`);
        this.isBusy = false;
    }
};

Person.prototype.offerNewTask = function(){
    if(this.isBusy){
        console.log(`${this.name} can't accept any new tasks right now`);
    } else {
        console.log(`${this.name} would love to take on a new repsonsilibty`);
        this.isBusy = true;
    }
};

Person.prototype.languages = function(){
    console.log(`${this.name} knows ${this.language.length} coding languages`);
};

Person.prototype.learnLanguage = function(x){
    this.language.push(x)
}

Person.prototype.listLanguages = function(){
    console.log(`${this.name} can write in the following languages: ${this.language}`)
}

const programmer = new Person("Julian", "Demigod", 26, "SASS");

const human = new Person("Krystal", "Graduate Student", 24, "HTML");

// console.log(programmer.isBusy)

programmer.fetchJob(); //Julian is a Demigod

console.log(programmer.isBusy); //Julian is busy now by default

programmer.exercise(); //Julian hits the gym to Get Them Gains

programmer.languages(); //At this time, Julian knows 1 coding language ("SASS" in the programmer variable)

programmer.completeTask(); //Julian finishes at the gym

console.log(programmer.isBusy); //Therefore, isBusy = false

programmer.offerNewTask(); //Julian is not busy and therefore would love a new task

programmer.learnLanguage('Javascript'); //Julian learns Javascript

console.log(programmer.isBusy); //Julian is busy learning Javascript

programmer.completeTask(); //Julian is done learning Javascript

programmer.languages(); //Now Julian knows 2 coding languages 

console.log(programmer.isBusy); //Julian is no longer busy 

human.languages(); //Krystal knows 1 coding language 

human.fetchJob(); //Krystal is a Graduate Student