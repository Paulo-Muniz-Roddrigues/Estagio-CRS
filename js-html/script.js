let input = document.getElementById('todos');
let botao = document.getElementById('botao');

let corBody = document.getElementById('corBody');
let corTexto = document.getElementById('corTexto');

let menu = document.getElementById('popup');

function show() {
  menu.style.display = 'block';
}

let itens = [];

getLocalStorage();

console.log(itens[0]);

botao.addEventListener('click', (_) => {
  if(input.value.replace(/ /g, '')) {
    itens.push(
      {
        descricao: input.value,
        corB: corBody.value,
        corT: corTexto.value
      }
    )
  }
  addLocalStorage();
  addCard();
});

function addLocalStorage () {
  localStorage.setItem('itens', JSON.stringify(itens));
};

function getLocalStorage () {
  try {
    itens = JSON.parse(localStorage.getItem('itens'));
    addCard();
  }
  catch {
    localStorage.setItem('itens', '[]');
  }
}

function addCard() {
  divItens.innerHTML = '';
  
  itens.forEach((objeto, indice) => {
    let { descricao, corB, corT } = objeto;
    let linha = document.createElement('div');
    linha.className = 'row mt-3';
    linha.innerHTML = `
      <div class="col-12">
        <div class="card" style="background-color: ${corB};">
          <div class="card-body">

            <div class="row">
              <div class="col-11">
                <span style="color: ${corT};">
                  ${indice} - ${descricao}
                </span>
              </div>

              <div class="col-1" style"">
                <button  onclick="editar(${indice})"> 
                  <img src="./editar.png" style="width: 50%;">
                </button> 
              </div>
            </div>
            
          </div>
        </div>
      </div>
    `
    divItens.appendChild(linha);
    console.log(linha);
  })
};

function excluir(_) {
  const idExclusao = prompt('Informe o número para exclução: ');
  console.log(index);
  if(idExclusao.toString().replace(/ \D/g, '')) {
    itens.splice(idExclusao, 1);
  }
  addLocalStorage();
  addCard();
};

function editar(index) {
  itens[index].descricao = prompt('Escreva um novo input: ');
  addLocalStorage();
  addCard();
}