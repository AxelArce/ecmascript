const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello
});

const aBigNumber = 90071992540991n;
const anotherBigNumber = BigInt(90071992540991);

console.log(aBigNumber);
console.log(anotherBigNumber);


const fooo = null ?? 'default string';
console.log(fooo);