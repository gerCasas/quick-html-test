function circuloNormal()
{
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	ctx.beginPath();
	ctx.arc(c.width/2, c.height/2, 50, 0, 2 * Math.PI);
	ctx.stroke();
}

function borrarTodo()
{
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	
	ctx.clearRect(0,0,c.width,c.height);
}

function circuloBres()
{
	var radio = 50;
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");

	var x1 = c.width / 2;
	var y1 = c.height / 2;
	var x = radio;
	var y = 0;
	var errorRadio = 1 - x;

	while(x >= y)
	{
		ctx.fillRect(x + x1, y + y1, 1, 1);
		ctx.fillRect(y + x1, x + y1, 1, 1);
		ctx.fillRect(-x + x1, y + y1, 1, 1);
		ctx.fillRect(-y + x1, x + y1, 1, 1);
		ctx.fillRect(-x + x1, -y + y1, 1, 1);
		ctx.fillRect(-y + x1, -x + y1, 1, 1);
		ctx.fillRect(x + x1, -y + y1, 1, 1);
		ctx.fillRect(y + x1, -x + y1, 1, 1);

		y = y + 1;
		if(errorRadio < 0)
		{
			errorRadio = errorRadio + 2 * y + 1;
		}
		else
		{
			x = x - 1;
			errorRadio = errorRadio + 2 * (y - x + 1);
		}
	}
}




