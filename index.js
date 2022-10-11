import inquirer from 'inquirer';

console.log('------------  ** Project00-calculator ** ------------------')

inquirer
  .prompt([
    {
        type: 'input',
        name: 'name',
        //default: 'Dear,',
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
  ])
  .then((answers) => {
        const name = answers.name;
        const userInpt1 = answers.userInpt1;
        const userInpt2 = answers.userInpt2;
        const opt2 = answers.operation;
        const optl = (syml) => {
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


    
