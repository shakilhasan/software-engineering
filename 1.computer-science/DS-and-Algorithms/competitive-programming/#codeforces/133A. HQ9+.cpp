//https://codeforces.com/contest/133/problem/A
#include<stdio.h>
main()
{
    int l,k=0;
    char a[100];
    gets(a);
    l=strlen(a);
    while(l--)
    {
        if(a[l]=='H'||a[l]=='Q'||a[l]==57)
        {   printf("YES");  k=1;    break;    }
    }

    if(k==0)
        printf("NO");
}
