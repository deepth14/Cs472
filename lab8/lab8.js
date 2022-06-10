/**
 * 
 * lab8.js
 */


//6
const countModule = function(){
    let counter = 0; 
    function add(){
    counter+=1;
    }
    function reset(){
    counter = 0;
    }
    return{
    add: function(){
    add();
    },
    reset: function(){
    reset();
    },
    value: function(){
    return counter;
    }
    }
    }
   console.log( countModule.reset())
  //  countModule.add()

  // console.log( countModule.add());
    
    
    