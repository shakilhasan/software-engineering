//https://codeforces.com/contest/58/problem/A
#include<stdio.h>
main()
{
    char a[100];
    int i,l,k,b=0;
    gets(a);
    l=strlen(a);
    for(i=0;i<l;i++)
    {
        if(a[i]=='h')
        { b++;  k=i+1;  break;  }
    }

    for(i=k;i<l;i++)
    {
        if(a[i]=='e')
        { b++;  k=i+1;  break;  }
    }

    for(i=k;i<l;i++)
    {
        if(a[i]=='l')
        { b++;  k=i+1;  break;  }
    }

    for(i=k;i<l;i++)
    {
        if(a[i]=='l')
        { b++;  k=i+1;  break;  }
    }


    for(i=k;i<l;i++)
    {
        if(a[i]=='o')
        { b++;    break;  }
    }

    if(b==5)
        printf("YES");

    else
        printf("NO");






}
