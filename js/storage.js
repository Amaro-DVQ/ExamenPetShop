function crear() {
    const array = [
        {
            id: 1,
            nombre: "Collar",
            precio: "25.000"

        },
        {   
            id: 2,
            nombre: "Comida de Perro",
            precio: "15.000"

        },
        {
            id: 3,
            nombre: "Arnes",
            precio: "15.000"
        }
    ];

    const storage = JSON.stringify(array);
    localStorage.setItem("storagePetShop", storage);
    console.log("Storage creado");
};

function obtener() {

    let storage = localStorage.getItem("storagePetShop");
    const obj = JSON.parse(storage);

    if (obj == null) {
        console.log("No hay datos")
    } else {
        console.log("Si hay datos", obj)
    };


}


function eliminarUnosStorage() {
    let valor = document.getElementById("txtId").value;
    let storage = JSON.parse(localStorage.getItem("storagePetShop"));
    let arrayTemporal = [];
    let filtro = storage.filter(e => e.id == valor);



    if (filtro.length == 0) {
        console.log("No se encontro el producto")
    }

    for (const i in storage) {
        if (storage[i].id != valor) {
            arrayTemporal.push(storage[i])
        }
    }

    console.log("Lista actualizada: ", arrayTemporal);
    localStorage.setItem("storagePetShop", JSON.stringify(arrayTemporal));

}

function agregarStorage() {
    let id = document.getElementById("txtId").value;
    let nombre = document.getElementById("txtNombre").value;
    let precio = document.getElementById("txtPrecio").value;

    let storage = JSON.parse(localStorage.getItem("storagePetShop"));

    let obj = {
        id: storage.length + 1, 
        nombre: nombre,
        precio: precio,
    };

    storage.push(obj);
    localStorage.setItem("storagePetShop", JSON.stringify(storage));
    console.log("Storage actualizado")
}