//https://codeforces.com/contest/118/problem/A
#include<stdio.h>
main()
{
    int i,n;
    char a[100];
    gets(a);
    strlwr(a);
    n=strlen(a);
    for(i=0;i<n;i++)
    {
        if(a[i]!='a'&&a[i]!='e'&&a[i]!='i'&&a[i]!='o'&&a[i]!='u'&&a[i]!='y')

            printf(".%c",a[i]);
    }
}
