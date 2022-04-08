
function getNums(count) {
    var nums = []
    for (var i = 0; i < count; i++) {
        nums.push(i + 1)
    }
    return nums
}


function getNum(nums) {
    var rndIdx = getRandomInt(0, nums.length)
    var num = +nums.splice(rndIdx, 1)
    return num
}

function getRandomInt(min, max) {

    var randomNum = (Math.random()) * (max - min) + min
    randomNum = Math.floor(randomNum)
    return randomNum
}