const crypto      = require('crypto'); // express plugin
const algorithm   = 'aes-256-ctr'; // idk what this is
const password    = 'sir regi da best'; // arbitrary string

exports.encrypt = (text) => {
    var cipher = crypto.createCipher(algorithm, password);
    try{
    	var crypted = cipher.update(text, 'utf8', 'hex');
    	crypted += cipher.final('hex');
    	return crypted;
    }catch(e){
    	console.log('failed');
    	return;
    }
    
}

exports.decrypt = (text) => {
    var decipher = crypto.createDecipher(algorithm, password);
    try{
    	var decrypted = decipher.update(text, 'hex', 'utf8');
    	decrypted += decipher.final('utf8');
    	return decrypted;
    }catch(e){
    	console.log('failed');
    	return;
    }
    
}

