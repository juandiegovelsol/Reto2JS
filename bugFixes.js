const a=checkEquals([1, 2], [1, 3]);
const b=checkEquals([1, 2], [1, 2]);
const c=checkEquals([4, 5, 6], [4, 5, 6]);
const d=checkEquals([4, 7, 6], [4, 5, 6]);
const e=checkEquals([4, 7, 6], [4, 6, 7]);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
function checkEquals(arr1, arr2) {
  if(arr1.length!==arr2.length){
    return false;
  }
  for(let i=0;i<arr1.length;i++){
    if(arr1[i]!==arr2[i]){
      return false;
    }
  }
return true;
}