//https://codeforces.com/contest/1323/problem/A
#include<iostream>
using namespace std;
main()
{
    int t,m=0,p,s,i,a,j,n;
    cin>>t;
    while(t--)
    {
        cin>>n;
        s=0;
        m=0;
        p=0;
        for(i=1; i<=n; i++)
        {
            cin>>a;
            if(a%2==0 && s==0)
            {
                m=0;
                cout<<"1\n"<<i<<endl;
                s=1;
                //break;
            }
            else if(a%2==1&& s==0)
            {
                if((m+a)%2==0)
                {
                    cout<<"2\n"<<p<<" "<<i<<endl;
                    s=1;
                    //break;
                }

                m=a;
                p=i;
            }
        }
        if(s==0)
        {
            cout<<"-1"<<endl;
        }
    }
}
