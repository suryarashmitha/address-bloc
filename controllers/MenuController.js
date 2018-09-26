const inquirer = require('inquirer');
module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
       type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: [
          "Add new contact",
          "Exit",
          "Get date"
        ]
      }
    ];
    this.contacts = [];
  }
    main(){
      console.log(`Welcome to AddressBloc!`);
     inquirer.prompt(this.mainMenuQuestions).then((response) => {
       switch(response.mainMenuChoice){
         case "Add new contact":
           this.addContact();
           break;
         case "Log data":
           this.getDate();
         case "Exit":
           this.exit();
         default:
           console.log("Invalid input");
           this.main();
       }
     })
     .catch((err) => {
       console.log(err);
     });
    }

    clear(){
      console.log("\x1Bc");
    }
    addContact(){
     this.clear();
     console.log('addContact called');
     this.main();
   }
   getDate(){
     this.clear();
    console.log('getDate called');
    var current = new Date();
    var formattedDate = (current.getMonth()+1) + '/' + current.getDate() + '/' + current.getFullYear();
    var formattedTime = current.getHours() + ':' + current.getMinutes();
    console.log('Today is ' + formattedDate + ' and the current time is ' + formattedTime);
    this.main();
   }
   getContactCount() {
     return this.contacts.length;
   }
   remindMe() {
     return "Learning is a life-long pursuit";
   }
   exit(){
     console.log("Thanks for using AddressBloc!");
     process.exit();
   }
}
