#include<stdio.h>
main()
{
char a[100];
char ch;
int i=0,j,h,k,c,m;
while((ch=getchar())!='\n')
{
a[i]=ch;   i++;
}
 m=i;   a[i]='\0';
  for(i=0;i<m;i++)
    {
      k=a[i];
        for(j=i;j<m;j++)
            {
              if(k>=a[j])
               {  k=a[j];  h=j; }
            }
     c=a[i];
     a[i]=k;
     a[h]=c;

    }

    printf("%s",a);

}
