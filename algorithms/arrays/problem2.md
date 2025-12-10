# Given an interger array nums, fund the subarray with the largest sum, and return it's sum

```markdown
function (int nums[n])
begin
	max_ending_here := nums[1]
	max_so_far := nums[1]
	for i from 2 to n do
		if max_ending_here + nums[i] > nums[i] then
			max_ending_here := max_ending_here + nums[i]
		else
			max_ending_here := nums[i]
		end
		if max_ending_here > max_so_far then
			max_so_far := max_ending_here
		end
	end
	return max_so_far
end
```