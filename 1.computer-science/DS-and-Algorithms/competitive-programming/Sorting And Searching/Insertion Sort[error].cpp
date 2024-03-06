#include <bits/stdc++.h>
using namespace std;
void sort(int a[],int n)
{
    int i,j,key;
    for( i=1; i<n; i++)
    {
        key=a[i];
        j=j-1;
        while(j>=0 && a[j]>key)
        {
            a[j+1]=a[j];
            j=j-1;
        }
        a[j+1]=key;
    }
}
main()
{
    int a[] = { 12, 11, 13, 10, 16 };
    int n;
    n = sizeof(a)/sizeof(a[0]);
    sort(a,n);
    for(int i=0; i<n; i++)
    {
        cout<<a[i]<<" ";
    }
}
