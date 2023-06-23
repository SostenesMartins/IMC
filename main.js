const btnCalc = document.querySelector('.btn')

function calcImc() {
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const resultado = document.querySelector('.resultado');

    if (nome != '' && altura != '' && peso != '') {
        const imc = (peso / (altura * altura)).toFixed(1)

        if (imc < 18.5) {
            resultado.innerHTML = `${nome} seu IMC é: ${imc}, você esta abaixo do peso. `
        } else if (imc < 25) {
            resultado.innerHTML = `${nome} seu IMC é: ${imc}, voce esta com o peso normal`
        } else if (imc < 30) {
            resultado.innerHTML = `${nome} seu IMC é: ${imc}, voce esta acima do peso. Grau I`
        } else if (imc < 35) {
            resultado.innerHTML = `${nome} seu IMC é: ${imc}, voce esta acima do peso. Grau II`
        } else {
            resultado.innerHTML = `${nome} seu IMC é: ${imc}, voce esta acima do peso. Grau III CUIDADO!!`
        }
    } else {
       resultado.innerHTML = `Digite todos os dados!.`
    }

}

btnCalc.addEventListener('click', calcImc)

