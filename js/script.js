let name = [
    "Aurore",
    "Joséphine",
    "Mélanie",
    "Céline",
    "Olivier",
    "Rémi",
    "Julien",
    "Valentine",
    "Robert",
    "Cercei",
    "John",
    "Ygritte"
];
let object = [
    "un pc",
    "une rose",
    "une pattate",
    "un sextoy",
    "une brique",
    "un rateau",
    "une orange",
    "une baguette",
    "une lampe torche",
    "un reverbère"
];
let temperature = [
    "15°c",
    "20°F",
    "-25°c",
    "-45°F",
    "451°F",
    "-273.15°c"
];
let places = [
    "le lit",
    "la voiture",
    "le canapé",
    "le jardin",
    "l'école",
    "le Vatican"
];
let verbs=[
    "se proménent",
    "se changent",
    "font l'amour",
    "se battent",
    "s'embrassent",
    "dévallent",
    "grimpent",
    "jouent"
];
let newDiv;
let input = document.getElementsByTagName("input");
let result = document.getElementById("result");
let button = document.getElementsByTagName("button");

button[0].addEventListener("click" , function (){
    newDiv = document.createElement("div");
    newDiv.innerHTML = randomStorie(input[1].value+" "+input[0].value);
    result.append(newDiv);

});

function randomWord(array){
    return array[Math.floor(Math.random()*array.length)];
}

function randomStorie(string){
    return  string+" et "+randomWord(name)+" "+randomWord(verbs)+" avec "+randomWord(object)+" par "+randomWord(temperature)+" dans "+randomWord(places)+".";
}

