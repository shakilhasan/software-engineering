//https://codeforces.com/contest/281/problem/A
#include<stdio.h>
char fc(char ch)
{
    if(ch>='a'&&ch<='z')
        return(ch+'A'-'a');
    else
        return ch;

}
main()
{
    unsigned char a[1001];
    gets(a);
    a[0]=fc(a[0]);
    puts(a);


}
