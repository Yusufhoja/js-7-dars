

let a =["olma", "banan", "anor", "uzum"];
console.log(a);
alert (`Boshlanishda Arrayning uzunligi: ${a.length}`)
let b =confirm("sizning arrayingizdagi malumotlarni olib tashlamoqchimisiz")
if (b == true){
    a.pop("uzum")
    
    console.log(a); 
}
else{
    a.pop("uzum")
    a.push("uzum")
    console.log(a); 
}
alert (`Arrayning uzunligi: ${a.length}`)
