//https://codeforces.com/contest/472/problem/A
#include <bits/stdc++.h>
using namespace std;

bool isPrime(int n)
{
    if (n <= 1)
        return false;
    if (n <= 3)
        return true;
    if (n % 2 == 0 || n % 3 == 0)
        return false;
    for (int i = 5; i * i <= n; i = i + 6)
        if (n % i == 0 || n % (i + 2) == 0)
            return false;
    return true;
}
int main()
{
    int n,x=0,y=0,i,k;
    cin>>n;
    //cout<<int(sqrt(n))<<"\n";
    if(!isPrime(n))
    {
        for(i=2; i<=int(sqrt(n)+1); i++)
        {
            if(n%i==0)
            {
                k=n/i;
                if(!isPrime(i))
                {
                    x=i;
                    y=i*(k-1);
                    break;
                }

                else if(isPrime(i)&&k>3)
                {
                    x=i*2;
                    y=i*(k-2);
                    break;

                }

            }
        }

    }
    else
    {
        //cout<<"n prime \n";
        x=4,y=n-4;
        for(i=0; i<n; i++)
        {
            //cout<<"\n.."<<x<<" "<<y<<"\n";
            if(!isPrime(x) && !isPrime(y))
            {
                //cout<<"\n******"<<x<<" "<<y<<"\n";
                break;
            }
            x++;
            y--;
        }
    }

    cout<<""<<x<<" "<<y;
}
