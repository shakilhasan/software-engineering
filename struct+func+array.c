#include<stdio.h>
#define m 3
int i,n,w;
struct ads
   {
   char name[20];
   char dpt[10];
   };

  void input(struct ads b[])
  {
     for(i=0;i<m;i++)
     {printf("%d NAME :  DERT:\n",i+1);
      scanf("%s %s",b[i].name,b[i].dpt);
      }
    }
  void output(struct ads c[])
    {
    for(i=0;i<m;i++)
        {
        printf("NAME:  DEPT:  ===  %s  %s\n\n",c[i].name,c[i].dpt);
        }
    }

    void str(struct ads a[])
     {
      strrev(a[n].name);
      }

  void cf(void)
     {
     struct ads a[m];
     input(a);
     printf("whhich  name  u want to reverse  ::");
       scanf("%d",&n);
       n=n-1;
      printf("whhich  name  u want to his wife name  ::");
       scanf("%d",&w);   w=w-1;
       strcat(a[w].name,"i");
       str(a);
     output(a);

     }
main()
{
    cf();
}
