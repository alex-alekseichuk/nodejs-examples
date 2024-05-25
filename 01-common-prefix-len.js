const assert = require('assert')

function commonPrefix(inputs) {
    return inputs.map(calcCommonPrefix)
}

function calcCommonPrefix(inputStr) {
    if (!inputStr || inputStr.length === 0) return 0

    // input string as prefix
    let total = inputStr.length

    const sequencesStartIndexes = []

    for (let i = 1; i < inputStr.length; i++) {
        const currentChar = inputStr[i]
        let sequencesNum = sequencesStartIndexes.length
        for (let iSequence = 0; iSequence < sequencesNum; ) {
            // sequence finished
            if (currentChar !== inputStr[i - sequencesStartIndexes[iSequence]]) {
                total += i - sequencesStartIndexes[iSequence]
                sequencesStartIndexes.splice(iSequence ,1)
                sequencesNum--;
            } else {
                iSequence++;
            }
        }

        // new sequence
        if (currentChar === inputStr[0])
            sequencesStartIndexes.push(i)
    }

     // add tails
    for (const start of sequencesStartIndexes) {
        total += inputStr.length - start
    }

    return total
}

assert.deepStrictEqual(
    commonPrefix(['abcabcd', 'ababaa', 'aa']),
    [10, 11, 3],
)

