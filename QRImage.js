var qr = require('qr-image');
 
var qr_svg = qr.image('https://www.google.com/', { type: 'png' ,parse_url:true});

qr_svg.pipe(require('fs').createWriteStream('qr.png'));
 
// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });