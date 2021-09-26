#include <windows.h>
#include <GL/glut.h>
#include<bits/stdc++.h>
#ifdef __APPLE__
#else
#endif
#include <conio.h>
#include <stdlib.h>
#include<string.h>
#include<iostream>//for strlen
#include<stdlib.h>


int i,q;
int score = 0;//for score counting
int screen = 0;
bool collide = false;//check if car collide to make game over
char buffer[10];

int vehicleX = 200, vehicleY = 70;
int ovehicleX[4], ovehicleY[4];
int divx = 250, divy = 4, movd;

char* itoa(int num, char* str, int base)
{
    int i = 0;
    bool isNegative = false;

    /* Handle 0 explicitely, otherwise empty string is printed for 0 */
    if (num == 0)
    {
        str[i++] = '0';
        str[i] = '\0';
        return str;
    }

    // In standard itoa(), negative numbers are handled only with
    // base 10. Otherwise numbers are considered unsigned.
    if (num < 0 && base == 10)
    {
        isNegative = true;
        num = -num;
    }

    // Process individual digits
    while (num != 0)
    {
        int rem = num % base;
        str[i++] = (rem > 9)? (rem-10) + 'a' : rem + '0';
        num = num/base;
    }

    // If number is negative, append '-'
    if (isNegative)
        str[i++] = '-';

    str[i] = '\0'; // Append string terminator

    // Reverse the string
    int n=0;
    for (int i = 0; str[i] != '\0'; i++)
        n++;

    // Swap character starting from two
    // corners
    for (int i = 0; i < n / 2; i++)
    {
        int temp = str[i];
        str[i] = str[n - i - 1];
        str[n - i - 1] = temp;
    }

    return str;
}

void drawText(char ch[],int xpos, int ypos)//draw the text for score and game over
{
    int numofchar = strlen(ch);
    glLoadIdentity ();
    glRasterPos2f( xpos , ypos);
    for (i = 0; i <= numofchar - 1; i++)
    {

    glutBitmapCharacter(GLUT_BITMAP_HELVETICA_18, ch[i]);//font used here, may use other font also
    }
}


void drawTextNum(char ch[],int numtext,int xpos, int ypos)//counting the score
{
    int len;
    int k;
    k = 0;
    len = numtext - strlen (ch);
    glLoadIdentity ();
    glRasterPos2f( xpos , ypos);
    for (i = 0; i <=numtext - 1; i++)
    {
    if ( i < len )
        glutBitmapCharacter(GLUT_BITMAP_HELVETICA_18,'0');
    else
    {
        glutBitmapCharacter(GLUT_BITMAP_HELVETICA_18, ch[k]);
        k++;
    }

    }
}


void ovpos()
{
    glClearColor(0,0,1,0);
for(i = 0; i < 4; i++)
{
    if(rand() % 2 == 0)
    {
        ovehicleX[i] = 200;
    }
    else
    {
        ovehicleX[i] = 300;
    }
    ovehicleY[i] = 1000 - i * 160;
}
}


void drawRoad()
{
    glBegin(GL_QUADS);
        glColor3f(0.5,0.5,0.5);
        glVertex2f(250 - 100, 500);
        glVertex2f(250 - 100, 0);
        glVertex2f(250 + 100, 0);
        glVertex2f(250 + 100, 500);
    glEnd();
}


void drawDivider()//black patch drawn in middle of road
{
    glLoadIdentity();
    glTranslatef(0, movd, 0);
    for(i = 1; i <= 10; i++)
    {
    glColor3f(0, 0, 0);
    glBegin(GL_QUADS);
        glVertex2f(divx  - 5, divy * 15 * i + 18);
        glVertex2f(divx  - 5, divy * 15 * i - 18);
        glVertex2f(divx  + 5, divy * 15 * i - 18);
        glVertex2f(divx  + 5, divy * 15 * i + 18);
    glEnd();
    }
    glLoadIdentity();
}


void drawVehicle()//car for racing
{
    glPointSize(10.0);
    glBegin(GL_POINTS);//tire
        glColor3f(0,0,0);
        glVertex2f(vehicleX - 25, vehicleY + 16);
        glVertex2f(vehicleX + 25, vehicleY + 16);
        glVertex2f(vehicleX - 25, vehicleY - 16);
        glVertex2f(vehicleX + 25, vehicleY - 16);
    glEnd();

    glBegin(GL_QUADS);
        glColor3f(1,0,0);//middle body
        glVertex2f(vehicleX - 25, vehicleY + 20);
        glVertex2f(vehicleX - 25, vehicleY - 20);
        glVertex2f(vehicleX + 25, vehicleY - 20);
        glVertex2f(vehicleX + 25, vehicleY + 20);
    glEnd();

    glBegin(GL_QUADS);//up body
        glColor3f(0,0,1);
        glVertex2f(vehicleX - 23, vehicleY + 20);
        glVertex2f(vehicleX - 19, vehicleY + 40);
        glVertex2f(vehicleX + 19, vehicleY + 40);
        glVertex2f(vehicleX + 23, vehicleY + 20);
    glEnd();

    glBegin(GL_QUADS);//down body
        glColor3f(0,0,1);
        glVertex2f(vehicleX - 23, vehicleY - 20);
        glVertex2f(vehicleX - 19, vehicleY - 35);
        glVertex2f(vehicleX + 19, vehicleY - 35);
        glVertex2f(vehicleX + 23, vehicleY - 20);
    glEnd();
 }

