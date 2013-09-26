# Random String Password

Javascript library who implements method to generate password based on a pattern.

## Usage
 ```javascript
    RandString.rand([pattern])
    [pattern]:
        l = lowecase letter
        L = uppercase letter
        n = Integer number [0-9]
        N = Integer number [1-9] (Exclude 0)
        s = symbol
 ```

##Examples
```javascript

    RandString.rand("lllLLL")
    Return: eztPKR

    ---

    RandString.rand("nnnLLL")
    Return: 058UQO

    ---

    RandString.rand("NNNlll")
    Return: 135kjh

    ---
    RandString.rand("Llssnn")
    Return: Yu(|15

```