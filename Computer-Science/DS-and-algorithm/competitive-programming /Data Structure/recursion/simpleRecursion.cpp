#include <bits/stdc++.h>
using namespace std;
int re(int i)
{
    if(i==0)
    {
        return 0;
    }
    cout<<" "<<i;
    re(i-1);
}

main()
{
    re(10);

}
