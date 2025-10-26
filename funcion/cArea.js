import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularArea(base, altura) {
  let calculo = parseFloat(base * altura);
  return calculo;
}

rl.question("Ingrese la base del rectángulo: ", (base) => {
  rl.question("Ingrese la altura del rectángulo: ", (altura) => {

    base = parseFloat(base);
    altura = parseFloat(altura);

    let result = calcularArea(base, altura);
    console.log(`El área del rectángulo es: ${result}`);

    rl.close();
  });
});

