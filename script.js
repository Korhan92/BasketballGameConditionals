let johnscore = { score1: 89, score2: 120, score3: 103 }
let Mikescore = { score1: 116, score2: 94, score3: 123 }
johnscore = { score1: 0, score2: 130, score3: 143 }
let Maryscore = { score1: 97, score2: 134, score3: 105 }

let johnortalama = (johnscore.score1 + johnscore.score2 + johnscore.score3) / 3
let mikeortalama = (Mikescore.score1 + Mikescore.score2 + Mikescore.score3) / 3
let maryortalama = (Maryscore.score1 + Maryscore.score2 + Maryscore.score3) / 3

if (johnortalama > mikeortalama) {
    console.log(`john'un takımı ${johnortalama}  puanla kazandı.`)
}
else if (johnortalama === mikeortalama) { console.log('iki  takım eşit puanda.') }
else {
    console.log(`Mike'ın takımı ${mikeortalama}  puanla kazandı.`)

}// iki takım if yapısı ile karşılaştırdık.

if (johnortalama > mikeortalama && johnortalama > maryortalama) {
    console.log(`john'un takımı ${johnortalama}  puanla kazandı.`)
}
else if (johnortalama === mikeortalama && johnortalama === maryortalama && maryortalama === mikeortalama) { console.log('Üç  takım eşit puanda.') }
else if (maryortalama > johnortalama && maryortalama > mikeortalama) {
    console.log(`Mary'nın takımı ${maryortalama}  puanla kazandı.`)
}

else { console.log(`Mike'ın takımı ${mikeortalama}  puanla kazandı.`) }











