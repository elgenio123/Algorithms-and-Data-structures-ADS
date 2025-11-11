function (int array[l1], int a)
begin
    for i from 1 to l1 do
        for j from 2 to l2 do
            if array[i] + array[j] == a then
                return i, j
        end
    end
end