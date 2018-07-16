$('#contactoForm').submit(function(e) {
    var name = document.getElementById("Nombre"),
    email = document.getElementById("Correo"),
    message = document.getElementById("Mensaje");

    if (!name.value || !email.value || !message.value){
        alert('Por favor verifique que todos los campo se encuentren bien diligenciados.');
    }else{
        $.ajax({
            url: "https://formspree.io/alejandrotabordacadavid@gmail.com", 
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        });
        e.preventDefault();
        $(this).get(0).reset();
        alertify.success('Gracias por enviar si mensaje.');
    }

});