//https://codeforces.com/contest/459/problem/B
#include <iostream>
using namespace std;
int main()
/*
{
    unsigned long int i,n,arr[5000],max = 1,min = 1000,dif,count1 =0, count2=0;
    cin>>n;

    for (i=0; i<n; i++)
    {
        cin>>arr[i];
        if (arr[i]>max)
        {
            max = arr[i];
        }
        if (arr[i]<min)
        {
            min = arr[i];
        }
    }

    dif = max - min;
    for (i=0; i<n; i++)
    {
        if (arr[i]==min)
        {
            count1++;
        }
        if (arr[i]==max)
        {
            count2++;
        }
    }
    cout<<dif<<" "<<count1*count2<<endl;
    return 0;
}
*/
{

    unsigned long long int n,x,max=0,min=1000000001,countmax=0,countmin=0;
    cin>>n;
    for(int i=0; i<n; i++)
    {
        cin>>x;
        if(x>max)
        {
            max=x;
            countmax=1;
        }
        else if(x==max&&x!=0) countmax++;
        if(x<min)

        {
            min=x;
            countmin=1;
        }
        else if(x==min&&x!=1000000001) countmin++;

    }
    if(max==min)
    {
        cout<<"0"<<" ";
        unsigned long long  int k=0;
        for(unsigned long long int j=1;j<countmax;j++)
            k+=j;
        cout<<k;
    }
    else
        cout<<max-min<<" "<<countmax*countmin;/*
    if(countmax>countmin) cout<<countmin*countmin;
    else cout<<countmax*countmax;*/

}
