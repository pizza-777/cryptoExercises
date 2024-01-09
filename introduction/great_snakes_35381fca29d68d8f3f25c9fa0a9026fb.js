const ords = [81, 64, 75, 66, 70, 93, 73, 72, 1, 92, 109, 2, 84, 109, 66, 75, 70, 90, 2, 92, 79];

console.log("Here is your flag:");
console.log(ords.map(o => String.fromCharCode(o ^ 0x32)).join(''));
