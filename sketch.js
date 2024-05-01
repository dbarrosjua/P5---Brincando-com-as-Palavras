let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
}

function palavraAleatoria() {
  let palavras = [
    "Marie Curie",
    "Ada Lovelace",
    "Rosalind Franklin",
    "Jane Goodall",
  ];
  return random(palavras);
}

function iniciandoCores() {
  background("white");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  iniciandoCores();

  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
}

