const b = [5,4,3]
if ((b[0]>0) && (b[1]>0) && (b[2]>0)){
    if (((b[0]+b[1])>b[2]) && (b[0]+b[2])>b[1] && (b[2]+b[1])>b[0])
    {
        console.log("da sie")
    }
    else console.log("nie da sie")
}