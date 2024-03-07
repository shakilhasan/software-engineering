//https://codeforces.com/contest/1367/problem/A
#include<iostream>
#include<bits/stdc++.h>
using namespace std;
main()
{
    string a[100],str;
    char ch,b='a';
    int i,p=0,n;
    cin>>n;
    n++;
    while(n--)
    {
        i=0;
        while((ch = getchar()) != '\n' && ch != EOF )
        {
            if(i%2 == 1 || i==0)
            {
                cout<<ch<<"";

            }
            i++;
        }
        cout<<""<<endl;
    }
}
