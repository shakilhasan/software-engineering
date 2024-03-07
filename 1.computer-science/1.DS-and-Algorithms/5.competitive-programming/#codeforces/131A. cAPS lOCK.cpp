//https://codeforces.com/contest/131/problem/A
#include<stdio.h>
#include<ctype.h>

int main()
{
    char arr[101];
    int i;

    scanf("%s",arr);

    i=1;
    while(arr[i])
    {
        if(islower(arr[i]))
            break;
        i++;
    }

    if(!arr[i])
    {
        i=1;
        while(arr[i])
        {
            arr[i]=tolower(arr[i]);
            i++;
        }
        if(islower(arr[0]))
            arr[0]=toupper(arr[0]);
        else
            arr[0]=tolower(arr[0]);
    }

    printf("%s",arr);

    return 0;
}
