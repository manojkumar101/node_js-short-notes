var promise=require('promise');
var salary=100001;
let myfunction=function(){
   Promise=new promise(function(resolve,reject){
        if(salary >10000)
            resolve(100);
    })
    Promise.then(aditi).then(vipul).then(shilpa).then(function(response){console.log("value"+response)});
    
}
myfunction();


function aditi(value) {
        return value * 2;
}

function vipul(value) {
    return value * 2;
}
function shilpa(value) {
    return value * 2;
}
