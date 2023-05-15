document.addEventListener("DOMContentLoaded", function () {
    obtener();
});

function crear() {
    const array = [
        {
            id: '1',
            nombre: "Collar",
            image: "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw788ed51f/images/Collar%20Cuero%20Liso.jpg",
            descripcion: "Collar de cuero liso para perros",
            stock: "10",
            precio: "4.000"
        },
        {
            id: '2',
            nombre: "Comida de Perro",
            image: "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw6751f042/images/Wellness%20Core%20Dog%20Original.jpg",
            descripcion: "Comida para perros de todas las edades",
            stock: "20",
            precio: "25.000"
        },
        {
            id: '3',
            nombre: "Arnes",
            image: "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw49c04eb9/images/41d23-0ba9d-30502-front-range-harness-campfire-orange-right-web_1024x1024.jpg",
            descripcion: "Arnes para perros de todas las edades",
            stock: "15",
            precio: "10.000"
        },
        {
            id: '4',
            nombre: "Pelota",
            image: "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dw60585fe6/images/9775e-8436580882774.png",
            descripcion: "Pelota para perros de todas las edades",
            stock: "20",
            precio: "5.000"
        },
        {
            id: '5',
            nombre: "Juguete de Perro",
            image: "https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwc6567c1c/images/037dd-8436580882767.png",
            descripcion: "Juguete para Perros Grandes",
            stock: "10",
            precio: "6.000"
        }
        
    ];

    const storage = JSON.stringify(array);
    localStorage.setItem("storagePetShop", storage);
    console.log("Storage creado");
}

function obtener() {
    let storage = localStorage.getItem("storagePetShop");
    const obj = JSON.parse(storage);

    if (obj == null) {
        console.log("No hay datos");
    } else {
        console.log("Datos obtenidos:", obj);
        mostrarProductos(obj);
    }
}

function mostrarProductos(productos) {
    const contenedorItems = document.querySelector(".contenedor-items");
    contenedorItems.innerHTML = '';

    productos.forEach((producto) => {
        const item = document.createElement("div");
        item.classList.add("item");

        const titulo = document.createElement("span");
        titulo.textContent = producto.nombre;
        titulo.classList.add("titulo-item");

        const image = document.createElement("img");
        image.src = producto.image;
        image.alt = "Imagen del producto";
        image.classList.add("img-item");

        const descripcion = document.createElement("span");
        descripcion.textContent = producto.descripcion;
        descripcion.classList.add("descripcion-item");

        const stock = document.createElement("span");
        stock.textContent = producto.stock;
        stock.classList.add("stock-item");

        const precio = document.createElement("span");
        precio.textContent = `$${producto.precio}`;
        precio.classList.add("precio-item");

        const boton = document.createElement("button");
        boton.textContent = "Agregar al Carrito";
        boton.classList.add("boton-item");

        boton.addEventListener('click', agregarAlCarritoClicked);

        item.appendChild(titulo);
        item.appendChild(image);
        item.appendChild(descripcion);
        item.appendChild(stock);
        item.appendChild(precio);
        item.appendChild(boton);

        contenedorItems.appendChild(item);
    });
}

function agregarAlCarritoClicked() {
    var button = this;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    var precio = item.getElementsByClassName('precio-item')[0].innerText;
    var image = item.getElementsByClassName('img-item')[0].src;

    agregarItemAlCarrito(titulo, precio, image);

    hacerVisibleCarrito();
}


function eliminarStorage() {
    let valor = document.getElementById("txtId").value;
    let storage = JSON.parse(localStorage.getItem("storagePetShop"));
    let arrayTemporal = [];
    let filtro = storage.filter((e) => e.id == valor);

    if (filtro.length == 0) {
        console.log("No se encontró el producto");
    }

    for (const i in storage) {
        if (storage[i].id != valor) {
            arrayTemporal.push(storage[i]);
        }
    }

    console.log("Lista actualizada: ", arrayTemporal);
    localStorage.setItem("storagePetShop", JSON.stringify(arrayTemporal));
    mostrarProductos(arrayTemporal);
}

function agregarStorage() {
    let id = document.getElementById("txtId").value;
    let nombre = document.getElementById("txtNombre").value;
    let image = document.getElementById("txtImagen").value;
    let descripcion = document.getElementById("txtDescripcion").value;
    let stock = document.getElementById("txtStock").value;
    let precio = document.getElementById("txtPrecio").value;

    let storage = JSON.parse(localStorage.getItem("storagePetShop"));

    let obj = {
        id: id,
        nombre: nombre,
        image: image,
        descripcion: descripcion,
        stock: stock,
        precio: precio,
    };

    storage.push(obj);
    localStorage.setItem("storagePetShop", JSON.stringify(storage));
    console.log("Storage actualizado");
    mostrarProductos(storage);
}

function modificar() {
    let id = document.getElementById("txtId").value;
    let nombre = document.getElementById("txtNombre").value;
    let image = document.getElementById("txtImagen").value;
    let descripcion = document.getElementById("txtDescripcion").value;
    let stock = document.getElementById("txtStock").value;
    let precio = document.getElementById("txtPrecio").value;

    let storage = JSON.parse(localStorage.getItem("storagePetShop"));

    let productoEncontrado = false;

    for (let i = 0; i < storage.length; i++) {
        if (storage[i].id == id) {
            storage[i].nombre = nombre;
            storage[i].image = image;
            storage[i].descripcion = descripcion;
            storage[i].stock = stock;
            storage[i].precio = precio;
            productoEncontrado = true;
            break;
        }
    }

    if (productoEncontrado) {
        localStorage.setItem("storagePetShop", JSON.stringify(storage));
        console.log("Producto modificado");
        mostrarProductos(storage);
    } else {
        console.log("No se encontró el producto");
    }
    localStorage.setItem("storagePetShop", JSON.stringify(storage));
    console.log("Producto modificado");

    mostrarProductos(storage);
}

function limpiar() {
    document.getElementById("txtId").value = "";
    document.getElementById("txtImagen").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtDescripcion").value = "";
    document.getElementById("txtStock").value = "";
    document.getElementById("txtPrecio").value = "";
}
