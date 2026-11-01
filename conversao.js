const quantidade = document.querySelectorAll('.quantidade');
const mediakg = document.querySelectorAll('.mediakg');
const rendimento = document.getElementById('rendimento');

function calcular() {
    for (let i = 0; i < quantidade.length; i++) {
        const valor = Number(quantidade[i].value);
        const producao = Number(rendimento.value);

        if (quantidade[i].value === '' || producao <= 0) {
            mediakg[i].innerHTML = '';
        } else {
            const conversao = valor / producao;
            mediakg[i].innerHTML = conversao.toFixed(2);
        }
    }
}

rendimento.addEventListener('input', calcular);

quantidade.forEach(function(campo) {
    campo.addEventListener('input', calcular);
});