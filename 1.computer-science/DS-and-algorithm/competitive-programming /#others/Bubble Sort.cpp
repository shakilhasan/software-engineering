#include <bits/stdc++.h>
using namespace std;
void swap(int *a,int *b)
{
    int temp=*a;
    *a=*b;
    *b=temp;
}
void sort(int a[],int n)
{
    for(int i=0; i<n-1; i++)
    {
        for(int j=0; j<n-i-1; j++)
        {
            if(a[j]>a[j+1])
                swap(&a[j],&a[j+1]);
        }
    }
}
main()
{
	int a[] = {64,34,25, 2,22,11,90,44,33},n;
    n = sizeof(a)/sizeof(a[0]);
    sort(a,n);
    for(int i=0; i<n; i++)
    {
        cout<<a[i]<<" ";
    }
}
