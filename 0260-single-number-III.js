var singleNumber = function(nums) {
    var aux = {};
    nums.forEach(function(num) {
        if (aux[num] != null) {
            aux[num] = null;
            delete aux[num];
            return;
        }

        aux[num] = true;
    });
    
   return Object.keys(aux).map(Number);
     
};



console.log(singleNumber([1,2,1,3,2,5]))