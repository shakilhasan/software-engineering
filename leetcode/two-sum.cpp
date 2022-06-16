#include <bits/stdc++.h>
using namespace std;

int main()
{
	int nums[100],target,len=5;
	cin>>nums>>target;
    //len=nums.length();
    //len = sizeof(nums) / sizeof(nums[0]);

    for(int i=0; i<len; i++)
    {
        for(int j=i; j<len; j++)
        {
            if(nums[i]+nums[j]==target)
            {
                cout<<"["<<nums[i]<<","<<nums[j]<<"]";
                break;
            }
        }
    }
}
