RandString = window.RandString = (->

  _letters = "abcdefghijklmnopqrstuvwxyz"
  _symbols = '!@#$%^&*()_+{}:"<>?\|[];\',./`~'

  _randLowercaseLetter = ->
    _letters.charAt Math.floor Math.random() * _letters.length

  _randUppercaseLetter = ->
    _randLowercaseLetter().toUpperCase()

  _randNumber = (min = 0, max = 9)->
    Math.floor(Math.random() * (max - min + 1) + min).toString();

  _randSymbol = ->
    num = Math.floor Math.random() * _symbols.length
    console.log num
    _symbols.charAt num

  _stringRandom = (size)->
    Math.random().toString(36).substring(2,size+2)

  ###
    pattern
      l = lowecase letter
      L = uppercase letter
      n = Integer number [0-9]
      N = Integer number [1-9] (Exclude 0)
      s = symbol
  ###
  rand = (pattern = "")->
    ret = ""
    if pattern != "" && isNaN Number pattern
      pattern = pattern.split ""
      for letter in pattern
        switch letter
          when "l" then ret += _randLowercaseLetter()
          when "L" then ret += _randUppercaseLetter()
          when "n" then ret += _randNumber()
          when "N" then ret += _randNumber(1,9)
          when "s" then ret += _randSymbol()
          else ret += letter
    else
        ret = _stringRandom(pattern)

    return ret

  {
    rand
  }
)()