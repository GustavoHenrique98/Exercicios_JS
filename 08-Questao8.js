// 8) Desenvolva um programa que leia uma distância em metros e mostre os valores
// relativos em outras medidas.
// Ex:
// Digite uma distância em metros: 185.72
// A distância de 85.7m corresponde a:
// 0.18572Km
// 1.8572Hm
// 18.572Dam
// 1857.2dm
// 18572.0cm
// 185720.0mm


let distancia = parseFloat(prompt('Digite uma distância em metros'));

console.log(`A distância de 185.72m em KM corresponde a : ${distancia/1000} KM`)
console.log(`A distância de 185.72m em HM corresponde a : ${distancia/100} HM`)
console.log(`A distância de 185.72m em DAM corresponde a : ${distancia/10} DAM`)
console.log(`A distância de 185.72m em DM corresponde a : ${distancia*10} DM`)
console.log(`A distância de 185.72m em CM corresponde a : ${distancia*100} CM`)
console.log(`A distância de 185.72m em MM corresponde a : ${distancia*1000} MM`)
