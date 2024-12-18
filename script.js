// let a=prompt("First number?");
// let b=prompt("operation?");
// let c=prompt("Second number?");

// let obj={
//     "+":"-",
//     "-":"+",
//     "**":"/",
//     "*":"%"
// };
// const random=Math.random();
// if(random<0.1){
//     b=obj[b];
//     alert(`the result is ${eval(`${a} ${b} ${c}`)}`);
// }
// else {
//     alert(`the result is ${eval(`${a} ${b} ${c}`)}`);

// }

function adjective(){
    let adj="Crazy,Amazing,Fire";
    let words=adj.split(",");
    let max=words.length-1;
    let index=Math.floor(Math.random()*max);
    return words[index] +" "+ ShopName()+" "+arekta();
}

function ShopName(){
    let adj="Engines,Foods,Garments";
    let words=adj.split(",");
    let max=words.length-1;
    let index=Math.floor(Math.random()*max);
    return words[index];
}
function arekta(){
    let adj="Bros,Limited,Hub";
    let words=adj.split(",");
    let max=words.length-1;
    let index=Math.floor(Math.random()*max);
    return words[index];
}

let naam=adjective();
// console.log(naam);
let a=[2,3,4,5,6];
// a.forEach((value,index)=>{
//     console.log(value,index);
// })

let ans=prompt("factorial of number?");
let num=parseInt(ans);
let arr=new Array(num-1);
for(let i=0;i<num;i++){
    arr[i]=i+1;
}
let newArr=arr.reduce((acc,val)=>{return acc*val},1);
alert(newArr);




