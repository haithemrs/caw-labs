function mean(scores) {
    let sum = 0;
    for (let s of scores) {
        sum += s;
    }
    return sum / scores.length;
}

// Export
module.exports = { mean };
