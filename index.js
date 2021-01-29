//Latihan-1
function thanks (name = 'Anda', product = 'kami') {
    return 'Terima kasih ' + name + ' telah membeli produk ' + product + ' kami'
}
console.log (thanks('dedek','Kopi'));

//Latihan-2
function fahrenheit (number) {
    return number - 32;
};
function toCelcius (celcius) {
    return fahrenheit(celcius) * (5/9);
};
console.log (toCelcius(15));

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

//Latihan-4
let stringToLower = (string) => string.toLowerCase();

console.log ('hasilnya adalah ' + stringToLower('HURUF KECIL SEMUA'))

