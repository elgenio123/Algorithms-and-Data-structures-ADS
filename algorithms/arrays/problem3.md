# ``Given an array num with n objects colored red, white or blue. sort them in place so that objects of the same colors are adjacent with the colors in the order red, white, blue

type Colors = enum
              Red: 0
              White: 1
              Blue: 2
              end;

function sort_colored_objects(Array objects[Colors])

begin

    for i from 1 to length(objects) do
       for j from i+1 to length(objects) - i
            if objects[i] > objects[j] then
                objects[i], objects[j] = objects[j], objects[i]

end