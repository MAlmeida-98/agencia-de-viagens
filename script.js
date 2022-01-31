// Caixa de comentarios

if (document.getElementById("btncomentario") != null){
let btncomentario = document.getElementById("btncomentario");
let i = 0;

btncomentario.addEventListener("click", (e) => {
    e.preventDefault()
    caixa = document.getElementById("comentarios-box");

    if(document.getElementById("comentario-texto").value.length != 0){
        caixa.innerHTML = "<label>Obrigado pelo feedback! &#128578</label>";
        caixa.style.cssText = "justify-content: center; align-content: center; text-align: center; padding-bottom:2px; border-radius: 10px;";
    } else {
        if (i != 1){
            aviso = document.createElement("label");
            aviso.innerHTML = "Tente escrever algo..."
            caixa.appendChild(aviso);
            i = 1;
        }
    }
});
}
// Formulário de reservas

if (document.getElementById("btnform") != null){
let btnform = document.getElementById("btnform");


btnform.addEventListener("click", (e) => {
    e.preventDefault()

    let primeiroNome = document.getElementById("primeiro-nome").value.length;
    let ultimoNome = document.getElementById("ultimo-nome").value.length;
    let numAdultos = document.getElementById("num-adultos").value;
    let contacto = document.getElementById("contacto").value.length;
    let contactostring = document.getElementById("contacto").value;
    let emailtext = document.getElementById("email").value.length;
    let email = document.getElementById("email").value.indexOf("@");
    let viagem = document.forms["reservas"]["viagem"].value.length;
    let dataPartida = document.getElementById("data-partida").value.length;
    let check = 0;

    if (primeiroNome===0 || ultimoNome===0 || numAdultos=== 0 || contacto < 9 || emailtext === 0 || viagem === 0 || dataPartida===0) {
        alert("Preencha todos os campos");
        check = 1;
    }

    if (isNaN(Number(contactostring))){
        alert("Insira número de telemóvel válido");
        check = 1;
    }

    if (email === -1) {
        alert("Insira um email válido")
        check = 1;
    }

    if (check === 0) {
        form = document.getElementById("form-reservas-form");
        form.innerHTML = "<label>Obrigado pela reserva! Contactaremos em breve &#128578</label>";
        form.style.cssText = "justify-content: center; align-content: center; text-align: center; padding-bottom:22px; padding-top:20px ; border-radius: 10px; ";
    }
});
}


/* Data chegada

let dataPartida2 = document.getElementById("data-partida");

dataPartida2.addEventListener("blur", (e) => {
    e.preventDefault()
    let viagem = document.forms["reservas"]["viagem"].value;
    dataPartida3 = document.getElementById("data-partida").value

    if (dataPartida3 != 0){
        data = dataPartida3.split("-")
        data1 = new Date()

        if (viagem === "espanha") {
            data1.setFullYear(data[0], data[1]-1, data[2]+13)
        } else {
           
        }

        let dataChegada = document.getElementById("data-chegada");


    }
    //dataChegada2 = new Date()

    //dataChegada2.setDate(dataPartida3.getDate())
a=1
    data1.setFullYear(2022, a, a+30)
    console.log(viagem)
    console.log(dataPartida3)
    console.log(data)
    console.log(data1.getFullYear())
    console.log(data1)

})

Projeto interrompido devido a problema com o js */
