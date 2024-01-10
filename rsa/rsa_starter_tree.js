//pubkey calc is based on diffucultly of factorisation of prime number
// This is the totien function used for it φ(N) = (p - 1) * (q - 1)
const prime1 = 857504083339712752489993810777n
const prime2 = 1029224947942998075080348647219n

console.log((prime1 - 1n) * (prime2 - 1n))