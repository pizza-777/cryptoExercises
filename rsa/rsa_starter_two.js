//pubkey (n - modulus(prime1*prime2) and exp)

//encrypt 12 using the exponent e = 65537 and the primes p = 17 and q = 23
const { expmod } = require("./rsa_starter_one");

console.log(expmod(12, 65537, 17*23))
