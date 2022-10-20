const romainNumbers = (rom) => {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let digits = Object.keys(map);
    let result = 0

for (var i = 0; i < rom.length; ++i) {
    if (digits.indexOf(rom[i]) < digits.indexOf(rom[i + 1])) {
        result -= map[rom[i]];
    } else {
        result += map[rom[i]];
    }
    }
    return result
}
    
console.log(romainNumbers('MCMXCIV'));