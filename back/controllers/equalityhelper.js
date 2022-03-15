
module.exports={
    equals:(arr1 , arr2)=>{
        let result = arr1.every(function (element) {
            return arr2.includes(element);
          });
          return result
}
}




