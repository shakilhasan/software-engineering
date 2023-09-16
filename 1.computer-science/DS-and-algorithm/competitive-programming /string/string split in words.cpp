#include<iostream>
#include<bits/stdc++.h>
using namespace std;
main()
{
    string a[100],str;
    char ch;
    int i=0,j=0,l[100],n;
    while((ch = getchar()) != '\n' && ch != EOF )
    {
        if (isspace(ch))
        {
            a[i][j]='\0';
            l[i]=j;
            i++;
            j=0;
            continue;

        }
        a[i][j]=ch;
        j++;
    }
    a[i][j]='\0';
    l[i]=j;
    n=i;
    for(i=0; i<=n; i++)
    {
        for(j=0; j<l[i]; j++)
        {
            cout<<a[i][j];
        }
        cout<<endl;
    }
}
