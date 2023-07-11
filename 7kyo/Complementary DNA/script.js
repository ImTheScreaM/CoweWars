function DNAStrand(dna){
	const DNASymbols = {
		'G' : 'C',
    'C' : 'G', 
    'T' : 'A',
    'A' : 'T'
	}
	return dna.split('').map(sym => DNASymbols[sym]).join('') 
}

console.log(DNAStrand('AAAA'));