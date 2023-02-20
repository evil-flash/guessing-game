class GuessingGame {
    constructor(minNum, maxNum) {
        this.minNum
        this.maxNum
    }

    setRange(min, max) {
        this.minNum = min
        this.maxNum = max
    }

    guess() {
        return Math.round((this.minNum + (this.maxNum -this.minNum)/2))
    }

    lower() {
        this.maxNum = this.guess()
    }

    greater() {
        this.minNum = this.guess()
    }
}

module.exports = GuessingGame;
