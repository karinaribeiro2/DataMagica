function converterData() {
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    let data = document.getElementById("data").value;
    let partes = data.split("/");
    if (partes.length === 3) {
        let dia = partes[0];
        let mes = parseInt(partes[1]) - 1;
        let ano = partes[2];
        if (mes >= 0 && mes < 12) {
            document.getElementById("resultado").innerText = `${dia} de ${meses[mes]} de ${ano}`;
        } else {
            document.getElementById("resultado").innerText = "Data inválida!";
        }
    } else {
        document.getElementById("resultado").innerText = "Formato inválido!";
    }
}