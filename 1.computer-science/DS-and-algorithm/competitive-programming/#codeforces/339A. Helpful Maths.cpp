//https://codeforces.com/contest/339/problem/A
#include<stdio.h>
main()
{
    int x=0,y=0,z=0,d,m=0,i;
    char a[100];
    gets(a);
    d=strlen(a);
    for(i=0;i<d;i++)
    {
        if(a[i]==49)
            x++;
        if(a[i]==50)
            y++;
        if(a[i]==51)
            z++;
    }
    for(i=0;i<x;i++)
    {    a[m]=49;   m=m+2;
        //printf("1");
    }

    for(i=0;i<y;i++)
    {a[m]=50;   m=m+2;
        //printf("2");
    }

    for(i=0;i<z;i++)
    {a[m]=51;   m=m+2;
        //printf("3 ");
    }
    puts(a);
}
