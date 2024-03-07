#include<stdio.h>
int f_r(int n)
{
if(n>1)
return(n*f_r(n-1));
else
    return n;
}

main()
{ int a=1,c;
   while(a!=0)
     {scanf("%d",&a);
     if(a>0)
        {c=f_r(a);    printf("\n%d\n",c); }
     }

}
