//https://codeforces.com/contest/467/problem/A
#include<stdio.h>
main()
{
    int n,a,b,i,m=0;
    scanf("%d",&n);
    for(i=0;i<n;i++)
    {
        scanf("%d %d",&a,&b);
        if(b-a>=2)
            m++;
    }

    printf("%d",m);

}
