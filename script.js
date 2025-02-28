async function getAdressByCep() {
    const cep = document.getElementById("cep").value;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json()
        console.log('Status da request:', response.status);
        console.log(data)
        document.getElementById('logradouro').textContent = data.logradouro
        document.getElementById('bairro').textContent = data.bairro
        document.getElementById('cidade').textContent = data.localidade
    } catch (error) {
        alert("Insira um CEP válido " + error.message)
    }
}

async function getPrevisao() {
    const lat = document.getElementById("lat").value;
    const long = document.getElementById("long").value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&forecast_days=1`);
        const data = await response.json();
        console.log('Status da request:', response.status);
        console.log(data);

        const primeiraTemperatura = data.hourly.temperature_2m[0];


        document.getElementById('resposta').innerHTML = `<span>${primeiraTemperatura}°C</span>`;
    } catch (error) {
        alert("Insira um LatLong válido " + error.message);
    }
}