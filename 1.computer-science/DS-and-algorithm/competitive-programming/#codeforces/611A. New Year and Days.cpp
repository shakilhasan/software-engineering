//https://codeforces.com/contest/611/problem/A
#include<stdio.h>
main()
{
    int m,n;
    char a[20];
    gets(a);
    n=strlen(a);
    if(a[5]=='w')
    {
        if(a[0]=='6'||a[0]=='5')
            printf("53");
        else
            printf("52");
    }
    else
    {
        if(n==11)
        {
            m=((a[0]-48)*10+(a[1]-48));
            if(m==31)
                printf("7");
            else if(m==30)
                printf("11");
            else
                printf("12");
        }
        else
            printf("12");
    }
}
