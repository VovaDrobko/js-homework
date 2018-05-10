remember("apple"); // => returns ["p"]
remember("apPle") // => returns []          // "p" != "P"
remember("pippi") // => returns ["p","i"]
remember('Pippi') // => returns ["p","i"]

function remember(str) {
    var counter = [1],
        alphabet = ["a"],
        charArray = str.split("");
    for (var i = 1; i < charArray.length; i++) {
        var addNew = true;
        for (var j = 0; j < alphabet.length;j++) {
            if (charArray[i] == alphabet[j]) {
                counter[j]++;
                addNew = false;
                break;
            }
        }
        if (addNew) {
            alphabet.push(charArray[i]);
            counter.push(1);
        }
    }
    var result = [];
    for (i = 0; i < counter.length; i++) {
        if (counter[i] > 1)
            result.push(alphabet[i]);
    }
    alert(result);
}
