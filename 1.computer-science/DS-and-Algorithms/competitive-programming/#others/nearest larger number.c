#include<stdio.h>
main()
{
int a[50],n,i,k;
scanf("%d",&n);
a[0]=a[n+1]=0;
for(i=1;i<=n;i++)
    {
        printf("%d no position:",i);
     scanf("%d",&a[i]);
     }
printf("\n at position:\n");
scanf("%d",&k);
if(a[k-1]>a[k+1])
 printf("nearest larger number is %d",a[k-1]);
else
printf("nearest larger number is %d",a[k+1]);

}
