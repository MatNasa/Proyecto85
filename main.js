canvas = document.getElementById('myCanvas'); //la variable canvas se usa para almacenar el lienzo, agrega el id del canvas

ctx = canvas.getContext("2d");//la variable ctx se usa para almacenar el contenido del lienzo

//crea una variable que se llame rover_width y que sea igual con 100 para establecer el ancho de la imagen rover
var rover_width = 100 ;

//crea una variable que se llame rover_height y que sea igual con 100 para establecer la altura de la imagen rover
var rover_height = 100 ; 

//crea una variable que se llame background_image y que sea igual con "mars.jpg" para guardar la imagen de  marte
var background_image = "ese2.jpg";

//crea una variable que se llame rover_image y que sea igual con "rover.png" para guardar la imagen de  rover
var rover_image = "bailarina.png";

//crea una variable que se llame rover_x y que sea igual con 10 para guardar el valor de la coordenada x
var rover_x = 10 ;
//crea una variable que se llame rover_y y que sea igual con 10 para guardar el valor de la coordenada y
var rover_y = 10 ;
//crea una funcion que se llame add para añadir el fondo de Marte en el lienzo.
function add()
 {
	background_imgTag = new Image(); //define una variable con la imagen nueva
	background_imgTag.onload = uploadBackground; // establece la función para cargar esta variable
	background_imgTag.src = background_image;   // carga la imagen

	rover_imgTag = new Image(); //define una variable para la imagen nueva
	rover_imgTag.onload = uploadrover; // establece la función para cargar esta variable
	rover_imgTag.src = rover_image;   // carga la imagen
}

function uploadBackground() //esta función se llama para establecer la imagen de fondo del lienzo la imagen del fondo
{
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() //esta función se llama para establecer la imagen del rover en el lienzo
{
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

//Vamos a utilizar el evento window.addEventListenercon los valores “keydown” y my_keydown para obtener el valor de la tecla presionada.
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	//crea una variable que se llame keyPressed que sea igual con e.keyCode; para almacenar el valor de la tecla presionada 
	var keyPressed = e.keyCode;
    console.log(keyPressed);  
  // usa la condicional if para validar la condicion si keyPressed es igual con 38 y llama a la función up
  if(keyPressed=='38') {
    up();
    console.log("up");
  }
   // usa la condicional if para validar la condicion si keyPressed es igual con 40 y llama a la función down
  if (keyPressed=='40') {
    down();
    console.log("down");
  }
   // usa la condicional if para validar la condicion si keyPressed es igual con 37 y llama a la función left
  if (keyPressed=='37') {
    left();
    console.log("left");
  }
   // usa la condicional if para validar la condicion si keyPressed es igual con 39 y llama a la función right
		if (keyPressed=='39') {
            right();
            console.log("right");
        }
}

function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
}
	