// Generated by CoffeeScript 1.6.2
(function() {
  var RandString;

  RandString = window.RandString = (function() {
    var rand, _letters, _randLowercaseLetter, _randNumber, _randSymbol, _randUppercaseLetter, _stringRandom, _symbols;

    _letters = "abcdefghijklmnopqrstuvwxyz";
    _symbols = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
    _randLowercaseLetter = function() {
      return _letters.charAt(Math.floor(Math.random() * _letters.length));
    };
    _randUppercaseLetter = function() {
      return _randLowercaseLetter().toUpperCase();
    };
    _randNumber = function(min, max) {
      if (min == null) {
        min = 0;
      }
      if (max == null) {
        max = 9;
      }
      return Math.floor(Math.random() * (max - min + 1) + min).toString();
    };
    _randSymbol = function() {
      var num;

      num = Math.floor(Math.random() * _symbols.length);
      console.log(num);
      return _symbols.charAt(num);
    };
    _stringRandom = function(size) {
      return Math.random().toString(36).substring(2, size + 2);
    };
    /*
      pattern
        l = lowecase letter
        L = uppercase letter
        n = Integer number [0-9]
        N = Integer number [1-9] (Exclude 0)
        s = symbol
    */

    rand = function(pattern) {
      var letter, ret, _i, _len;

      if (pattern == null) {
        pattern = "";
      }
      ret = "";
      if (pattern !== "" && isNaN(Number(pattern))) {
        pattern = pattern.split("");
        for (_i = 0, _len = pattern.length; _i < _len; _i++) {
          letter = pattern[_i];
          switch (letter) {
            case "l":
              ret += _randLowercaseLetter();
              break;
            case "L":
              ret += _randUppercaseLetter();
              break;
            case "n":
              ret += _randNumber();
              break;
            case "N":
              ret += _randNumber(1, 9);
              break;
            case "s":
              ret += _randSymbol();
              break;
            default:
              ret += letter;
          }
        }
      } else {
        ret = _stringRandom(pattern);
      }
      return ret;
    };
    return {
      rand: rand
    };
  })();

}).call(this);
