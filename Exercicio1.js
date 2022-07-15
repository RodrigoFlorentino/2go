const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const checkNumber = (num) => {
  const getEsoterico = checkEsoterico(num);
  const isPrimo = checkPrimo(num);
  const retorno = `O número ${num} é ${getEsoterico}`;
  return isPrimo ? retorno + ' e PRIMO' : retorno;
}

const checkPrimo = (num) => {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

const checkEsoterico = (num) => {
  return (num % 3 === 0 && num % 5 === 0) ? 'ESOTÉRICO' : 'CÉTICO'
}

rl.question('Informe um número:', (numero) => {
  if (isNaN(numero)) {
    console.log('por favor informe um valor numérico');
  } else {
    console.log(checkNumber(numero));
  }
  rl.close();
})

