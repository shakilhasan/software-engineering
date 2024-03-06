//https://codeforces.com/contest/615/problem/A
#include<stdio.h>
main()
{
    int m,n,x,y,i,j,r=0;
    int a[1000];

    scanf("%d%d",&n,&m);
    for(i=0;i<n;i++)
    {
        scanf("%d",&x);
        for(j=0;j<x;j++)
        {
            scanf("%d",&y);
            a[y-1]=y;
        }
    }

    for(i=0;i<m;i++)
    {
        if(a[i]==i+1)
            r++;
    }
    if(r==m)
        printf("YES");
    else
        printf("NO");

}
