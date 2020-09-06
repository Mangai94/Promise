var promise = fetch('https://random-word-api.herokuapp.com/word?number=1');

promise.then((response) =>{
    return response.json()
}).then((data) =>{
    var word = data[0];
    return fetch('https://api.giphy.com/v1/gifs/search?q=word&api_key=shb15C6eYJluFggqcnN4RAdB9R4b9r5u&limit=5')
}).then((stickerresponse) =>{
    return stickerresponse.json()
}).then((finaldata) =>{
    console.log(finaldata.data);
})


var fixerpromise = fetch('http://data.fixer.io/api/latest?access_key=a2f6fed940e600fa054f752e14692ac5')

fixerpromise.then((response) =>{
    return response.json();
}).then((data) =>{
    console.log(data);
})



