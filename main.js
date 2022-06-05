var canvas = new fabric.Canvas("mycanvas");
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";
var get_image = "my_keydown()";

function new_image(get_image)
{
fabric.Image.fromURL(get_image,function(Img){
    block_image_object = Img;

    block_image_object.scaleToWidth(450);
    block_image_object.scaleToHeight(380);
    block_image_object.set({
        top :0,
        left:block_x
    });
    canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		new_image("rr1.png");
		console.log("red power ranger");
	}
	if(keyPressed == '71')
	{
		block_x += 238;
		new_image("gr.png");
		console.log("green power ranger");
	}
	
	if(keyPressed == '89')
	{
		block_x += 130;
		new_image('yr.png');
		console.log('yellow power ranger');
	}
	if(keyPressed == '80')
	{
		block_y -= 10;
		block_x += 250;
		new_image('pr.png');
		console.log('pink power ranger');
	}
	if(keyPressed == '66')
	{
		block_y -= 20;
		block_x += 50;
		new_image('br.png');
		console.log('blue power ranger');
	}
	
}

