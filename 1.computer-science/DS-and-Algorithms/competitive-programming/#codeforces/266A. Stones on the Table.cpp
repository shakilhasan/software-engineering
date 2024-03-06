//https://codeforces.com/contest/266/problem/A
#include<stdio.h>
main()
{
    int m=0,n,i;
    char a[100];
    scanf("%d",&n);
    scanf("%s",a);
    for(i=0;i<n;i++)
    {  if(a[i]==a[i+1])
        {  m++;    }

    }

    printf("%d",m);

}
