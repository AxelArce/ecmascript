const obj = {
    name: 'Axel',
    age: 36,
    country: 'MX'
};

let { name, ...all } = obj;
console.log(all);

const HelloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve('Hello World')
        :reject(new Error('Test Error'))
    });
}

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finally'))

