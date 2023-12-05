let privData = 99;

function test(){

}

export function getData(){
    return privData;
}

export function setData(newData){
    privData = newData;
}