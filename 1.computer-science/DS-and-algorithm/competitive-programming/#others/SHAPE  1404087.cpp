#include<iostream>
#define pi 3.1416
using namespace std;
class base
{
public:
    virtual double area()
    {
        return 0;
    }
    virtual double volume()
    {
        return 0;
    }
};

class circle:public base
{
    double r;
public:
    double volume()
    {
        return(3.1416*r*r);
    }
    friend istream& operator>>(istream& in,circle &x);
};
istream& operator>>(istream& in,circle &x)
{
    cout<<"r:";
    in>>x.r;
    return in;
}
class cylinder:public base
{
    double h,r;
public:
    double volume()
    {
        return(3.1416*r*r*h);
    }
    double area()
    {
        return(2*pi*r*r+pi*r*h);
    }
    friend void operator>>(istream& in,cylinder &x);
};
void operator>>(istream& in,cylinder &x)
{
    cout<<"r:";
    cin>>x.r;
    cout<<"h:";
    cin>>x.h;
}
void cf()
{
    int i=0,n,cod,t,k=0,c,b[100],nr,f,co,ty;
    double sa1=0,sa2=0,sv1=0,sv2=0,rsv1=0,rsv2=0,rsa1=0,rsa2=0;
    base *a[100];
    circle *ci;
    cylinder *cy;
    cout<<"nambers of shape:";
    cin>>n;
    cout<<"codes::\n**************\n   circle 1\n   volume 2\n**************"<<endl;
    while(1)
    {
        n=n+k;
        while(i<n)
        {
            cout<<"................\n       |"<<i+1<<"|\nENTER cod:";
            cin>>cod;
            switch(cod)
            {
            case 1:
                ci=new circle;
                cin>>*ci;
                a[i]=ci;
                b[i]=1;
                break;
            case 2:
                cy=new cylinder;
                cin>>*cy;
                a[i]=cy;
                b[i]=2;
                break;
            default:
                i--;
                cout<<"eror cod!\a";
                break;
            }
            i++;
        }
        cout<<"................\npress 'ADD: 1'  'REMOVE 2'  'CLOSE 0' :";
        cin>>c;
        if(c==0) break;
        else if(c==1)
        {
            cout<<"how many SHAPE  :";
            cin>>k;
        }

        else
        {
            cout<<"how many shape  :";
            cin>>nr;
            for(int t=0; t<nr; t++)
            {
                cout<<"   which shape:";
                cin>>f;
                f=f-1;
                if(b[f]==1)
                {
                    rsv1=rsv1+a[f]->volume();
                    rsa1=rsa1+a[f]->area();
                }
                else
                {
                    rsv2=rsv2+a[f]->volume();
                    rsa2=rsa2+a[f]->area();

                }

            }
            k=0;

        }
    }
    t=i;
    for(i=0; i<t; i++)
    {
        if(b[i]==1)
            sa1=sa1+a[i]->area();
        if(b[i]==2)
            sa2=sa2+a[i]->area();

    }

    for(i=0; i<t; i++)
    {
        if(b[i]==1)
            sv1=sv1+a[i]->volume();
        if(b[i]==2)
            sv2=sv2+a[i]->volume();
    }

    sa1=sa1-rsa1;
    sa2=sa2-rsa2;
    sv1=sv1-rsv1;
    sv2=sv2-rsv2;

    cout<<"which types of shape u want to calculate? \n circle 1 cylinder 2 & all shapes 0:";
    cin>>ty;
    cout<<"area 1 volume 2 all 0:";
    cin>>co;
    cout<<"_________________\n";

    if(ty==1)
    {
        if(co==1)
            cout<<"area:"<<sa1;
        else if(co==2)
            cout<<"volume:"<<sv1;
        else
        {
            cout<<"area: "<<sa1<<"\nvolume: "<<sv1;
        }
    }
    else if(ty==2)
    {
        if(co==1)
            cout<<"area:"<<sa2;
        else if(co==2)
            cout<<"volume:"<<sv2;
        else
        {
            cout<<"area: "<<sa2<<"\nvolume: "<<sv2;
        }
    }
    else
    {
        if(co==1)
            cout<<"area:"<<sa1+sa2;
        else if(co==2)
            cout<<"volume:"<<sv1+sv2;
        else
        {
            cout<<"area: "<<sa1+sa2<<"\nvolume: "<<sv1+sv2;
        }
    }

    cout<<"\n_____________________";


delete cy;
delete ci;
}
main()
{
    cf();
}
