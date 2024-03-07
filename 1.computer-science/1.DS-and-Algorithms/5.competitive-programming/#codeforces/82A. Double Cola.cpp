//https://codeforces.com/contest/82/problem/A
#include<stdio.h>
main()
{
    int n,k=0;
    float h,m=5;
    scanf("%d",&n);
    while(1)
    {
        k=m+k;
        if(k>n)
        {
            h=(n-k+m)/(m/5);
            if(h<=1&&h>0)
                printf("Sheldon");
            if(h<=2&&h>1)
                printf("Leonard");
            if(h<=3&&h>2)
                printf("Penny");
            if(h<=4&&h>3)
                printf("Rajesh");
            if(h==0||h>4)
                printf("Howard");
            break;
        }

        m=m*2;
    }


}
