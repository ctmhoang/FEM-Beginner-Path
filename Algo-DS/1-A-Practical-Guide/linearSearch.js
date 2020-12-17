// TASK: Implement linear search.

function linearSearch(list, item) {
    const len = list.length;
    function search (index){
        if(index >= len) return -1;
        if(list[index] === item) return index;
        return search(++index);
    }
    return search(0);
}

console.log(linearSearch([2,6,7,90,103], 90));