// function doubleIt(num){
//    return num*2;

// }

// const doubleIt=function(num){
//    return num*2;
// }
const doubleIt=num=>num*2;
const add=(x,y)=>x+y;
const give5=()=>5;
const doMath=(x,y)=>{
  const sum=x+y;
  const diff=x-y;
  const result=sum*diff;
  return result;
}
const result2=give5();
const result=doMath(6,3);

console.log(result);

