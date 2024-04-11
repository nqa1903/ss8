function printString(str:string | string[]):void{
    if(typeof str === 'string'){
        console.log(str);
        
    }else{
        for(let i of str){
            console.log(i);
        }
    }
}
printString(['anh' , 'quang']);
