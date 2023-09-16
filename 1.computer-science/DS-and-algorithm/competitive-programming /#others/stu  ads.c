#include<stdio.h>
#define m 3

int i;


struct name
         {
        char sn[20];
        int sr;
        char sd[20];

        };


void input(struct name b[]);
void input(struct name b[]);
void cf(void);

main()
{

    cf();
   }

void cf(void)
{
   struct name a[m];
 input(a);
 input(a);
}

void input(struct name b[])
  {
  for(i=0;i<m;i++)
      {
          printf("NAME      ROLL      DEPARTMENT \n");
      scanf("%s",b[i].sn);
      scanf("%d",&b[i].sr);
      scanf("%s",b[i].sd);
      }
  }



void output(struct name b[])
 {
 for(i=0;i<m;i++)
     {
     printf("\nTHE STUDENT'S \n NAME  ROLL  DEPARTMENT=\t %s   %d  %s\n",b[i].sn,b[i].sr,b[i].sd);

     }

 }
