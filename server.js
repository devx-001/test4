const express = require("express");
const app = new express();

const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log('The server is listening to port: ', PORT);
});

let sampleGreetings = {
    mindoro: "Magandang hapon",
    cebu: "Maayong hapon",
    ilocos: "Naimbag nga malem",
    bicol: "Marhay na hapon",
    english: "Good Afternoon!"
}


app.get('/', function(request, response) {
    response.send('Holassssssssssssssssssssss!');
});

app.get('/greetings', function(request, response) {
    const parameters = request.query;

    switch (parameters?.location) {
        case 'mindoro':
            response.send(sampleGreetings.mindoro);
            break;
        case 'cebu':
            response.send(sampleGreetings.cebu);
            break;
        case 'ilocos':
            response.send(sampleGreetings.ilocos);
            break;
        case 'bicol':
            response.send(sampleGreetings.bicol);
            break;
        default:
            response.send(paramaters.default);
            break;
    }

    // //check for the required and optional parameters: location and dialect
    // const location = parameters?.location;
    // const dialect = parameters?.dialect;
    // const defaultGreeting = parameters?.default;

    // if (!location) {
    //     //return english greeting
    //     response.send(sampleGreetings.english);
    // }

    // if (!dialect) {
    //     //process based on location
    //     switch (key) {
    //         case value:
                
    //             break;
        
    //         default:
    //             break;
    //     }
    // }


    //process based on location and dialect
    //code logic here
});

app.post('/custom-greetings', function(request, response) {
    const parameters = request.query;

    //check for the required and optional parameters: location, greeting, dialect
    const location = parameters?.location;
    const greeting = parameters?.greeting;
    const dialect = paramaters?.dialect;

    if (dialect === undefined ) {

    }

});



