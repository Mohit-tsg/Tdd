
export function  findNeedle (arg0: number[], arg1: number)  {
    if(arg1 ==null){
        return -1;
    }
    if(!arg0.includes(arg1)){
        return -1;
    }
    if(arg0.length ==0){
        return -1;
    }

    for(let i=0; i<arg0.length; i++){
        return arg0[i];
    }

//     let left: number = 0;
//     let right: number = nums.length - 1;

//   while (left <= right) {
//     const mid: number = Math.floor((left + right) / 2);

//     if (nums[mid] === target) return mid;
//     if (target < nums[mid]) right = mid - 1;
//     else left = mid + 1;
//   }

  return -1;
};


