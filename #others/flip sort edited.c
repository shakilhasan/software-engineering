#include<stdio.h>
main()
{
int a[50],i,j,n,k,c,m=0,r=0,g;
scanf("%d",&n);
 for(i=0;i<n;i++)
    { scanf("%d",&a[i]); }
 for(i=0;i<n;i++)
{  k=a[i];

 for(j=i;j<n;j++)
 {    if(k>=a[j])
        {k=a[j]; m=j; r++; }     }
    c=a[i];
     a[i]=k;

    for(g=m;g>i+1;g--)
    {
        a[g]=a[g-1];
    }
 if(c!=k)
  a[i+1]=c;
     printf("\n%d",a[i]);
}

printf("\n minimum exchange  oparations  %d times ",r-n);
}
