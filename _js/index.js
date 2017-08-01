import DepartureBoard from './departure-board'

window.onload = () => {

  var words = ['SHIFT','FIRST']
  var w = document.getElementById('w')
  var board = new DepartureBoard (w, { rowCount: 1, letterCount: 5 })
  board.setValue ('SHIFT')
  setInterval(chg, 4000)

  function chg() {
    var that = w.dataset.word === words[0] ? words[1] : words[0]
    board.setValue (that)
    w.dataset.word = that
  }

}
