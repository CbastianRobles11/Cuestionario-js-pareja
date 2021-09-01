const preguntas=[
    {
        ques:'Que tanto me amas de 1 al 100 % ?',
        a:'50 %',
        b:'35 %',
        c:'90 %',
        d:'0 %',
        correcto:'d',
        razon:'Me hablas mucho y feo cuando te pones bravita'
    },
    {
        ques:'Cual es mi color favorito?',
        a:'Negro',
        b:'Negro Gris',
        c:'Negro Grisacio',
        d:'Negro rojiso',
        correcto:'c',
        razon:'es un negro mas enfocado al grisacio'
    },
    {
        ques:'Que es lo primero que me miras sin ropa?',
        a:'Los Sentimientos',
        b:'Pelaje en el pecho',
        c:'No miras te da pena',
        d:'La sin hueso',
        correcto:'d',
        razon:'No te hagas , si te la sabes comer '
    },
    {
        ques:'Qué es lo que mas harías si fueras un fantasma invisible?',
        a:'ir al cielo',
        b:'ir al infierno',
        c:'revisarme el celular',
        d:'verme mientras me ducho',
        correcto:'c',
        razon:'Hasta huella en el whatsapp tengo que ponerle, segun tu para cuidarme de las fishfingas '
    },
    {
        ques:'Imagina que Dios te da un super-poder, cual te gustaría?',
        a:'El poder de Alejarme de mis amiguitas',
        b:'El poder de sanar enfermos',
        c:'El poder de sanar a los perros',
        d:'El poder de hacerme mi plato favorito',
        correcto:'a',
        razon:'Esta es facil, no crees celosa celosilla '
    },

]

const preguntaEle=document.getElementById('pregunta');


const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');

const razon=document.getElementById('razon');

const submitt=document.getElementById('submitt');

// respuesta 
const selected= document.querySelectorAll('.respuestaSelected');

//tramo a opcultar
const explicacion=document.getElementById('explain').style.display = 'none';
//mensaje si es corecto o incorrecto del tramo a ocultar
const mensaje=document.getElementById('mensaje')

let actualPreg=0;
cargaPreg()
//agregamos un evento click



function cargaPreg(){
    
    preguntaEle.innerHTML=preguntas[actualPreg].ques;
    a_text.innerHTML=preguntas[actualPreg].a;
    b_text.innerHTML=preguntas[actualPreg].b;
    c_text.innerHTML=preguntas[actualPreg].c;
    d_text.innerHTML=preguntas[actualPreg].d;
    razon.innerHTML=preguntas[actualPreg].razon;
    
    

}


//respuesta comparar con resultado
function getRespuesta(){
    let resp='';
    
    selected.forEach((s)=>{
        
        if (s.checked) {
            resp=s.value;   
        }
        
    })

    return resp;
}

//funcin para quirta el check 
function getSelected(){
    
   let res=""

    selected.forEach((s)=>{
        s.checked = false;
    })

    return res;
}

let correctas=0;

submitt.addEventListener("click",()=>{
    
 
    let rr=getRespuesta()
    //la resouesta
    // console.log(rr);
    //desabilitar boton 
    submitt.disabled=true

    if (rr===preguntas[actualPreg].correcto) {
        correctas++;
        console.log(correctas);
        document.getElementById('explain').className="card text-white bg-success mb-3"
        mensaje.innerHTML="Correcto"
    }else{
        document.getElementById('explain').className="card text-white bg-danger mb-3"
        mensaje.innerHTML="Incorrecto"
        
    }
   
    //carga la pregunta
   actualPreg+=1;
   document.getElementById('explain').style.display= 'block'

   

   setTimeout(() => {
      

         //    elimina los checks y da respuesta    
        getSelected()
    
            //elimina a explicacion
        document.getElementById('explain').style.display = 'none';
            if(actualPreg < preguntas.length ){
               
                cargaPreg();
                submitt.disabled=false

            }else{
                alert('terminaste Tu puntaje es de '+ correctas)
            // mirar resultados
                
            }
    }, 7000); 
    
})

