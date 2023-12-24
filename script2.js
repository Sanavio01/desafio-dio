let nome = 'Batman';
let nivel = 8001;
let mensagem;

switch (true) {
    case (nivel <= 1000):
        mensagem = 'O Herói ' + nome + ' está no nível Ferro';
        break;
    case (nivel > 1000 && nivel <= 2000):
        mensagem = 'O Herói ' + nome + ' está no nível Bronze';
        break;
    case (nivel > 2000 && nivel <= 5000):
        mensagem = 'O Herói ' + nome + ' está no nível Prata';
        break;
    case (nivel > 5000 && nivel <= 7000):
        mensagem = 'O Herói ' + nome + ' está no nível Ouro';
        break;
    case (nivel > 7000 && nivel <= 8000):
        mensagem = 'O Herói ' + nome + ' está no nível Platina';
        break;
    case (nivel > 8000 && nivel <= 9000):
        mensagem = 'O Herói ' + nome + ' está no nível Ascendente';
        break;
    case (nivel > 9000 && nivel <= 10000):
        mensagem = 'O Herói ' + nome + ' está no nível Imortal';
        break;
    default:
        mensagem = 'O Herói ' + nome + ' está no nível Radiante';
}

console.log(mensagem);
