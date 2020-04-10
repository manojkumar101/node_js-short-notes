const { OAuth2Client } = require('google-auth-library');
CLIENT_ID = "14657357026-bvpa7chojn0imvloq882s8peap5pc7ek.apps.googleusercontent.com"
const client = new OAuth2Client("14657357026-bvpa7chojn0imvloq882s8peap5pc7ek.apps.googleusercontent.com");
async function verify(token, CLIENT_ID) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID
    });
    const payload = ticket.getPayload();
    console.log("TCL: ----------------------------------")
    console.log("TCL: verify ->  payload ", payload)
    console.log("TCL: ----------------------------------")
    const userid = payload['sub'];
    console.log("TCL: ----------------------------")
    console.log("TCL: verify -> userid", userid)
    console.log("TCL: ----------------------------")

    // If request specified a G Suite domain:
    //const domain = payload['hd'];
}
exports.usertoken = function (request, response) {
    console.log("TCL: -------------------------------------")
    console.log("TCL: usertoken -> usertoken")
    console.log("TCL: -------------------------------------")
    var token = request.body.token;
    verify(token, CLIENT_ID).catch(console.error);

}
// module.exports=usertoken;