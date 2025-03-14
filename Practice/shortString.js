let arr = ["John", "Doe", "Robert", "William", "James"];

function shortString(arr){
    let obj = {};
    let finalname;
    let count = Infinity;
    for(let name of arr){
        obj[name] = name.length;
    }
    for(let key in obj){
        if(obj[key]<count){
            count = obj[key];
            finalname=key;
        }
    }
    console.log(Object.values(obj));
    
    console.log(finalname);
    
}
shortString(arr);