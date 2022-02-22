//------------------CLOSURES---------------------//
/*

let c = 9;

let f = (function () {
  let c = 0;
  
  function getC() {
    return c++;
  }

  return getC;
})();

console.log(f());

console.log(f());

console.log(f());

console.log(f());

*/
//--------------------METHODS--------------------//

let A = {
  name: 'Oggetto A',

  classic() {
    console.log('%c sono entrato nella CLASSIC function', 'color: #bada55');
    console.log(this);
  },

  arrow: () => {
    console.log('%c sono entrato nella ARROW function', 'color: #ff9643');
    console.log(this);
  },

  call(callback) {
    if (typeof callback === typeof Function) {
      callback();
    } else {
      console.log('Non hai passato una callback valida');
    }
  },

  callerArrow() {
    let localProp = 'ARROW';
    let af = () => {
      console.log(this);
      console.log(`%c ${localProp}`, 'color: #ff9643');
    };
    this.call(af);
  },

  callerClassic() {
    let localProp = 'CLASSIC';
    function ac() {
      console.log(this);
      console.log(`%c ${localProp}`, 'color: #bada55');
    }
    this.call(ac);
  },
};

// A.call(A.classic);
// A.call(A.arrow);

A.callerClassic();
A.callerArrow();
