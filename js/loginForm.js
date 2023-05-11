$(function(){
    $("#loginForm").validate({
        rules: {
            form3Example1cg: {
                required: true,
                email: true
            },
            form3Example4cg: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            form3Example1cg: {
                required: "El correo es obligatorio",
                email: "El correo debe tener un formato válido"
            },
            form3Example4cg: {
                required: "La contraseña es obligatoria",
                minlength: "La contraseña debe tener al menos 8 caracteres"
            }
        }
    })
})