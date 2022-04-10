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


  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
  const match = regexData.exec('2018-04-20');
  const year = match [1]
  const month = match[2]
  const day = match[3]

  console.log(year,month, day);