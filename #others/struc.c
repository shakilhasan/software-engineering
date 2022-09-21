#include<stdio.h>

struct book
{
char bn[50];
char wn[50];
int p;
}a[3];


void input(void)
{ int i;
 for(i=0;i<3;i++)
 {
  printf("input name of  book,writer and its price\n");
  scanf("%s",a[i].bn);
  scanf("%s",a[i].wn);
  scanf("%d",&a[i].p);
  }
}


void output(void)
{  int i;
    for(i=0;i<3;i++)
    {
      printf("BOOK=%s    WRITER=%s    PRICE=%d \n",a[i].bn,a[i].wn,a[i].p);
    }

}

main()
{
input();
output();
}

