let contador = 0;
let btnAdicionar = document.getElementById('adicionar');
let btnRemover = document.getElementById('remover');
let resultado = document.getElementById('resultado');
let btnsomarmais = document.getElementById('dobrosomar');
let btntirarmais = document.getElementById('dobrotirar');
let btnmultiplicar = document.getElementById('multiplicar');
let btndividir = document.getElementById('dividir')

const mais = btnAdicionar.addEventListener('click' , function(){


    contador ++;

    resultado.innerHTML = contador;
});

const menos = btnRemover.addEventListener('click' , function(){


    contador --;

    resultado.innerHTML = contador;

    if (contador < 0){
        return alert ('vc esta negativado')
    }
});

const maisdez = btnsomarmais.addEventListener('click', function(){


    contador += 10 ;

    resultado.innerHTML = contador;
})

const menosdez = btntirarmais.addEventListener('click', function(){


    contador -=10 ;

    resultado.innerHTML = contador;

    if (contador < 0){
        return alert ('vc esta negativado')
    }
})

const multiplicar = btnmultiplicar.addEventListener('click', function(){


    contador *=5;

    resultado.innerHTML = contador;
})

const dividir = btndividir.addEventListener('click', function(){


    contador /=2;

    resultado.innerHTML = contador;
})

const limpar = resultado.addEventListener('click', function(){

    contador = ' ';

    resultado.innerHTML = contador;
    

    
})