void drawOVehicle()//other cars
{

    for(i = 0; i < 1; i++)
    {
    glPointSize(10.0);
    glBegin(GL_POINTS);//tire
        glColor3f(0,0,0);
        glVertex2f(ovehicleX[i] - 25, ovehicleY[i] + 16);
        glVertex2f(ovehicleX[i] + 25, ovehicleY[i] + 16);
        glVertex2f(ovehicleX[i] - 25, ovehicleY[i] - 16);
        glVertex2f(ovehicleX[i] + 25, ovehicleY[i] - 16);
    glEnd();

    glBegin(GL_QUADS);
        glColor3f(0.99609, 0.83984, 0);//middle body
        glVertex2f(ovehicleX[i] - 25, ovehicleY[i] + 20);
        glVertex2f(ovehicleX[i] - 25, ovehicleY[i] - 20);
        glVertex2f(ovehicleX[i] + 25, ovehicleY[i] - 20);
        glVertex2f(ovehicleX[i] + 25, ovehicleY[i] + 20);
    glEnd();

    glBegin(GL_QUADS);//up body
        glColor3f(0,1,0);
        glVertex2f(ovehicleX[i] - 23, ovehicleY[i] + 20);
        glVertex2f(ovehicleX[i] - 19, ovehicleY[i] + 40);
        glVertex2f(ovehicleX[i] + 19, ovehicleY[i] + 40);
        glVertex2f(ovehicleX[i] + 23, ovehicleY[i] + 20);
    glEnd();

    glBegin(GL_QUADS);//down body
        glColor3f(0,1,0);
        glVertex2f(ovehicleX[i] - 23, ovehicleY[i] - 20);
        glVertex2f(ovehicleX[i] - 19, ovehicleY[i] - 35);
        glVertex2f(ovehicleX[i] + 19, ovehicleY[i] - 35);
        glVertex2f(ovehicleX[i] + 23, ovehicleY[i] - 20);
    glEnd();

    ovehicleY[i] = ovehicleY[i] - 8;

    if(ovehicleY[i] > vehicleY - 25 - 25 && ovehicleY[i] < vehicleY + 25 + 25 && ovehicleX[i] == vehicleX)
    {
        collide = true;
    }

    if(ovehicleY[i] < -25)
    {
        if(rand() % 2 == 0)
        {
            ovehicleX[i] = 200;
        }
        else
        {
            ovehicleX[i] = 300;
        }
        ovehicleY[i] = 600;
    }
    }
}

void Specialkey(int key, int x, int y)//allow to use navigation key for movement of car
{
switch(key)
{
case GLUT_KEY_UP:
	for(i = 0; i <4; i++)
             {
              ovehicleY[i] = ovehicleY[i] - 10;
             }
             movd = movd - 20;
             break;
case GLUT_KEY_DOWN:
	for(i = 0; i <4; i++)
             {
              ovehicleY[i] = ovehicleY[i] + 10;
             }
             movd = movd + 20;
             break;
case GLUT_KEY_LEFT:vehicleX = 200;
             break;
case GLUT_KEY_RIGHT:vehicleX = 300;
             break;

}

glutPostRedisplay();
}

void Normalkey(unsigned char key, int x, int y)
{
    switch(key)
    {
    /*case '1':if(screen == 0)
             screen=1;
             break;
    case '2':if(screen == 1)
             screen=2;
             break;*/
    case 27:exit(0);
    }
}


void init()
{
glMatrixMode(GL_PROJECTION);
glLoadIdentity();
gluOrtho2D(0, 500, 0, 500);
glMatrixMode(GL_MODELVIEW);
}


void display()
{
    glClear(GL_COLOR_BUFFER_BIT);
    drawRoad();
    drawDivider();
    drawVehicle();
    drawOVehicle();
    movd = movd - 16;
    if(movd < - 60)
    {
        movd = 0;
    }

    score = score + 1;
    glColor3f(1,1,1);
    drawText("Score:", 360,455);
    itoa(score, buffer, 10);
    drawTextNum(buffer, 6, 420,455);
    glutSwapBuffers();
    for(q = 0; q<= 10000000; q++){;}
    if(collide == true)
    {
        glColor3f(0,0,0);
        drawText("Game Over", 200,250);
        glutSwapBuffers();
        //getchar();
        exit(0);
    }
    //}
}


int main(int argc, char **argv)
{
    glutInit(&argc,argv);
    glutInitDisplayMode(GLUT_RGB|GLUT_DOUBLE);
    glutInitWindowPosition(100,100);
    glutInitWindowSize(800,500);
    glutCreateWindow("2D Car Racing game");
    ovpos();
    init();
    glutDisplayFunc(display);
	glutSpecialFunc(Specialkey);
    glutKeyboardFunc(Normalkey);
    glutIdleFunc(display);
    glutMainLoop();
}

