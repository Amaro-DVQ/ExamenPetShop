var api_key = '162d41a40bb7f0e639ead952a9e598ee';

// Obtener la ubicación del usuario
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var latitud = -33.4521;
        var longitud = -70.6536;


        var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitud + '&lon=' + longitud + '&appid=' + api_key + '&units=metric';

        $.getJSON(url, function (data) {


            var temperatura = data.main.temp;


            $('#clima').html( temperatura + '°C');
        });
    });
} else {
    $('#clima').html('No se pudo obtener tu ubicación');
}