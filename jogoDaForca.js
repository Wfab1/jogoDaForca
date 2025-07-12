const palavras = [
  "morango", "melancia", "chocolate", "kiwi", "automovel",
  "lasanha", "macaronada", "espaguete", "programacao", "tubarao",
  "matematica", "biologia", "portugues", "historia", "geografia",
  "filosofia", "sociologia", "espanhol", "ingles", "seguranca"
];
const boneco = ["Cabeça", "Tronco", "Perna esquerda", "Perna direita", "Braço esquerdo", "Braço direito"];
function escolherPalavraAleatoria() {
  const indice = Math.floor(Math.random() * palavras.length);
  return palavras[indice];
}
function mostrarPalavra(palavra, letrasCorretas) {
  return palavra
    .split('')
    .map(letra => letrasCorretas.includes(letra) ? letra.toUpperCase() : "_")
    .join(" ");
}
function jogo() {
  const palavra = escolherPalavraAleatoria();
  let letrasCorretas = [];
  let letrasTentadas = [];
  let erros = 0;
  let ganhou = false;
  alert("Bem-vindo ao jogo da Forca!");
  while (erros < boneco.length && !ganhou) {
    const estado = mostrarPalavra(palavra, letrasCorretas);
    alert(`Palavra+: ${estado}`);
    console.clear();
    console.log("Jogo da Forca");
    console.log(`Palavra: ${estado}`);
    console.log(`Tentativas: ${letrasTentadas.join(", ") || "Nenhuma"}`);
    console.log(`Erros: ${erros} / ${boneco.length}`);
    const letra = prompt("Digite uma letra:").toLowerCase();
    if (!letra || letra.length !== 1 || !letra.match(/^[a-zà-ú]$/i)) {
      alert("Digite apenas uma letra válida.");
      continue;
    }
    if (letrasTentadas.includes(letra)) {
      alert("Você já tentou essa letra.");
      continue;
    }
    letrasTentadas.push(letra);
    if (palavra.includes(letra)) {
      letrasCorretas.push(letra);
      alert("Letra correta!");
    } else {
      alert(`Letra incorreta! Parte do boneco: ${boneco[erros]}`);
      erros++;
    }
    const palavraRevelada = palavra.split('').every(letra => letrasCorretas.includes(letra));
    if (palavraRevelada) {
      ganhou = true;
    }
  }
  if (ganhou) {
    alert(`Parabéns! Você acertou a palavra: ${palavra.toUpperCase()}`);
  } else {
    alert(`Que pena, você perdeu! A palavra era: ${palavra.toUpperCase()}`);
  }
  if (confirm("Deseja jogar novamente?")) {
    jogo();
  } else {
    alert("Fim do jogo.");
  }
}
jogo();
