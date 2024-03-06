//https://codeforces.com/contest/519/problem/B
#include<stdio.h>
main()
{
    int n,a,x=0,y=0,z=0,i;
    scanf("%d",&n);

    for(i=0;i<n;i++)
    {
        scanf("%d",&a);
        x=x+a;
    }

    for(i=0;i<n-1;i++)
    {
        scanf("%d",&a);
        y=y+a;
    }
    for(i=0;i<n-2;i++)
    {
        scanf("%d",&a);
        z=z+a;
    }

    printf("\n%d %d",x-y,y-z);
}
