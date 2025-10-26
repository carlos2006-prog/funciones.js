import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function saludar(nombre) {
  console.log(`Hola ${nombre}, ¡bienvenido a JavaScript!`);
}

const resta = (n1, n2) => {
  let res = n1 - n2;
  return res;
};

rl.question("Ingrese su nombre para saludarlo: ", (nom) => {
  rl.question("Ingrese el primer número: ", (num1) => {
    rl.question("Ingrese el segundo número: ", (num2) => {

      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      saludar(nom);
      console.log(`La resta de ambos números es: ${resta(num1, num2)}`);

      rl.close();
    });
  });
});