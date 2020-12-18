function mergeSort(L){
    if(L.length < 2) return [...L];
    else{
        const mid = Math.floor(L.length / 2);
        let left = mergeSort(L.slice(0,mid));
        let right = mergeSort(L.slice(mid));
        return merge(left,right);
    }
}

function merge(left,right){
    let result = [];
    let i = 0 , j = 0;
    while(i < left.length && j < right.length){
        if(left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    if(i < left.length) result = result.concat(left.slice(i));
    if(j < right.length) result = result.concat(right.slice(j));
    return result;
}

const a = [2,5,3,1,2];
console.log(mergeSort(a));
console.log(a);