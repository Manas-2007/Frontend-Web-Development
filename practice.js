let nums=[10,20,30,40,50]
for(let i=0;i<nums.length;i++)
{
    console.log(nums[i])
}
let squares=[];
for(let k=0;k<nums.length;k++)
{
    squares[k]=nums[k]*nums[k];
}
for(let i=0;i<nums.length;i++)
{
    console.log(squares[i])
}

