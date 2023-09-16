#include<stdio.h>
#include<iostream>
using namespace std;
main()
{ int a,b,i,j;
     cout<<"a,b:";
    scanf("%d%d",&a,&b);
for(i=0;i<a;i++)
    printf(". ");
for(i=0;i<b-2;i++)
{  printf("\n. ");
    for(j=0;j<a-2;j++)
    { printf("  "); }
    printf(".");
}
printf("\n. ");
for(i=0;i<a-2;i++)
    printf(". ");
printf(".");
}
