var promise = require('promise');

manager(100,(managersal,err)=> {
    if(managersal<1000) {
        console.log("Manager ki salary => " + managersal);
            aditi(managersal, (aditisal, err) => {
              console.log("aditi ki salary => " + aditisal);
                 vipul(aditisal, (vipulsal, err) => {
                       console.log("Vipul ki salary => " + vipulsal);
                            shilpa(vipulsal, (shilpasal, err) => {
                            console.log("shilpa ki salary => " + shilpasal);

                            })
                     })
             })

        }

    })



function manager(salary, callback) {
    return callback(salary + 2, false)
}

function aditi(value, callback) {
    if (value % 2 == 0)
        return callback(value * 2, false);
    else
        return callback(value + 2, false);

}

function vipul(value, callback) {
    if (value % 2 == 0)
        return callback(value * 2, false);
    else
        return callback(value + 2, false);
}
function shilpa(value, callback) {
    if (value % 2 == 0)
        return callback(value * 2, false);
    else
        return callback(value + 2, false);
}