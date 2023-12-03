//https://codeforces.com/contest/112/problem/A
#include<stdio.h>
main()
{
    int d,i;
    char m='0',n='0';
    char a[100];
    char b[100];
    gets(a);
    gets(b);
    strlwr(a);
    strlwr(b);
    d=strlen(a);
    for(i=0;i<d;i++)
    {
        if(a[i]!=b[i])
        {  m=a[i];   n=b[i];   break; }
    }
    if(m<n)
        printf("-1");
    if(m>n)
        printf("1");
    if(m==n)
        printf("0");

}
