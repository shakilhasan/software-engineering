//https://codeforces.com/contest/263/problem/A
#include<stdio.h>
int main()
{
    int a[5][5],i,j,p=0;
    for(i=0;i<5;i++)
        for(j=0;j<5;j++)
        {
            scanf("%d",&a[i][j]);
            if (a[i][j]==1)
            {
                if(j>2)
                    p=j-2;
                else p=2-j;
                if(i>2)
                    p=p+i-2;
                else
                    p=p+2-i;
            }
        }
    printf("%d\n",p);
    return 0;
}
