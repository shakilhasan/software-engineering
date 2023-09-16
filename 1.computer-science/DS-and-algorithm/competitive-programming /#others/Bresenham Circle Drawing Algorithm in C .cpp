#include<graphics.h>
#include<stdio.h>
void pixel(int xc,int yc,int x,int y);
int main()
{
	int gd,gm,xc,yc,r,x,y,p;
	detectgraph(&gd,&gm);
	initgraph(&gd,&gm,"C://TurboC3//BGI");

	printf("Enter center of circle :");
	scanf("%d%d",&xc,&yc);
	printf("Enter radius of circle :");
	scanf("%d",&r);

	x=0;
	y=r;
	p=3-2*r;
	pixel(xc,yc,x,y);

	while(x<y)
	{
		if(p<0)
		{
			x++;
			p=p+4*x+6;
		}
		else
		{
			x++;
			y--;
			p=p+4*(x-y)+10;
		}
		pixel(xc,yc,x,y);
	}

	getch();
	closegraph();
	return 0;
}

void pixel(int xc,int yc,int x,int y)
{
	putpixel(xc+x,yc+y,WHITE);
	putpixel(xc+x,yc-y,WHITE);
	putpixel(xc-x,yc+y,WHITE);
	putpixel(xc-x,yc-y,WHITE);
	putpixel(xc+y,yc+x,WHITE);
	putpixel(xc+y,yc-x,WHITE);
	putpixel(xc-y,yc+x,WHITE);
	putpixel(xc-y,yc-x,WHITE);
}
