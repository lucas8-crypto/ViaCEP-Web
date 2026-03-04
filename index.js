
    function buscarCep(){
        const input = document.getElementById("input-cep");
        const cep = input.value.trim();

        const url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url)
        .then(res => res.json())
        .then(data => {
        document.getElementById("cep").textContent = data.cep;
        document.getElementById("logradouro").textContent = data.logradouro;
        document.getElementById("bairro").textContent = data.bairro;
        document.getElementById("localidade").textContent = data.localidade;
        document.getElementById("uf").textContent = data.uf;
    })
    .catch(erro => {
        console.log("Erro de requisição: " + erro)
    });

    }

    function limparCampos(){
        document.getElementById("input-cep").value = "";
        document.getElementById("cep").textContent = "";
        document.getElementById("logradouro").textContent = "";
        document.getElementById("bairro").textContent = "";
        document.getElementById("localidade").textContent = "";
        document.getElementById("uf").textContent = "";
    }
