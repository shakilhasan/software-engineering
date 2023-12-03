//https://codeforces.com/contest/122/problem/A
#include<stdio.h>
main()
{
    int n;
    scanf("%d",&n);
    if(n%4==0||n%7==0||n%47==0||n%74==0||n%477==0||n%774==0||n%747==0||n%744==0||n%447==0||n%474==0)
    {   printf("YES");    }
    else
        printf("NO");

}
