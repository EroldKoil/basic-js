module.exports = class DepthCalculator {
    max = 0;
    maxNow = 0;
    response;

    calculateDepth(arr) {
        this.maxNow ++;
        if(this.maxNow > this.max){
           this.max = this.maxNow;
        }
        for(let i = 0; i<arr.length; i++){
            if(Array.isArray(arr[i])){
                this.calculateDepth(arr[i]);
            }
        }
        this.maxNow --;
        if(this.maxNow > 0){
            return;
        }
        else{
            this.response = this.max;
            this.max = 0;
            this.maxNow = 0;
            return this.response;
        }
    }
};