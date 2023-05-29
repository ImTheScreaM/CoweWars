function howMuchILoveYou(nbPetals) {
	const prase = {
	 1: "I love you",
	 2: "a little",
	 3: "a lot",
	 4: "passionately",
	 5: "madly",
	 0: "not at all",
	}
	return prase[nbPetals % 6]
 }
 
 
 
 console.log(howMuchILoveYou(1)); // I love you
 console.log(howMuchILoveYou(2)); // a little
 console.log(howMuchILoveYou(3)); // a lot
 console.log(howMuchILoveYou(4)); // passionately
 console.log(howMuchILoveYou(5)); // madly
 console.log(howMuchILoveYou(6)); // not at all
 console.log(howMuchILoveYou(7)); // i love you