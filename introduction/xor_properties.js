//find the FLAG
const KEY1 = 'a6c8b6733c9b22de7bc0253266a3867df55acde8635e19c73313'
const KEY2xorKEY1 = '37dcb292030faa90d07eec17e3b1c6d8daf94c35d4c9191a5e1e'
const KEY2xorKEY3 = 'c1545756687e7573db23aa1c3452a098b71a7fbf0fddddde5fc1'
const FLAGxorKEY1xorKEY3xorKEY2 = '04ee9855208a2cd59091d04767ae47963170d1660df7f56f5faf'
function hexToBytes(hex) {
    const bytes = [];
    for (let i = 0; i < hex.length; i += 2) {
        bytes.push(parseInt(hex.substr(i, 2), 16));
    }
    return bytes;
}
function xorBytes(a, b) {
    return a.map((byte, i) => byte ^ b[i]);
}
const key1b = hexToBytes(KEY1)

const KEY2xorKEY1b = hexToBytes(KEY2xorKEY1)

const key2b = xorBytes(KEY2xorKEY1b, key1b)
const key3b = xorBytes(key2b, hexToBytes(KEY2xorKEY3))


const KEY1xorKEY3b = xorBytes(key1b, key3b)
const KEY1xorKEY3xorKEY2b = xorBytes(KEY1xorKEY3b, key2b)
const FLAGb = xorBytes(KEY1xorKEY3xorKEY2b, hexToBytes(FLAGxorKEY1xorKEY3xorKEY2))

console.log(String.fromCharCode(...FLAGb))