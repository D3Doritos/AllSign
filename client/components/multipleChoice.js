import React, {Component} from 'react'
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Reveal
} from 'semantic-ui-react'
import {Navbar, Footer} from '.'

class multipleC extends Component {
  constructor() {
    super()
    this.state = {
      letter: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ],
      gesture: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ],
      answer: '',
      choices: [0, 0, 0, 0],
      questionType: '',
      type: '',
      score: 0,
      totalQuest: -1
    }
    this.populate = this.populate.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  componentDidMount() {
    this.populate()
  }

  populate(score = 0) {
    let types = ['letter', 'gesture']
    let index
    let choices = this.state.choices.slice()
    let answer
    let gesture = this.state.gesture
    let letter = this.state.letter
    let type = types[Math.floor(Math.random() * 2)]
    let questionType = types.filter(e => {
      return e !== type
    })[0]

    if (type === 'gesture') {
      index = Math.floor(Math.random() * (letter.length - 1))
      answer = gesture[index]
      for (let i = 0; i < this.state.choices.length; i++) {
        index = Math.floor(Math.random() * (gesture.length - 1))
        if (!choices.includes(gesture[index]) && gesture[index] !== answer) {
          choices[i] = gesture[index]
        } else {
          i--
        }
      }
      index = Math.floor(Math.random() * choices.length)
      choices.splice(index, 1, answer)
    } else {
      index = Math.floor(Math.random() * (this.state.letter.length - 1))
      answer = letter[index]
      for (let i = 0; i < this.state.choices.length; i++) {
        index = Math.floor(Math.random() * (letter.length - 1))
        if (
          !choices.includes(this.state.letter[index]) &&
          letter[index] !== answer
        ) {
          choices[i] = this.state.letter[index]
        } else {
          i--
        }
      }
      index = Math.floor(Math.random() * choices.length)
      choices.splice(index, 1, answer)
    }
    let totalQuest = this.state.totalQuest
    totalQuest++
    this.setState({
      letter,
      gesture,
      answer,
      choices,
      questionType,
      type,
      score,
      totalQuest
    })
  }
  onClick(val) {
    let score = this.state.score
    if (val == this.state.answer) {
      score++
      //alert('Hell yea brother')
    } else {
      //alert('Not quite my guy')
    }

    this.populate(score)
  }

  render() {
    return this.state.type ? (
      <div>
        <Navbar />
        <div id="multipleChoice">
          <h1 style={{height: '40px'}}>
            Your score: {this.state.score}/{this.state.totalQuest}
          </h1>
          <h2 style={{height: '40px', width: '500px'}}>
            What {this.state.type} is this?
          </h2>
          <h1 style={{display: 'flex', height: '100px'}}>
            {this.state.questionType !== 'gesture' ? (
              <div style={{fontSize: '-webkit-xxx-large'}}>
                {
                  this.state[this.state.questionType][
                    this.state[this.state.type].indexOf(this.state.answer)
                  ]
                }
              </div>
            ) : (
              <div id="displaySign" className="signFont">
                {
                  this.state[this.state.questionType][
                    this.state[this.state.type].indexOf(this.state.answer)
                  ]
                }
              </div>
            )}
          </h1>
          <div id="quiz">
            {this.state.choices.map(e => {
              return (
                <Segment key="quizseg">
                  <Button
                    className="answer"
                    type="button"
                    key={e}
                    val={e}
                    onClick={() => this.onClick(e)}
                  >
                    {this.state.questionType === 'gesture' ? (
                      <div className="letterAnswers">{e}</div>
                    ) : (
                      <div className="signFontSmall">{e}</div>
                    )}
                  </Button>
                </Segment>
              )
            })}
          </div>
          <div className="ui disabled move reveal">
            <div className="visible" />
          </div>
        </div>
        <Footer />
      </div>
    ) : (
      <div id="multiplechoice">
        <h1>Loading</h1>
      </div>
    )
  }
}

export default multipleC
