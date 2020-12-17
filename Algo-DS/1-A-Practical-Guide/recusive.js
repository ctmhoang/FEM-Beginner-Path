// Task: rewrite this function so that it uses a loop rather than recursion

const a = ['s','cr','t cod', ' :) :)'];

function joinElements(array, joinString) {

    function recurse(index, resultSoFar) {
      resultSoFar += array[index];
  
      if(index === array.length - 1) {
        return resultSoFar;
      } else {
        return recurse(index + 1, resultSoFar + joinString);
      }
    }
  
    return recurse(0, '');
  }

  function joinElesIterative(seq, jointer){
      if(!Array.isArray(seq)) return;
    return seq.reduce((pre,curr) => `${pre}${jointer}${curr}`);
  }
  
  console.log(joinElements(a, 'e'));
  console.log(joinElesIterative(a, 'e'));

  