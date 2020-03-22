module.exports = function transform(arr) {
    let mods = ['--discard-next','--discard-prev','--double-next','--double-prev'];
    let response = [];

    if(!Array.isArray(arr)){
        throw new Error();
    }

    for(let i = 0 ; i < arr.length ; i++){
        switch (arr[i]) {
            case '--discard-next':
                if(i != arr.length-1 && !mods.includes(arr[i+1])){
                   i++;
                }
                break;
            case '--discard-prev':
                if(i != 0 ){
                   response.splice(response.length-1,1);
                }
                break;
            case '--double-next':
                if(i != arr.length-1 && !mods.includes(arr[i+1])) {
                    response.push(arr[i+1]);
                }
                break;
            case '--double-prev':
                if(i != 0 && !mods.includes(arr[i-1])) {
                    response.push(arr[i-1]);
                }
                break;
            default:
                response.push(arr[i]);

        }
    }

    for(let i = 0 ; i < arr.length ; i++){
        if(mods.includes(arr[i])) {
            arr.splice(i, 1);
            i--;
        }
    }

    return response;
};
