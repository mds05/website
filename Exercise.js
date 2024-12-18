let a=document.body.querySelector(".container").children;
let obj={
    1:"red",
    2:"green",
    3:"yellow",
    4:"orange",
    5:"blue"
};
for(let i=0;i<a.length;i++){
    document.body.querySelector(".container").children[i].style.backgroundColor=obj[i+1];
    a[i].style.color="white";
}
