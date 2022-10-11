import inquirer from 'inquirer';

console.log('------------  ** Project00-calculator ** ------------------')
const questions: any[] = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name',
        validate: (answers) => {
            if ( answers === ''){
              return `Please enter valid name you cannot leave it empty ` 
            }
            return true
        }
        
    },
    {
        type: 'number',
        name: 'userInpt1',
        message: 'Please enter 1st number (any number): ',
        validate: (answers) => {
            if ( isNaN(answers) ){
              return 'Please enter valid number'
            }
            return true
        }

    },
    {
        type: 'number',
        name: 'userInpt2',
        message: 'Please enter 2st number : ',
        validate: (answers) => {
            if ( isNaN(answers) ){
              return 'Please enter valid number'
            }
            return true
        }

    },
    {
        type: 'list',
        name: 'operation',
        choices: [ '+' , '-' , '*' , '/' ],
        message: 'Pic the action you want to perform ',
    }
]

inquirer
  .prompt(questions)
  .then((answers: any) => {
        const name: string = answers.name;
        const userInpt1: number = answers.userInpt1;
        const userInpt2: number = answers.userInpt2;
        const opt2: string = answers.operation;
        const optl = (syml: any) => {
            if ( syml === '+' ){
                return userInpt1 + userInpt2
            }else if ( syml === '-' ){
                return userInpt1 - userInpt2
            }
            else if ( syml === '*' ){
                return userInpt1 * userInpt2
            }
            else if ( syml === '/' ){
                return userInpt1 / userInpt2
            }
        }
        console.log( `Dear ${name} Your Output is : ${optl(opt2)} ` )
       
    })


    
