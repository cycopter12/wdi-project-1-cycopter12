window.addEventListener('DOMContentLoaded', function () {
  var words = document.querySelector('.words')
  var score = document.querySelector('.score')
  var timerId = document.querySelector('.time')
  var button = document.querySelector('.btn')
  var allWords
  var typed
  var seconds = 60
  var points = 0
  var timerCount = 0
  var error_c = 0
  var error = document.querySelector('.error')

  var list = ['chlordiazepoxide', 'jimmy', 'symmachus', 'picker', 'treelessness',
    'pettishness', 'gangliest', 'saehrimnir', 'gnosticiser', 'circumambience', 'catching', 'precharted', 'permanganic', 'nondivulgence', 'claystone', 'crownpiece', 'alorton', 'predoubt', 'confetti', 'evanescing', 'tenner', 'overaffliction', 'realize', 'ossian',
    'sakhalin', 'eclamptic', 'goldarnedest', 'primine', 'habitacle', 'cogitate', 'transiently', 'interaxis', 'resuit', 'gastrocnemius', 'taking', 'unopted', 'appealer', 'azbine', 'phosphocreatine', 'nalchik', 'gentilesse'
  ]

  function countDown () {
    points = 0
    setTimeout(updateTimer, 1000)
  }

  function updateTimer () {
    // var startIn = setInterval(function () {
    button.disabled = true
    seconds--
    timerId.innerHTML = seconds
    if (seconds === 0) {
      alert('Time is Up! Here is your Score ' + points + 'You commited ' + error_c + 'errors')
      // score.innerHTML = '0'
      words.innerHTML = ''
      button.disabled = false
      timerId.innerHTML = '60'
      // clearInterval( startIn)
      seconds = 60
      button.disabled = false
    } else {
      setTimeout(updateTimer, 1000)
    }
  }

  function newWord () {
    words.innerHTML = ''
    var randomWordIndex = Math.floor(Math.random() * 41)
    var randomWord = list[randomWordIndex]

    // randomWord is the word to appear for game
    // for each character in randomWord
    //    create a div, set textContent of div to character
    //    append div into .words DOM Element
    for (var i = 0; i < randomWord.length; i++) {
      var span = document.createElement('span')
      span.textContent = randomWord[i]
      span.className = 'wordsCharacter'
      words.appendChild(span)
    }
    // words.textContent = randomWord;

    // for (var i = 0; i < sentenceArr.length; i++) {
    //   var newListArr = document.createElement('newListArr')
    //   newListArr.classList.add('newListArr')
    //   newListArr.innerHTML = sentenceArr[i]
    //   words.appendChild(newListArr)
    // }
    // allSentence = document.querySelectorAll('div')
    allWords = randomWord
  }

  button.addEventListener('click', function (e) {
    updateTimer()
    newWord()
    // countDown()
    button.disabled = true
  })

  var global_c = 0

  function keyCheck (e) {
    // typed = keydown character.toLowerCase
    // find the dom element that we want -> span
    // get char of the dom Element -> toCheck
    // check toCheck === typed
    // if true
    //    highlight
    //    global counter ++
    // else
    //    error

    typed = String.fromCharCode(e.which).toLowerCase()
    // word -> element with class .words -> p dom element
    var whatWeWant = words.querySelectorAll('.wordsCharacter')[global_c] // array of spans
    if (whatWeWant.innerHTML === typed) { // if typed letter is the one from the word
      whatWeWant.classList.add('bg')
      global_c++
    } else {
      error_c++
      error.innerHTML = error_c
    }
    // for (var i = 0; i < whatWeWant.length; i++) {
    // }
  // }

  // typed = String.fromCharCode(e.which).toLowerCase()
  // if (allSentence[global_c].innerHTML === typed) { // if typed letter is the one from the word
  //   allSentence[global_c].classList.add('bg')
  //   global_c++
  // }

  // else if (words[div].innHTML !== typed) { // if typed letter is the one from the word
  //   error_c++
  //   error.innerHTML = error_c
  // }

  // animation for horse movement
    var margin1 = points * 30
    var horsey = document.getElementById('horse')
    horsey.style.marginLeft = margin1 + 'px'
    console.log(margin1)

    if (global_c === allWords.length) { // animate character
      global_c = 0
      points++ // increment the points
      score.innerHTML = points // add points to the points div
      document.removeEventListener('keydown', keyCheck, false)
      setTimeout(function () {
        words.className = 'words' // restart the classes
        newWord() // give another sentence
        document.addEventListener('keydown', keyCheck, false)
      }, 400)
    }
  }

  document.addEventListener('keydown', keyCheck, false)
})