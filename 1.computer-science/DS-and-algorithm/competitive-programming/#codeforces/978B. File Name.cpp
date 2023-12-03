//https://codeforces.com/contest/978/problem/B
#include<iostream>
#include<bits/stdc++.h>
using namespace std;
main()
{
    char ch;
    int x=0,n=2,p=0;
    while(n--)
    {
        while((ch = getchar()) != '\n' && ch != EOF )
        {
            if(ch=='x')
                x++;
            else
                x=0;

            if(x>2)
                p++;

        }
    }
    cout<<p;
}
