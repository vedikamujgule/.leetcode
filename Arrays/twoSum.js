var nums = [5,9,2,7,11,15]
var target = 9;

var twoSums = function(nums,target){
    const map = {};
    for(let i=0; i<nums.length; i++){
        const diff = target-nums[i];
        if(diff in map){
            return [map[diff], i]
        }
        map[nums[i]] = i;

    }
    return null;
}
console.log("Two sums indices are", twoSums(nums,target))