'use strict'

var gCellsNumber = 16
var gCurrNum
var gTimerInterva
var gElTimer = document.querySelector('.timer')
var isGameStarted

function init() {
  isGameStarted = false
  var nums = getNums(gCellsNumber)
  renderBoard(nums)
  clearInterval(gTimerInterva)
  gCurrNum = 0
  gElTimer.innerText = '0.0'
}

function startOver() {
  init()
}

function setDifficulty(difficulty) {
  gCellsNumber = difficulty
  init()
}

function renderBoard(nums) {
  var strHTML = ''
  var rowLength = Math.sqrt(gCellsNumber)
  var lastNumber = gCellsNumber

  for (var i = 0; i < rowLength; i++) {
    strHTML += '<tr>'
    for (var j = 0; j < rowLength; j++) {
      var num = getNum(nums)
      strHTML += `<td onclick="cellClicked(this,${num})">${num}</td>`
    }
    strHTML += '</tr>'
  }
  document.querySelector('.board').innerHTML = strHTML
}

function startGame() {
  if (isGameStarted) return
  isGameStarted = true
  var counter = 0
  gTimerInterva = setInterval(() => {
    counter += 100
    renderTimer(counter)
  }, 100)
}


function cellClicked(elCell, number) {
  if (gCurrNum + 1 === number) {
    elCell.classList.add('clicked')
    gCurrNum++
  }
  if (gCurrNum === 1) {
    startGame()
  }

  if (gCurrNum === gCellsNumber) {
    gameOver()
  }
}

function renderTimer(counter) {
  console.log("here");
  gElTimer.innerText = counter / 1000
}

function gameOver() {
  clearInterval(gTimerInterva)
}