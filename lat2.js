//Latihan-2
function fahrenheit (number) {
    return number - 32;
};
function toCelcius (celcius) {
    return fahrenheit(celcius) * (5/9);
};
console.log (toCelcius(15));
document.write ('Suhu 15 derajat Fahrenheit sama dengan ' + toCelcius(15) + ' derajat Celcius');