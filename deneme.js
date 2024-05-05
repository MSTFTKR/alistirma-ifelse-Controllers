/*const kisi={ad:"mustafa", yas:25, hobiler:["yüzmek","spor"]};
console.log(kisi);
console.log("---------------------------------------------")

const cevir=(a)=>{
let to=Number(a);
console.log(to);
}
cevir("10");
console.log("---------------------------------------------")

const scevir=(a)=>{
let to=String(a);
console.log(to);
}
scevir(10);
console.log("---------------------------------------------")

const topla=(a,b)=>a+b;
console.log(topla(10,5));
console.log("---------------------------------------------")
*/
const len = (b) => {
  var ret = b.split(" ");
  let c = ret.length;
  if (b[0] === " ") {c -= 1;}
  if (b[b.length - 1] === " ") {c -= 1;}
  console.log(c+' Kelime içeriyor');
  console.log(b);
};
len(" Mustafaaa kursa gidiyorr iki ama nasıl ");
console.log("---------------------------------------------");
/*
const ogrenci=(c)=>{
    if(c>=70){
        console.log("Geçti")
    }
    else{
        console.log("Kaldı")
    }
}
ogrenci(70)

console.log("---------------------------------------------")

const yas=(c)=>{
    if(c>=18){
        console.log("18'den büyük")
    }
    else{
        console.log("18'den küçük")
    }
}
yas(17)
console.log("---------------------------------------------")


const isaret=(a)=>{
    if(a>0){
        console.log("Pozitif")
    }else if(a==0){
        console.log("0")
    }
    else{
        console.log("Negatif")
    }


}
isaret(0)


const giris={username:"mustaf12",password:"123as"}

function girisyap(username,password){
    if(giris.username===username && giris.password===password){
        console.log("giris basarılı")
    } else { 
        console.log("bilgiler hatalı tekrar deneyiniz")
    }


}
girisyap("mustaf12","123as")*/
