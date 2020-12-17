// TASK: Implement binary search.

function binarySearch(list, item) {
    function helper(high,low){
        if(high === low) return list[low] === item ? low : -1;
        const mid = Math.floor((high + low) / 2);
        if(list[mid] === item) return mid;
        else if (list[mid] > item) return helper(mid - 1, low);
        else return helper(high, mid + 1);
    }
    return list.length === 0 ? -1 : helper(list.length -1 ,0);
}

console.log(binarySearch([2,6,7,90,103], 90));