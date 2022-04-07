

function ingresos() {
  try {
    const ingresosFijos = parseFloat(document.getElementById("ingresosFijos").value) || 0;
    const ingresosVariables = parseFloat(document.getElementById("ingresosVariables").value) || 0;

    document.getElementById("totIngresos").value = ingresosFijos + ingresosVariables;
  } catch (error) { }
}

function gastosFijos() {
  try {
    const apartamento = parseFloat(document.getElementById("apartamento").value) || 0;
    const servicios = parseFloat(document.getElementById("servicios").value) || 0;
    const comida = parseFloat(document.getElementById("comida").value) || 0;
    const transporte = parseFloat(document.getElementById("transporte").value) || 0;

    document.getElementById("totGastosFijos").value = apartamento + servicios + comida + transporte;
  } catch (error) { }
}

function gastosVariables() {
  try {
    const entretenimiento = parseFloat(document.getElementById("entretenimiento").value) || 0;
    const medicinas = parseFloat(document.getElementById("medicinas").value) || 0;
    const antojos = parseFloat(document.getElementById("antojos").value) || 0;

    document.getElementById("totGastosVariables").value = entretenimiento + medicinas + antojos;
  } catch (error) { }
}
function ahorro() {
  try {
    const emergencias = parseFloat(document.getElementById("emergencias").value) || 0;
    const pension = parseFloat(document.getElementById("pension").value) || 0;

    document.getElementById("totAhorro").value = pension + emergencias;
  } catch (error) { }
}

 function quincena() {
  try {
    const totIngresos = parseFloat(document.getElementById("totIngresos").value) || 0;
    const totGastosFijos = parseFloat(document.getElementById("totGastosFijos").value) || 0;
    const totGastosVariables = parseFloat(document.getElementById("totGastosVariables").value) || 0;
    const totAhorro = parseFloat(document.getElementById("totAhorro").value) || 0;
    const totGastos = totGastosFijos + totGastosVariables + totAhorro;
    const porcentajeUno = totIngresos * 0.6;
    const mostrar = document.querySelector("#resultado");

    if (totGastos > porcentajeUno) {
      mostrar.textContent = "Su gasto es mayor a: $" + porcentajeUno + " permitido en esta quincena";
      document.getElementById("quincenaUno").value = totIngresos - totGastosFijos - totGastosVariables - totAhorro;
    } else {
      mostrar.textContent = "";
      document.getElementById("quincenaUno").value = totIngresos - totGastosFijos - totGastosVariables - totAhorro;
    }
  } catch (error) { }
}
const btnReset = document.getElementById("boton");

btnReset.addEventListener("click", function () {
  document.getElementById("ingresosFijos").value = "";
  document.getElementById("ingresosVariables").value = "";
  document.getElementById("totIngresos").value = "";

  const resetGastosF1 = (document.getElementById("apartamento").value = "");
  const resetGastosF2 = (document.getElementById("servicios").value = "");
  const resetGastosF3 = (document.getElementById("comida").value = "");
  const resetGastosF4 = (document.getElementById("transporte").value = "");
  const resetGastosFT = (document.getElementById("totGastosFijos").value = "");

  const resetGastosV1 = (document.getElementById("entretenimiento").value = "");
  const resetGastosV2 = (document.getElementById("medicinas").value = "");
  const resetGastosV3 = (document.getElementById("antojos").value = "");
  const resetGastosVT = (document.getElementById("totGastosVariables").value =
    "");

  const resetAhorro1 = (document.getElementById("emergencias").value = "");
  const resetAhorro2 = (document.getElementById("pension").value = "");
  const resetAhorroT = (document.getElementById("totAhorro").value = "");

  const tot1 = (document.getElementById("quincenaUno").value = "");

  try {
    const totIngresos =
      parseFloat(document.getElementById("totIngresos").value) || 0;
    const totGastosFijos =
      parseFloat(document.getElementById("totGastosFijos").value) || 0;
    const totGastosVariables =
      parseFloat(document.getElementById("totGastosVariables").value) || 0;
    const totAhorro =
      parseFloat(document.getElementById("totAhorro").value) || 0;
    const totGlobal2 =
      totIngresos - totGastosFijos - totGastosVariables - totAhorro;
    const porcentajeDos = totIngresos * 0.4;
    const totGastos = totGastosFijos + totGastosVariables + totAhorro;
    const mostrar = document.querySelector("#resultado");

    if (totGastos > porcentajeDos) {
      mostrar.textContent =
        "Su gasto es mayor a: $" +
        porcentajeDos +
        " permitido en esta quincena";
      document.getElementById("quincenaDos").value =
        totIngresos - totGastosFijos - totGastosVariables - totAhorro;
    } else {
      mostrar.textContent = "";
      document.getElementById("quincenaDos").value =
        totIngresos - totGastosFijos - totGastosVariables - totAhorro;
      quin2 = document.getElementById("quincenaDos").value =
        totIngresos - totGastosFijos - totGastosVariables - totAhorro;
    }
  } catch (error) { }
});

/* const btnCalular = document.getElementById("boton");

btnCalular.addEventListener("click", function(){
  const ingresosFijos = document.getElementById("ingresosFijos").value;
  const ingresosVariables = document.getElementById("ingresosVariables").value;
  const totalIngresos =
    parseFloat(ingresosFijos) + parseFloat(ingresosVariables);
  document.getElementById("totIngresos").value = totalIngresos;

  const apartamento = document.getElementById("apartamento").value;
  const servicios = document.getElementById("servicios").value;
  const comida = document.getElementById("comida").value;
  const transporte = document.getElementById("transporte").value;
  const totalgastosFijos =
    parseFloat(apartamento) +
    parseFloat(servicios) +
    parseFloat(comida) +
    parseFloat(transporte);
  document.getElementById("totGastosFijos").value = totalgastosFijos;

  const entretenimiento = document.getElementById("entretenimiento").value;
  const medicinas = document.getElementById("medicinas").value;
  const antojos = document.getElementById("antojos").value;
  const totalGastosVariables = parseFloat(entretenimiento) + parseFloat(medicinas) + parseFloat(antojos);
  document.getElementById("totGastosVariables").value=totalGastosVariables;

  const pension = document.getElementById("pension").value;
        const emergencias = document.getElementById("emergencias").value;
        const totalAhorros = parseFloat(pension)+parseFloat(emergencias);
        document.getElementById("totAhorros").value=totalAhorros;

        const presupuestoTotal = totalIngresos-totalgastosFijos-totalGastosVariables-totalAhorros;
        const mostrar = document.querySelector("#total");
        mostrar.textContent = "Tu presupuesto total es: "+presupuestoTotal;
        console.log("hdhd")+(presupuestoTotal);
    
    }) */
