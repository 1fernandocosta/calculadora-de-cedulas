function somar() {
    let doisReais = parseInt(document.getElementById("dois-reais").value);
    let subTotalDoisReais = Math.abs(doisReais) * 2;
    subTotalDoisReais2.innerHTML = 'R$ ' + subTotalDoisReais.toLocaleString('pt-BR') + ",00";

    let cincoReais = parseInt(document.getElementById("cinco-reais").value);
    let subTotalCincoReais = Math.abs(cincoReais) * 5;
    subTotalCincoReais2.innerHTML = 'R$ ' + subTotalCincoReais.toLocaleString('pt-BR') + ",00";

    let dezReais = parseInt(document.getElementById("dez-reais").value);
    let subTotalDezReais = Math.abs(dezReais) * 10;
    subTotalDezReais2.innerHTML = 'R$ ' + subTotalDezReais.toLocaleString('pt-BR') + ",00";

    let vinteReais = parseInt(document.getElementById("vinte-reais").value);
    let subTotalVinteReais = Math.abs(vinteReais) * 20;
    subTotalVinteReais2.innerHTML = 'R$ ' + subTotalVinteReais.toLocaleString('pt-BR') + ",00";

    let cinquentaReais = parseInt(document.getElementById("cinquenta-reais").value);
    let subTotalCinquentaReais = Math.abs(cinquentaReais) * 50;
    subTotalCinquentaReais2.innerHTML = 'R$ ' + subTotalCinquentaReais.toLocaleString('pt-BR') + ",00";

    let cemReais = parseInt(document.getElementById("cem-reais").value);
    let subTotalCemReais = Math.abs(cemReais) * 100;
    subTotalCemReais2.innerHTML = 'R$ ' + subTotalCemReais.toLocaleString('pt-BR') + ",00";

    let duzentosReais = parseInt(document.getElementById("duzentos-reais").value);
    let subTotalDuzentosReais = Math.abs(duzentosReais) * 200;
    subTotalDuzentosReais2.innerHTML = 'R$ ' + subTotalDuzentosReais.toLocaleString('pt-BR') + ",00";

    let total = subTotalDoisReais + subTotalCincoReais + subTotalDezReais + subTotalVinteReais + subTotalCinquentaReais + subTotalCemReais + subTotalDuzentosReais;
    somatotal.innerHTML = 'R$ ' + total.toLocaleString('pt-BR') + ",00";

    const cedulas = Math.abs(doisReais) + Math.abs(cincoReais) + Math.abs(dezReais) + Math.abs(vinteReais) + Math.abs(cinquentaReais) + Math.abs(cemReais) + Math.abs(duzentosReais);
    cedulass.innerHTML = cedulas + ' Cédulas';

    console.log(cedulas);
    console.log(total);
}