// 1

function createGreetingFunction(name) {
    return function() {
        console.log(`Привет, ${name}!`);
    };
}

const greetAlex = createGreetingFunction('Александр');
greetAlex();

// 2.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`);
};

const person = new Person('Александр', 18);
person.greet();

// 3

function sumRecursive(n) {
    if (n === 1) return 1;
    return n + sumRecursive(n - 1);
}

console.log(sumRecursive(5));

// 4

async function fetchData(url, callback) {
    const response = await fetch(url);
    const data = await response.json();
    callback(data);
}

fetchData('https://jsonplaceholder.typicode.com/posts/1', console.log);

// 5

function greetPerson({ name, age }) {
    console.log(`Привет, ${name}! Тебе ${age} лет.`);
}

const personInfo = { name: 'Александр', age: 18 };
greetPerson(personInfo);

// 6.

function mergeArrays(...arrays) {
    const mergedArray = [].concat(...arrays);
    return [...new Set(mergedArray)];
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5]));

// 7

function addNumberIfNotExists(arr, n) {
    arr = arr || [];
    if (!arr.includes(n)) {
        arr.push(n);
    }
}

const numbers = [1, 2, 3];
addNumberIfNotExists(numbers, 3);
console.log(numbers);

// 8

function getNamesOfUsersUnder30(users) {
    return users
        .filter(user => user.age < 30)
        .map(user => user.name)
        .reduce((acc, name) => acc ? `${acc}, ${name}` : name, '');
}

const users = [
    { name: 'Александр', age: 28, email: 'alex@example.com' },
    { name: 'Антон', age: 31, email: 'anton@example.com' },
    { name: 'Андрей', age: 25, email: 'andrey@example.com' },
    { name: 'Никита', age: 22, email: 'nikita@example.com' }
];

console.log(getNamesOfUsersUnder30(users));

// 9

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

fetchData('https://jsonplaceholder.typicode.com/posts/1');

// 10

function* randomInt(start, end) {
    while (true) {
        yield Math.floor(Math.random() * (end - start + 1)) + start;
    }
}

const randomNumbers = randomInt(1, 10);
for (let i = 0; i < 10; i++) {
    console.log(randomNumbers.next().value);
}