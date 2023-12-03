//https://codeforces.com/contest/236/problem/A
#include<stdio.h>
main()
{
    char ch;
    char a[100];
    int p=0,i=0,n,j=0,m;

    while((ch=getchar())!='\n')
    {
        a[i]=ch;  i++;
    }
    a[i]='\0';  n=i-1; m=i;
    for(i=0;i<=n;i++)
    {
        for(j=i+1;j<=n;j++)
        {
            if(a[i]==a[j]&&a[j]!='Y')
            {  p++; a[j]='Y';   }
        }
        m=m-p; p=0;
    }

    if(m%2==0)
        printf("CHAT WITH HER!");
    else
        printf("IGNORE HIM!");
}
