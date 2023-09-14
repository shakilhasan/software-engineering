#include<stdio.h>
u_c(char ch)
{
 if(ch>='a'&&ch<='z')
    return (ch+'A'-'a');

 else
      return ch;
}
main()
{ int i=0;
 char ch;
 char k[100];
 while((ch=getchar())!='\n')
   {
    k[i]=u_c(ch);
    i++;
   }
k[i]='\0';
 printf("%s",k);
}
