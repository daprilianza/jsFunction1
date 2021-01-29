//Latihan-3
let catYear = catAge => {
	if (catAge === 1) {
        return 15 + ' years old of human';
    } else if (catAge === 2) {
        return 24 + ' years old of human';
    } else if (catAge >= 3) {
        return (catAge - 2) *4 + 24 + ' years old of human';
    }
}
console.log(catYear(4));
document.write(catYear(5));