function consumoApi(){
    let latitud = -33.4521;
    let longitud = -70.6536;

    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latitud+'&lon='+longitud+'&appid=162d41a40bb7f0e639ead952a9e598ee')
    .then (response => response.json())
    .then (data => {
        console.log(data.temp);
        let temperatura = data.current.temp;

        document.getElementById('temperatura').innerHTML = temperatura;
        
        console.log("temperatura "+temperatura);
    }
    )
}