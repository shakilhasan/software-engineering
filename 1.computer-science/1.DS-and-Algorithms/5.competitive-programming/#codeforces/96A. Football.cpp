//https://codeforces.com/contest/96/problem/A
#include<stdio.h>
main()
{
    int m=0,n=0,a=0,b=0;
    char c;
    while((c=getchar())!='\n')
    {
        if(c==48)
        {m++; n=0;
        }
        else
        {
            n++;   m=0;
        }

        if(m==7||n==7)
        {
            a=m; b=n;
        }
    }

    if(a>=7||b>=7)
        printf("YES");
    else
        printf("NO");

}
