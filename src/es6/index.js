function newFunction(name, age, country) {
    var name = name || 'Axel'
    var age = age || 36;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6
function newFunction2(Name = 'Axel', age = 36, country = 'MX') {
    console.log(Name, age, country);
}

newFunction2();
newFunction2('Ricardo', '23', 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + '' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)

let lorem = "frase épica que queramos separar \n"
+ "otra frase épica que necesitamos."

let lorem2 = `otra frase épica que necesitamos
ahora es otra frase épica
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'axel',
    'age': 36,
    'country': 'MX'
}
console.log(person.name, person.age);

let { name, age, country } = person;
console.log(name, age, country);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

const a = 'b';
a = 'a';
console.log(a);

