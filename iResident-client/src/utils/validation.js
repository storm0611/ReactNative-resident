
const Validation = {
  isAmountFormatValid: text => {
    if (/^(?=.)([+-]?([0-9]*)(\.([0-9]{1,2}))?)$/.test(text) === false) {
      return false;
    } else {
      return true;
    }
  },
  isFieldEmpty: text => {
    if (text) {
      if (text.length > 0) {
        text.replace(/\s*$/, "");
        if (text == "") {
          return true;
        }
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  },
  isFieldEmpty2: text => {
    if (text == "") {
      return true;
    }
    return false;
  },
  isEmailInvalid: text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return true;
    }
    return false;
  },
  isNumber: text => {
    let reg = /^[0-9]*$/;
    if (reg.test(text) === true) {
      return true;
    }
    return false;
  },
  isNumberForBagSize: text => {
    let reg = /^[1-9]*$/;
    if (reg.test(text) === true) {
      return true;
    }
    return false;
  },
  isTextLengthInvalid: (text, length) => {
    if (text.length < length) {
      return true;
    }
    return false;
  },
  isTwoTextInputsSame: (text1, text2) => {
    text1.replace(/\s*$/, "");
    text2.replace(/\s*$/, "");

    if (text1 === text2) {
      return true;
    }
    return false;
  },
  isZipCodeInvalid: text => {
    let isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(text);

    if (!isValidZip) {
      return true;
    }
    return false;
  },
  isEmptyField: text => {
    if (text.trim().length > 0) {
      return true;
    } else {
      return false
    }
  },
  isEmptyObject: data => {
    return Object.keys(data).length !== 0
  }
  // isFloat = val => {
  //   let floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
  //   if (!floatRegex.test(val)) {return true};
  //   var val = parseFloat(val);
  //   if (isNaN(val)) return true;
  //   if (val <= 0) return true;
  //   return false;
  // },
  // isInt=(val)=>{
  //   var intRegex = /^-?\d+$/;
  //   if (!intRegex.test(val))
  //       return false;

  //   var intVal = parseInt(val, 10);
  //   return parseFloat(val) == intVal && !isNaN(intVal);
  // }
};

export default Validation;
