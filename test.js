function sayHallo(subject){
    return `Hello ${subject}`;
}
function greeting() {
return sayHallo;
}

var f = greeting()('Mickey');

console.log(f);