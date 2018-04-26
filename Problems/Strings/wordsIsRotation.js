// Main
function wordIsRotation(word1, word2) {
	if (!word1 || !word2 || word1.length != word2.length) {
		return false;
	}
	return (word1+word1).indexOf(word2) != -1;
}

console.log(wordIsRotation('foobarbaz', 'barbazfoo'));
console.log(wordIsRotation('same', 'mesa'));