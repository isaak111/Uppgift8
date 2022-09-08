const prompt = require('prompt');


class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    print() {
        console.log('User: ' + this.name + '\n Password: ' + this.password);
    }
}

let users = [new User ('admin','password123'),
            new User ('batman', 'mörker')];


let loggedIn = null;

waitForUser = () => {
    prompt.start();
    prompt.get(['input'], function (err, result) {
        if(err) {return onErr(err);}
        const command = result.input.toLocaleLowerCase().split(' ')[0]
        let newInputName = result.input.toLocaleLowerCase().split(' ')[1]
        let newInputPass = result.input.toLocaleLowerCase().split(' ')[2]
        
        switch(command) {
            case 'register':
                let found = users.find(user => user.name === newInputName)

                if (found == undefined) {
                    users.push(new User(newInputName, newInputPass))
                    console.log('ny användare loggad' + newInputName)
                }
                users.map(item => console.log(item))
                waitForUser();               
                break;
            case 'list':
                users.map(item => console.log(item.name))
                waitForUser();
                break;
            case 'info':
                let found1 = users.find(user => user.name === newInputName)
                console.log(found1)
                waitForUser();
                break;
            case 'delete':
                let found3 = users.find(user => user.name === newInputName)

                if (found3.name == newInputName) {
                    users.splice(users.indexOf(found3), 1);
                }
                users.map(item => console.log(item))  
                waitForUser();
                break;
            case 'login':
                let found4 = users.find(user => user.name === newInputName)
                if(found4.name === newInputName && found4.password === newInputPass && loggedIn === null){
                    console.log(found4.name + " logged in")
                    loggedIn = found4.name;
                }else{
                    console.log("Someone else is logged in..")
                }
                waitForUser();
                break;
            case 'logout':
                let found5 = users.find(user => user.name === newInputName)
                if(loggedIn !== null){
                    if(loggedIn === found5.name){
                        console.log(" you've logged out.")
                        loggedIn = null;
                    }else{
                        console.log("User does not match input.")
                    }
                }else{
                    console.log("No user is logged in..")
                }
                waitForUser();
                break;
            
            case 'exit':
                console.log("Bye Bye!")
                break;
            default:
                console.log('borta')
        }


    })
}

waitForUser();
    
function onErr(err) {
    console.log(err);
    return 1;
}



