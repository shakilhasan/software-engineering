//https://codeforces.com/contest/61/problem/A
#include<stdio.h>
main()
{
    char ch;
    int a[100],b[100],n,i=0;
    while((ch=getchar())!='\n')
    {
        a[i]=ch;  i++;
    }
    i=0;
    while((ch=getchar())!='\n')
    {
        b[i]=ch;  i++;
    }
    n=i;
    for(i=0;i<n;i++)
    {
        if(a[i]==b[i])
            printf("0");
        else
            printf("1");
    }


}
