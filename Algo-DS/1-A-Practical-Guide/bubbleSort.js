function bubbleRecursive(L){
    function swap(l,r){
        const tmp = L[l];
        L[l] = L[r];
        L[r] = tmp;
    }
    let isSorted = true;
    function helper(idx){
        if(L[idx] > L[idx  + 1]){
            swap(idx, idx + 1);
            isSorted = false;
        }
        if(idx === L.length - 2) {
            if(!isSorted){
                idx = -1;
                isSorted = true;
            }else return;
        };
        helper(++idx);
    }
    helper(0);
}

function bubbleIterative(L){
    let isSwapped;

    while(true){
        isSwapped = false;
        for(let i = 0, n = L.length -1 ; i < n ; ++i){
            if(L[i] > L[i+1]){
                const tmp = L[i];
                L[i] = L[i+1];
                L[i+1] = tmp;
                isSwapped = true;
            }
        }
        if(!isSwapped) return;
    }
}
const a = [2,5,3,1,2];
bubbleRecursive(a);
console.log(a)