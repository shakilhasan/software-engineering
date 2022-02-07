let language = 'Java';
let LANGUAGE = 'JavaScript';

function getLanguage(){
    if(!language){
        let language;
        language = LANGUAGE;
    }
    return language;
}

console.log(`i love ${getLanguage()}`);