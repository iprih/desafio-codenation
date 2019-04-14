const axios = require('axios');
const fs = require('fs');

const decifra = (string, shift) => {
  const strLowerCase = string.toLowerCase();
  const strDeciphered = strLowerCase.split('').map(char => {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      const value = char.charCodeAt(0)-97;
      return String.fromCharCode(97 + ((value - shift )% 26) );
    } else return char;
  });
  return strDeciphered.join('');
};

console.log(decifra('xkgroze ozykrl oy zuu uhbouay zu hk zxak. pkgt hgajxorrgxj', 6));

// console.log("Começa requisição...");
// axios.get("https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=0435cde572fdbd58a23c7abc7ea52e22af0e03ae")
//   .then(ret => {
//     const message = ret.data;

//     console.log("Cria arquivo awswer.json");
//     fs.writeFileSync("answer.json", JSON.stringify(message));

//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .then(_ => {
//     console.log("Apaga arquivo answer.json");
//     fs.unlinkSync("answer.json");
//     console.log("Fim do Programa!");
//   })
