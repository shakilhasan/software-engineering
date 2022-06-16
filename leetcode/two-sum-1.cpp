class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int len;
        vector<int>ans;
        //len=nums.length();
        len = sizeof(nums) / sizeof(nums[0]);

        for(int i=0; i<len; i++)
        {
            for(int j=i; j<len; j++)
            {
                if(nums[i]+nums[j]==target)
                {
                    ans.push_back(i);
                    ans.push_back(j);
                    //cout<<"["<<nums[i]<<","<<nums[j]<<"]";
                    break;
                }
            }
        }

        return ans;

    }
};
