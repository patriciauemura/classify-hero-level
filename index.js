var nome = prompt("Digite seu nome")
var qtdeXP = prompt("Digite a quantidade de XP");
var nivel;

if (qtdeXP <= 1000){
  nivel = "Ferro";
} else if (qtdeXP <= 2000){
  nivel = "Bronze";
} else if (qtdeXP <= 5000){
  nivel = "Prata";
} else if (qtdeXP <= 7000){
  nivel = "Ouro";
} else if (qtdeXP <= 8000){
  nivel = "Platina";
} else if (qtdeXP <= 9000){
  nivel = "Ascendente";
} else if (qtdeXP <= 10000){
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

alert(`O Herói de nome ${nome} está no nível de ${nivel}`)