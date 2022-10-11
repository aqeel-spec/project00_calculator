import inquirer from 'inquirer';
console.log('----------- ** BMI calculator ** --------------')

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name',
    validate: (answers) => {
      if ( answers === '' ){
        return 'Please enter valid name'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'height',
    message: 'What is your height (in inches) ?',
    validate: (answers) => {
      if ( isNaN(answers) ){
        return 'Please enter valid number'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'weight',
    message: 'What is your weight (in kg) ?',
    validate: (answers) => {
      if ( isNaN(answers) ){
        return 'Please enter valid number'
      }
      return true
    }
  }
]


inquirer
  .prompt(questions)
  .then((answers) => {
    const weight = answers.weight;
    const height = answers.height;
    const bmi = (weight /  (height * weight)) * 703;
    const isFloat = (num) => {
      if ( num %1 !== 0   ){
        return num.to
      }
    }
    if ( bmi < 20 ){
      console.log(`${answers.name} your BMI is ${bmi} and is consider test`)
    }else {
      console.log('no')
    } 
})
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });