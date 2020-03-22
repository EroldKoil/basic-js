class VigenereCipheringMachine {
    array = {
        a: "abcdefghijklmnopqrstuvwxyz",
        b: "bcdefghijklmnopqrstuvwxyza",
        c: "cdefghijklmnopqrstuvwxyzab",
        d: "defghijklmnopqrstuvwxyzabc",
        e: "efghijklmnopqrstuvwxyzabcd",
        f: "fghijklmnopqrstuvwxyzabcde",
        g: "ghijklmnopqrstuvwxyzabcdef",
        h: "hijklmnopqrstuvwxyzabcdefg",
        i: "ijklmnopqrstuvwxyzabcdefgh",
        j: "jklmnopqrstuvwxyzabcdefghi",
        k: "klmnopqrstuvwxyzabcdefghij",
        l: "lmnopqrstuvwxyzabcdefghijk",
        m: "mnopqrstuvwxyzabcdefghijkl",
        n: "nopqrstuvwxyzabcdefghijklm",
        o: "opqrstuvwxyzabcdefghijklmn",
        p: "pqrstuvwxyzabcdefghijklmno",
        q: "qrstuvwxyzabcdefghijklmnop",
        r: "rstuvwxyzabcdefghijklmnopq",
        s: "stuvwxyzabcdefghijklmnopqr",
        t: "tuvwxyzabcdefghijklmnopqrs",
        u: "uvwxyzabcdefghijklmnopqrst",
        v: "vwxyzabcdefghijklmnopqrstu",
        w: "wxyzabcdefghijklmnopqrstuv",
        x: "xyzabcdefghijklmnopqrstuvw",
        y: "yzabcdefghijklmnopqrstuvwx",
        z: "zabcdefghijklmnopqrstuvwxy"
    };


	constructor(tf){
    	if(tf != true && tf != undefined){
    		 this.mod = 'reverse';
    	}
    	else{
    		this.mod = 'direct';
    	}
    }
	
	encrypt(message, key) {
        if(message == undefined || key == undefined){
        	throw new Error();
        }
        message = message.toLowerCase();
        key = key.toLowerCase();

        let response = '';

        for(let i = 0, j = 0 ; i < message.length; i++, j++){
            if(this.array.a.indexOf(message[i]) == -1){
                response += message[i];
                j--;
                continue;
            }
            if(j > key.length-1){
                j = 0;
            }

            let keyStr = this.array[key[j]];
            let letterIndex = this.array.a.indexOf(message[i]);

            response += keyStr[letterIndex];
        }

        if(this.mod == 'reverse'){
        	response = response.split('').reverse().join('');
        }
        return response.toUpperCase();
    }

    decrypt(encryptedMessage, key ) {
    	 if(encryptedMessage == undefined || key == undefined){
    		 throw new Error();
         }
        encryptedMessage = encryptedMessage.toLowerCase();
        key = key.toLowerCase();

        let response = '';

        for(let i = 0, j = 0 ; i < encryptedMessage.length; i++, j++){
            if(this.array.a.indexOf(encryptedMessage[i]) == -1){
                response += encryptedMessage[i];
                j--;
                continue;
            }
            if(j > key.length-1){
                j = 0;
            }

            let keyStr = this.array[key[j]];
            let letterIndex = this.array[key[j]].indexOf(encryptedMessage[i]);

            response += this.array.a[letterIndex];
        }

    	 if(this.mod == 'reverse'){
             response = response.split('').reverse().join('');
         }

        return response.toUpperCase();
    }
    
}

module.exports = VigenereCipheringMachine;
