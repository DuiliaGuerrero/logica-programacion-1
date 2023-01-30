const arr = [];

for (let i = 0; i <= 2; i++) {
    let num = parseInt(prompt(`Ingrese el número ${i+1}`));
    arr[i]=num;
}
if (arr[0]==arr[1] && arr[1]==arr[2]){
    console.log('Los numeros son repetidos');
}
console.log(arr.sort((a,b)=>b-a));
console.log(arr.reverse());
