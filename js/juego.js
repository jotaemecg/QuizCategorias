//Arreglo que contiene las preguntas
const preguntas = [
        {
        id: 1,
        categoria: "Fantasia",
        titulo: "¿En qué serie de Netflix se encuentra el personaje de Geralt de Rivia?",
        opcionA: "Stranger Things",
        opcionB: "The Witcher",
        opcionC: "Game of Thrones",
        opcionD: "Dark",
        correcta: "b"
    },
    {
        id: 2,
        categoria: "Fantasia",
        titulo: "¿Cuál de las siguientes series de Netflix es de género de fantasía y se centra en la mitología nórdica?",
        opcionA: "Narcos",
        opcionB: "The Crown",
        opcionC: "The Witcher",
        opcionD: "Breaking Bad",
        correcta: "c"
    },
    {
        "id": 3,
        categoria: "Fantasia",
        titulo: "¿Quién interpreta al personaje de Yennefer en la serie de Netflix basada en el universo de Andrzej Sapkowski?",
        opcionA: "Liam Neeson",
        opcionB: "Robert Downey Jr.",
        opcionC: "Henry Cavill",
        opcionD: "Anya Chalotra",
        correcta: "d"
    },
    {
        id: 4,
        categoria: "Fantasia",
        titulo: "¿Cuál de las siguientes series de Netflix presenta un mundo de fantasía basado en la mitología oriental?",
        opcionA: "The Witcher",
        opcionB: "Vikings",
        opcionC: "The Last Kingdom",
        opcionD: "Avatar: The Last Airbender",
        correcta: "d"
    },
    {
    id: 5,
    categoria: "Fantasia",
    titulo: "¿En qué serie de Netflix se encuentra el personaje de Ciri, una princesa con poderes mágicos?",
    opcionA: "Stranger Things",
    opcionB: "The Witcher",
    opcionC: "Game of Thrones",
    opcionD: "Dark",
    correcta: "b"
    }, {
    id: 6,
    categoria: "CienciaFiccion",
    titulo: "¿En qué serie de Netflix se encuentra el personaje de Astronauta Niko Breckenridge Lomeli?",
    opcionA: "Stranger Things",
    opcionB: "The Witcher",
    opcionC: "Another Life",
    opcionD: "Dark",
    correcta: "c"
    },
    {
    id: 7,
    categoria: "CienciaFiccion",
    titulo: "¿Cuál de las siguientes series de Netflix es de género de ciencia ficción y se centra en la exploración espacial?",
    opcionA: "Narcos",
    opcionB: "The Crown",
    opcionC: "Another Life",
    opcionD: "Breaking Bad",
    correcta: "c"
    },
    {
    id: 8,
    categoria: "CienciaFiccion",
    titulo: "¿Quién interpreta al personaje de William P. McDowell en la serie de Netflix 'Another Life'?",
    opcionA: "Liam Neeson",
    opcionB: "Robert Downey Jr.",
    opcionC: "William Shatner",
    opcionD: "Jason Isaacs",
    correcta: "c"
    },
    {
    id: 9,
    categoria: "CienciaFiccion",
    titulo: "¿Cuál de las siguientes series de Netflix presenta un mundo de ciencia ficción basado en la posibilidad de vida extraterrestre?",
    opcionA: "The Witcher",
    opcionB: "Vikings",
    opcionC: "The Last Kingdom",
    opcionD: "Another Life",
    correcta: "d"
    },
    {
    id: 10,
    categoria: "CienciaFiccion",
    titulo: "¿En qué serie de Netflix se encuentra el personaje de Harper Glass, una científica especializada en astrobiología?",
    opcionA: "Stranger Things",
    opcionB: "The Witcher",
    opcionC: "Another Life",
    opcionD: "Dark",
    correcta: "c"
    },
    {
    id: 11,
    categoria: "Drama",
    titulo: "¿Cuál de las siguientes series de Netflix es un documental que investiga casos de injusticias judiciales?",
    opcionA: "Making a Murderer",
    opcionB: "Carmen Sandiego",
    opcionC: "Community",
    opcionD: "Cursed",
    correcta: "a"
    },
    {
    id: 12,
    categoria: "Drama",
    titulo: "¿En qué serie de Netflix se encuentra el personaje de Jeff Winger y Abed Nadir, formando parte de un grupo de estudio en una comunidad?",
    opcionA: "Making a Murderer",
    opcionB: "Community",
    opcionC: "Carmen Sandiego",
    opcionD: "Cursed",
    correcta: "b"
    },
    {
    id: 13,
    categoria: "Drama",
    titulo: "¿Cuál de las siguientes series de Netflix presenta una narrativa oscura de la leyenda artúrica centrada en Nimue, la Dama del Lago?",
    opcionA: "Making a Murderer",
    opcionB: "Community",
    opcionC: "Cursed",
    opcionD: "Orange Is the New Black",
    correcta: "c"
    },
    {
    id: 14,
    categoria: "Drama",
    titulo: "¿En qué serie de Netflix se encuentra el personaje de BoJack Horseman, un caballo que es actor?",
    opcionA: "Making a Murderer",
    opcionB: "Community",
    opcionC: "BoJack Horseman",
    opcionD: "Cursed",
    correcta: "c"
    },
    {
    id: 15,
    categoria: "Drama",
    titulo: "¿Cuál de las siguientes series de Netflix es un documental que expone prácticas controvertidas y problemas en la industria alimentaria?",
    opcionA: "Making a Murderer",
    opcionB: "Community",
    opcionC: "Rotten",
    opcionD: "Cursed",
    correcta: "c"
    },
    {
    id: 16,
    categoria: "Terror",
    titulo: "¿En qué serie de Netflix se encuentra el personaje de Slasher?",
    opcionA: "Slasher",
    opcionB: "Red Rose",
    opcionC: "The Girl in the Mirror",
    opcionD: "Crazyhead",
    correcta: "a"
    },
    {
    id: 17,
    categoria: "Terror",
    titulo: "¿Cuál de las siguientes series de Netflix es un thriller de suspenso ambientado en un pueblo?",
    opcionA: "Slasher",
    opcionB: "Red Rose",
    opcionC: "The Girl in the Mirror",
    opcionD: "Crazyhead",
    correcta: "b"
    },
    {
    id: 18,
    categoria: "Terror",
    titulo: "¿Quién interpreta al personaje principal en la serie 'Hellbound' de Netflix?",
    opcionA: "Yoo Ah-in",
    opcionB: "Kim Soo-hyun",
    opcionC: "Song Kang-ho",
    opcionD: "Lee Jung-jae",
    correcta: "a"
    },
    {
    id: 19,
    categoria: "Terror",
    titulo: "¿Cuál de las siguientes series de Netflix presenta historias de horror cortas en dos frases?",
    opcionA: "Slasher",
    opcionB: "Red Rose",
    opcionC: "Two Sentence Horror Stories",
    opcionD: "Crazyhead",
    correcta: "c"
    },
    {
    id: 20,
    categoria: "Terror",
    titulo: "¿En qué serie de Netflix se encuentra el personaje de Goedam, un espíritu malévolo?",
    opcionA: "Slasher",
    opcionB: "Red Rose",
    opcionC: "Goedam",
    opcionD: "Crazyhead",
    correcta: "c"
    },
    {
        id: 21,
        categoria: "Accion",
        titulo: "¿En qué serie de Netflix se encuentra el personaje de John Wick, un asesino profesional?",
        opcionA: "John Wick",
        opcionB: "The Witcher",
        opcionC: "Stranger Things",
        opcionD: "Dark",
        correcta: "a"
    },
    {
        id: 22,
        categoria: "Accion",
        titulo: "¿Cuál de las siguientes series de Netflix es un thriller de acción ambientado en un futuro distópico?",
        opcionA: "John Wick",
        opcionB: "The Witcher",
        opcionC: "Stranger Things",
        opcionD: "Dark",
        correcta: "c"
    },
    {
        id: 23,
        categoria: "Accion",
        titulo: "¿Quién interpreta al personaje de John Wick en la serie de Netflix?",
        opcionA: "Keanu Reeves",
        opcionB: "Henry Cavill",
        opcionC: "Gerard Butler",
        opcionD: "Ryan Gosling",
        correcta: "a"
    },
{
        id: 24,
        categoria: "Accion",
        titulo: "¿Cuál de las siguientes series de Netflix presenta una historia de acción y aventura en un mundo de fantasía?",
        opcionA: "John Wick",
        opcionB: "The Witcher",
        opcionC: "Stranger Things",
        opcionD: "Dark",
        correcta: "b"
    },
    {
        id: 25,
        categoria: "Accion",
        titulo: "¿En qué serie de Netflix se encuentra el personaje de Naruto Uzumaki, un ninja con habilidades especiales?",
        opcionA: "John Wick",
        opcionB: "The Witcher",
        opcionC: "Naruto Shippuden",
        opcionD: "Dark",
        correcta: "c"
    },
    {
        id: 26,
        categoria: "Comedia",
        titulo: "¿En qué serie de Netflix se encuentra el personaje de BoJack Horseman, un actor de televisión que es un caballo?",
        opcionA: "BoJack Horseman",
        opcionB: "The Good Place",
        opcionC: "Unbreakable Kimmy Schmidt",
        opcionD: "Grace and Frankie",
        correcta: "a"
    },
    {
        id: 27,
        categoria: "Comedia",
        titulo: "¿Cuál de las siguientes series de Netflix es una comedia de situación que sigue a dos amigas que abren un negocio de limpieza?",
        opcionA: "BoJack Horseman",
        opcionB: "The Good Place",
        opcionC: "Unbreakable Kimmy Schmidt",
        opcionD: "Grace and Frankie",
        correcta: "d"
    },
    {
        id: 28,
        categoria: "Comedia",
        titulo: "¿Quién interpreta al personaje principal en la serie 'Insecure' de Netflix?",
        opcionA: "Issa Rae",
        opcionB: "Yvonne Orji",
        opcionC: "Natasha Rothwell",
        opcionD: "Amanda Seales",
        correcta: "a"
    },
    {
        id: 29,
        categoria: "Comedia",
        titulo: "¿Cuál de las siguientes series de Netflix presenta una comedia animada sobre un actor de televisión que es un caballo?",
        opcionA: "BoJack Horseman",
        opcionB: "The Good Place",
        opcionC: "Unbreakable Kimmy Schmidt",
        opcionD: "Grace and Frankie",
        correcta: "a"
    },
    {
        id: 30,
        categoria: "Comedia",
        titulo: "¿En qué serie de Netflix se encuentra el personaje de Grace y Frankie, dos amigas que se convierten en socias comerciales después de que sus maridos se enamoran?",
        opcionA: "BoJack Horseman",
        opcionB: "The Good Place",
        opcionC: "Unbreakable Kimmy Schmidt",
        opcionD: "Grace and Frankie",
        correcta: "d"
    }
    ]
   




//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    

    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",()=>{
    numPreguntaActual++;
    if(numPreguntaActual<=4){
        cargarSiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
       
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 6){
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        }else{
            //lo mando a la pantalla final
            location.href = "final.html";
        }
        
    }
    
})