//https://codeforces.com/contest/546/problem/A
#include<stdio.h>
main(){int k,n,w,p=0,i,d=0;
    scanf("%d%d%d",&k,&n,&w);
    for(i=0;i<w;i++)
    { d=d+k; p=p+d;  }
    if(p<n)
        printf("0");
    else
        printf("%d",p-n);}
