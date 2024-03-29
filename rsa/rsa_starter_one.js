//modulus exponentiation
function expmod( base, exp, mod ){
    if (exp == 0) return 1;
    if (exp % 2 == 0){
      return Math.pow( expmod( base, (exp / 2), mod), 2) % mod;
    }
    else {
      return (base * expmod( base, (exp - 1), mod)) % mod;
    }
  }

//console.log(expmod(101, 17, 22663))
  
module.exports = {
    expmod
}