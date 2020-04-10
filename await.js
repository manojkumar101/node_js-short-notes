
let myfunction=async function(){
    shilpa(await vipul(await aditi(2)));
}
myfunction();


function aditi(value) {
        return value * 2;
}

function vipul(value) {
    return value * 2;
}
function shilpa(value) {
    console.log(value);
}
