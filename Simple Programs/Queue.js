function Insert(arr,item)
{
    arr.push(item);
    console.log("After Insertion : ",arr);
}

function Remove(arr)
{
    arr.shift();
    console.log("After Removal : ",arr);
}

var arr=[10,20,30,40];
console.log("Queue : ",arr);
Insert(arr,50);
Remove(arr);