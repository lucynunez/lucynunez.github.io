var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});
//comentario
typewriter.typeString('Lienciada en Comercio Exterior y Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes exportar, lo puedes conquistar!')
    .pauseFor(2500)
    //numero de caracteres que se borraran
    .deleteChars(11)
    .typeString('<strong>Lograr!</strong>')
    .pauseFor(2500)
    .start();