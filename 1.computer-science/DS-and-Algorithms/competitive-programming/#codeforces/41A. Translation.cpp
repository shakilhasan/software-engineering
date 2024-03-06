//https://codeforces.com/contest/41/problem/A
#include<stdio.h>
main()
{
    char a[101],b[101],*c;
    gets(a);
    gets(b);
    strrev(a);
    c=strstr(a,b);
    if(c)
        printf("YES");
    else
        printf("NO");
}
