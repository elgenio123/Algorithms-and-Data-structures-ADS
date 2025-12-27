# Given an array nums of intergers return an array of all unique quadruplets such that 0 <= a, b, c, d < n. a, b, c, d are distinct num[a]+num[b]+num[c]+num[d] = target

function quadruplets(nums, target)

begin

    for i from 1 to length(nums) do
        if nums[i] > 0 then
            for j from i + 1 to length(nums) do
                for k from j+1 to length(nums) do
                    for l from k+1 to length(nums) do
                        if target == nums[i] + numss[j] + nums[k] + nums[l] :
                            save values at position i , j , k and l
    retunr saved list of quadruplets
end