function dnaStrand(dna) {
//create a mapping of each DNA base to its complement
const complement = {
'A': 'T',
'T': 'A',
'C': 'G',
'G': 'C'
};
//replace each base with its complement
let complementaryStrand = '';
for (let base of dna) {
complementaryStrand += complement[base];
}
return complementaryStrand;
}
//example usage:
console.log(dnaStrand("ATTGC")); //output: "TAACG"
console.log(dnaStrand("GTAT"));  //output: "CATA"