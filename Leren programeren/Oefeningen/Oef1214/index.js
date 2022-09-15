let nummer = 0;
let totaalSom = 0;
while (nummer >= 0) {

    nummer = Number(prompt("geef getallen in die je wilt optellen en stop met een negatief getal"))
   if(nummer<=0){

   }else{
       totaalSom = totaalSom + nummer;
   }

}
console.log(totaalSom)