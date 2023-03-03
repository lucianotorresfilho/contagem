function modificador() {
    let texto200 = document.getElementById('200').value;
    let final200 = document.getElementById('notas200').innerHTML = texto200 * 200;
    let texto100 = document.getElementById('100').value;
    let final100 = document.getElementById('notas100').innerHTML = texto100 * 100;
    let texto50 = document.getElementById('50').value;
    let final50 = document.getElementById('notas50').innerHTML = texto50 * 50;
    let texto20 = document.getElementById('20').value;
    let final20 = document.getElementById('notas20').innerHTML = texto20 * 20;
    let texto10 = document.getElementById('10').value;
    let final10 = document.getElementById('notas10').innerHTML = texto10 * 10;
    let texto5 = document.getElementById('5').value;
    let final5 = document.getElementById('notas5').innerHTML = texto5 * 5;
    let texto2 = document.getElementById('2').value;
    let final2 = document.getElementById('notas2').innerHTML = texto2 * 2;
    let textoMoedas = parseFloat(document.getElementById('moedas').value);
    document.getElementById('qtMoedas').innerHTML = textoMoedas;

    /*Resultado da contagem*/
    let resultado = final200 + final100 + final50 + final20 + final10 + final5 + final2 + textoMoedas;
    document.getElementById('totalDinheiro').innerHTML = resultado
}

function resultNotas() {
    //   alert('Olá mundo!')

    /*notas de 200*/
    let duzentos = document.getElementById('200');
    duzentos.addEventListener('input', modificador, true);

    /*notas de 100*/
    let cem = document.getElementById('100');
    cem.addEventListener('input', modificador, true);

    /*notas de 50*/
    let cinquenta = document.getElementById('50');
    cinquenta.addEventListener('input', modificador, true);

    /*notas de 20*/
    let vinte = document.getElementById('20');
    vinte.addEventListener('input', modificador, true);

    /*notas de 10*/
    let dez = document.getElementById('10');
    dez.addEventListener('input', modificador, true);

    /*notas de 5*/
    let cinco = document.getElementById('5');
    cinco.addEventListener('input', modificador, true);

    /*notas de 2*/
    let dois = document.getElementById('2');
    dois.addEventListener('input', modificador, true);

    /*Moedas*/
    let moedas = document.getElementById('moedas');
    moedas.addEventListener('input', modificador, true);

    /*Resultado da contagem*/
    let total = document.getElementById('totalDinheiro');
    total.addEventListener('input', modificador, true);
}