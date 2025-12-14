async function asyncFn(){
     return "name";
}

console.log(asyncFn);

asyncFn().then(res=>console.log(res));