const { select, input } = require ('@inquirer/prompts');

let goal = {
    value : 'Drink water everyday',
    checked: false,
}

let goals = [ goal, ]

const { register } = require('module');
//dentro do objeto eu apenas quero o 'select';

const registerGoal = async () => {
    const meta = await input({ message: "Write your goal:"})

    if(meta.length == 0){
        console.log("Please, write a goal!");
        return
    }

    goals.push({ value: goal, checked: false})
}

const start = async() => {

 while(true){

    const option =  await select({
        message : "Menu >",
        choices : [
            {
                name : "Register goal",
                value: "Register"
            },
            {
                name: "Leave",
                value: "Leave"
            },
            {
                name : "List goals",
                value : "list"
            }
        ]
           
    })
    
    switch(option) {
        case "Register" :
             await registerGoal()
             console.log(goals)
            break //parar o caso de cadastrar
        case "to list" : 
            console.log("let's list");
            break
        case "Leave":
            console.log("See you later!");
            return
        }
    }
}   

start()