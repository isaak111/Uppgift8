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

let users = [new User ('admin','password123')];

prompt.start();

prompt.get(['input'], function (err, result) {
    if(err) {return onErr(err);}
    const command = result.input.toLocaleLowerCase().split(' ')[0]
    switch(command) {
        case 'register':
            //om inte redan existerande finns
            let newUserName = result.input.toLocaleLowerCase().split(' ')[1]
            let newUserPass = result.input.toLocaleLowerCase().split(' ')[2]
            for(let user of users){
                if(newUserName  === user.name){
                    console.log('Användaren existerar redan')
                } else{
                    users.push = new User(newUserName, newUserPass)
                    console.log('ny användare loggad' + newUserName)
                    users.map(item => console.log(item))
                }
            }

            

               
            break;
        case 'list':
            //lista alla regristerade användare
            users.map(item => console.log(item))
            break;
        case 'info':
            //specifik information
            break;
        case 'delete':
            //ta bort användare
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



