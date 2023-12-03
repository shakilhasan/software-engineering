//https://codeforces.com/contest/59/problem/A
#include<iostream>
#include<bits/stdc++.h>
using namespace std;
main()
{   string str = "";
    char ch;
    int i=0,u=0,l=0;
    while((ch = getchar()) != '\n' && ch != EOF )
    {
        str=str+ch;
        if(ch<91)
            u++;
        else
            l++;
    }
    if(u>l)
        transform(str.begin(), str.end(), str.begin(), ::toupper);
    else
        transform(str.begin(), str.end(), str.begin(), ::tolower);
    cout<<str;

}
