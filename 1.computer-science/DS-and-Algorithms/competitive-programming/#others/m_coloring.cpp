include<bits/stdc++.h>
using namespace std;
mcolor(k)
{
 for(i=0;i<m;i++)
 {
     if(check(k,i)==1)
     {
         color[k]=i;
         if(k+1<n)
            mcolor(k+1);
         else
            print();
     }

 }

}

check(int k,int c)
{
 for(int i=0)

}

print()
{
    for(i=0;i<n;i++)
    {
        cout<<" "<<color[i];
    }
}



main()
{

mcolor(0);


}
