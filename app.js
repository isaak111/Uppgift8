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
            break;
        case 'list':
            //lista alla regristerade användare
            users.map(item => console.log(item.name))
            break;
        case 'info':
            //specifik information
            let found1 = users.find(user => user.name === newInputName)
            console.log(found1)
            break;
        case 'delete':
            //ta bort användare
            let found3 = users.find(user => user.name === newInputName)

            if (found3.name == newInputName) {
                users.splice(users.indexOf(found3), 1);
            }
            users.map(item => console.log(item))  
            break;
        case 'login':
            // loggar in användare
            // kontrollera så ingen är inloggad
            break;
        case 'logout':
            //loggar ut användare
            break;
          


        default:
            console.log('borta')
    }

})

/*prompt.get(['username', 'email'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Email: ' + result.email);
});*/

function onErr(err) {
    console.log(err);
    return 1;
}



