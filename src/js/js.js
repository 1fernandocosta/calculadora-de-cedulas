const refresh = document.querySelector("#limpar")
refresh.addEventListener('click', () => {
   location.reload()
})

let start = somar();

function toLimit(string = ""){
   string.value = string.value.substring(0,6);
}

function somar() {
   let doisReais = parseInt(document.getElementById("dois-reais").value);
   if (isNaN(doisReais)) {
      doisReais = 0
   }
   let subTotalDoisReais = Math.abs(doisReais) * 2;
   subTotalDoisReais2.innerHTML = 'R$ ' + subTotalDoisReais.toLocaleString('pt-BR') + ",00";

   let cincoReais = parseInt(document.getElementById("cinco-reais").value);
   if (isNaN(cincoReais)) {
      cincoReais = 0
   }
   let subTotalCincoReais = Math.abs(cincoReais) * 5;
   subTotalCincoReais2.innerHTML = 'R$ ' + subTotalCincoReais.toLocaleString('pt-BR') + ",00";

   let dezReais = parseInt(document.getElementById("dez-reais").value);
   if (isNaN(dezReais)) {
      dezReais = 0
   }
   let subTotalDezReais = Math.abs(dezReais) * 10;
   subTotalDezReais2.innerHTML = 'R$ ' + subTotalDezReais.toLocaleString('pt-BR') + ",00";

   let vinteReais = parseInt(document.getElementById("vinte-reais").value);
   if (isNaN(vinteReais)) {
      vinteReais = 0
   }
   let subTotalVinteReais = Math.abs(vinteReais) * 20;
   subTotalVinteReais2.innerHTML = 'R$ ' + subTotalVinteReais.toLocaleString('pt-BR') + ",00";

   let cinquentaReais = parseInt(document.getElementById("cinquenta-reais").value);
   if (isNaN(cinquentaReais)) {
      cinquentaReais = 0
   }
   let subTotalCinquentaReais = Math.abs(cinquentaReais) * 50;
   subTotalCinquentaReais2.innerHTML = 'R$ ' + subTotalCinquentaReais.toLocaleString('pt-BR') + ",00";

   let cemReais = parseInt(document.getElementById("cem-reais").value);
   if (isNaN(cemReais)) {
      cemReais = 0
   }
   let subTotalCemReais = Math.abs(cemReais) * 100;
   subTotalCemReais2.innerHTML = 'R$ ' + subTotalCemReais.toLocaleString('pt-BR') + ",00";

   let duzentosReais = parseInt(document.getElementById("duzentos-reais").value);
   if (isNaN(duzentosReais)) {
      duzentosReais = 0
   }
   let subTotalDuzentosReais = Math.abs(duzentosReais) * 200;
   subTotalDuzentosReais2.innerHTML = 'R$ ' + subTotalDuzentosReais.toLocaleString('pt-BR') + ",00";

   let total = subTotalDoisReais + subTotalCincoReais + subTotalDezReais + subTotalVinteReais + subTotalCinquentaReais + subTotalCemReais + subTotalDuzentosReais;
   somatotal.innerHTML = 'R$ ' + total.toLocaleString('pt-BR') + ",00";

   let somarCedulas = Math.abs(doisReais) + Math.abs(cincoReais) + Math.abs(dezReais) + Math.abs(vinteReais) + Math.abs(cinquentaReais) + Math.abs(cemReais) + Math.abs(duzentosReais);
   cedulas.innerHTML = somarCedulas + ' Cédulas';

   console.log(cedulas);
   console.log(total);
}
