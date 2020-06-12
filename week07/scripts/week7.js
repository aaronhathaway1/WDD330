    const requestURLplanets1 = 'https://swapi.dev/api/planets/';
    const requestURLplanets2 = 'https://swapi.dev/api/planets/?page=2';
    const requestURLplanets3 = 'https://swapi.dev/api/planets/?page=3';

    fetch(requestURLplanets1)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            for (let i = 0; i < 10; i++){
            console.log(jsonObject.results[i].name)
            }
        });

        fetch(requestURLplanets2)
        .then(function (response2) {
            return response2.json();
        })
        .then(function (jsonObject2) {
    
            
            for (let i = 0; i < 10; i++){
            console.log(jsonObject2.results[i].name)
            }
        });

        fetch(requestURLplanets3)
        .then(function (response3) {
            return response3.json();
        })
        .then(function (jsonObject3) {
    
            
            for (let i = 0; i < 10; i++){
            console.log(jsonObject3.results[i].name)
            }
        });