var QRCode = require('qrcode')
var toSJIS = require('qrcode/helper/to-sjis')
var fs =require('fs')
const path = require('path');
var QrCode = require('qrcode-reader')
var Jimp = require("jimp");

var data={
    name:"manoj",
    add:"nashik",
    pin:422007
}
var str=`{ name:"manoj",add:"nashik", pin:422007}`

//Stage 1
QRCode.toDataURL(str, function (err, url) {
//   console.log("Fig1  :",url)
})


 //Stage 2
QRCode.toDataURL(str, { toSJISFunc: toSJIS }, function (err, url) {
  console.log("FIG2--",url)
})

//Stage 3
// var uploadPath = path.normalize(process.cwd() + '/uploads/file.png');
// QRCode.toFile(uploadPath, str, {
//     color: {
//       dark: '#FFF',  // Blue dots
//       light: '#000' // Transparent background
//     }
//   }, function (err) {
//     if (err) throw err
//     console.log('done')
//   })

// var buffer = fs.readFileSync(__dirname + '/uploads/file.png');
// Jimp.read(buffer, function(err, image) {
//     if (err) {
//         console.error(err);
//         // TODO handle error
//     }
//     var qr = new QrCode();
//     qr.callback = function(err, value) {
//         if (err) {
//             console.error(err);
//             // TODO handle error
//         }
//         console.log(value.result);
//         console.log(value);
//     };
//     qr.decode(image.bitmap);
// });