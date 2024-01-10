//xor labes with 13

const s = 'label'
const n = 13

//xor every charcode with 13
const c = [...s].map(s => s.charCodeAt(0) ^ 13)
//convert back
const r = c.map(charCode => String.fromCharCode(charCode)).join('')
console.log(r);
