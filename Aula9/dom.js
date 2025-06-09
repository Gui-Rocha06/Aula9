// Respostas das questões com exemplos da sintaxe
// 1. Selecionar elementos do DOM
const porId = document.getElementById('meuId');
const porClasse = document.getElementsByClassName('minhaClasse');
const porTag = document.getElementsByTagName('div');
const primeiroQuery = document.querySelector('.minhaClasse');
const todosQuery = document.querySelectorAll('p.exemplo');

// 2. Diferença entre innerHTML, textContent e innerText
const elemento = document.getElementById('exemplo');
console.log(elemento.innerHTML);
console.log(elemento.textContent); 
console.log(elemento.innerText);   

// 3. Adicionar, remover e alternar classes
elemento.classList.add('ativo');
elemento.classList.remove('ativo');
elemento.classList.toggle('ativo');

// 4. Por que o script no <head> pode falhar
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM carregado!');
});

// 5. Criar e anexar elementos ao DOM
const novo = document.createElement('p');
novo.textContent = 'Elemento novo!';
document.body.appendChild(novo); 

// 6. Diferença entre appendChild() e append()
const container = document.getElementById('container');
const filho = document.createElement('span');
filho.textContent = 'Sou filho!';
container.appendChild(filho); 

container.append('Texto', document.createElement('br')); 

// 7. Remover elementos do DOM
filho.remove(); 