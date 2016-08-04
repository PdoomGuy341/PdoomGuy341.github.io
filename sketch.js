//2016 08 04
//primera clase de progamacíon
//programa usado:p5.js
//profe aaron montoya
//mi libro luna de pluton ya es un exito de ventas...

//en javascript
//vamos a tener variables y funciones
//para usar la variable se, hay que crearla 
//esto se llama
//var diametro;
var diametro;
//solo despues de declarar
//podemos darle valor
diametro = 100;

//setup() {} corre una vez al principio
//createCanvas


function setup() {

	createCanvas(800, 600);	background(0, 255, 0)
}


//fondo con color y tamaño
//0 es nada, 255 es todo
//colores:red,green,blue

//draw() se ejecuta despues de setup()
//va a 60 fps

function draw() {
strokeWeight(10);
//borde azul semitransparente
stroke(0, 200, 255, 255/2);

//strokeWeight(px);
//DEFINIR estilo de la elipse 
//definir ancho del borde
//definir color de borde
//stroke(color);

//definir color de relleno
//fill(color);
//rojo transparencia
//fill(2, 255 ,0, 255/2);
//colores satanicos
//fill(random(255), random(255), random(255),random(255));

fill(255*mouseX/width, 0, 0);
//explcación de color
//1: grayscale, 0 es negore, 255 es blanco
//2:grayscale + alpha 
//3 RGB, red, green, blue
//4:RGB + alpha
//alpha: 0 es transparente, 255 es solido

//dibujar elipse que sigue al mouse
//ellipse( posx, posy, width, height);


ellipse( mouseX, mouseY, diametro,diametro  );
diametro = 10 + 200 * random (1000)/1000;}