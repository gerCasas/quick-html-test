function generarLinea()
{
	this.c = document.getElementById("myCanvas");
	this.ctx = c.getContext("2d");
	this.ecuacion = new ecuacionRecta();

	this.grado = 50;
	while(this.grado < 360)
	{
		var x = 50 * Math.cos(this.grado);
		var y = 50 * Math.sin(this.grado);
		this.grado = this.grado + 50;

		ecuacion.dibujarLinea(c.width/2, x, c.height/2, y);
	}
}

function ecuacionRecta()
{
	this.m;
	this.b;
	this.c = document.getElementById("myCanvas");
	this.ctx = c.getContext("2d");

	this.dibujarLinea = function(x, x1, y, y1)
	{
		this.m = (y1 - y) / (x1 - x);
		this.b = y - (this.m * x);

		while(x != x1)
		{
			y = this.m * x + this.b;
			this.ctx.fillRect(x,y,1,1);
			if(x < x1)
			{
				x = x + 1;
			}
			else
			{
				x = x - 1;
			}
		}
	}
}

function DDA()
{
	this.c = document.getElementById("myCanvas");
	this.ctx = c.getContext("2d");

	this.dibujarLinea = function(x1,x2,y1,y2)
	{
		var x;
		var y;
		var dx = x2 - x1;
		var dy = y2 - y1;
		var brinco;

		if(dx >= dy)
		{
			brinco = dx;
		}
		else
		{
			brinco = dy;
		}

		dx = dx / brinco;
		dy = dy / brinco;
		x = x1;
		y = y1;

		var i = 1;

		while(i <= brinco)
		{
			this.ctx.fillRect(x,y,1,1);
			x = x + dx;
			y = y + dy;
			i = i + 1;
		}
	}
}

function bresenham()
{
	this.c = document.getElementById("myCanvas");
	this.ctx = c.getContext("2d");

	this.dibujarLinea = function(x1,x2,y1,y2)
	{
		var dx = Math.abs(x2-x1);
		var dy = Math.abs(y2-y1);
		var sx;
		var sy;

		if(x1 < x2)
		{
			sx = 1;
		}
		else
		{
			sx = -1;
		}

		if(y1 < y2)
		{
			sy = 1;
		}
		else
		{
			sy = -1;
		}

		var err = dx - dy;
		var e2;

		while(x1 != x2 && y1 != y2)
		{;
			this.ctx.fillRect(x1,y1,1,1);
			e2 = 2 * err;
			if(e2 > -dy)
			{
				err = err - dy;
				x1 = x1 + sx;
			}

			if(e2 < dx)
			{
				err = err + dx;
				y1 = y1 + sy;
			}
		}
	}
}