function somar() {
    let doisReais = document.getElementById("dois-reais").value
    let subTotalDoisReais = doisReais * 2
    subTotalDoisReais2.innerHTML = 'R$ ' + subTotalDoisReais.toLocaleString('pt-BR') + ",00"

    let cincoReais = document.getElementById("cinco-reais").value
    let subTotalCincoReais = cincoReais * 5
    subTotalCincoReais2.innerHTML = 'R$ ' + subTotalCincoReais.toLocaleString('pt-BR') + ",00"

    let dezReais = document.getElementById("dez-reais").value
    let subTotalDezReais = dezReais * 10
    subTotalDezReais2.innerHTML = 'R$ ' + subTotalDezReais.toLocaleString('pt-BR') + ",00"

    let vinteReais = document.getElementById("vinte-reais").value
    let subTotalVinteReais = vinteReais * 20
    subTotalVinteReais2.innerHTML = 'R$ ' + subTotalVinteReais.toLocaleString('pt-BR') + ",00"

    let cinquentaReais = document.getElementById("cinquenta-reais").value
    let subTotalCinquentaReais = cinquentaReais * 50
    subTotalCinquentaReais2.innerHTML = 'R$ ' + subTotalCinquentaReais.toLocaleString('pt-BR') + ",00"

    let cemReais = document.getElementById("cem-reais").value
    let subTotalCemReais = cemReais * 100
    subTotalCemReais2.innerHTML = 'R$ ' + subTotalCemReais.toLocaleString('pt-BR') + ",00"

    let duzentosReais = document.getElementById("duzentos-reais").value
    let subTotalDuzentosReais = duzentosReais * 200
    subTotalDuzentosReais2.innerHTML = 'R$ ' + subTotalDuzentosReais.toLocaleString('pt-BR') + ",00"







    console.log(subTotalDoisReais)

}