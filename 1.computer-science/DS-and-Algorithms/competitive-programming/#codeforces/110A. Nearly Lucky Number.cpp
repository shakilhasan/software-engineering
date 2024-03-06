//https://codeforces.com/contest/110/problem/A
#include<stdio.h>
main()
{
    char ch;
    int t=0;
    while((ch=getchar())!='\n')
    {
        if(ch==52||ch==55)
            t++;
    }
    if(t==4||t==7)
        printf("YES");
    else
        printf("NO");
}
