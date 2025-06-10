const games=[
    {name:"genshin",storagegb:40},
    {name:"mlbb", storagegb:10},
    {name:"toram", storagegb:1},
    {name:"wuwa", storagegb:20}
]

console.log(games);
console.log(games[3].name);
console.log(games[3].storagegb);

games.push({name:"uno", storagegb:0.5});
console.log(games);

console.log(games[3].storagegb=25);   ///we can update any value by this too

console.log(games);

games[0].type="rpg";
games[1].type="moba";
games[2].type="mmorpg";
games[3].type="rpg";
games[4].type="cards";

console.log(games);

//1st way of calculating total storagegb
// function calc(){
//     let sum=0;
//     for(let i=0;i<games.length;i++){
//         sum=sum+games[i].storagegb;
//     // console.log(games[i].storagegb);
// }
// console.log(sum);
// }
// calc();

//2nd way is using reduce() method

let calculatetotal=games.reduce((acc,items)=>items.storagegb+acc,0);
console.log(calculatetotal);
