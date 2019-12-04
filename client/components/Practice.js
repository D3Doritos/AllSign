import React, {Component} from 'react'
import {Form, Radio, Segment, Button} from 'semantic-ui-react'
import {Navbar} from '.'
import {Footer} from './footer'
export default class Practice extends Component {
  constructor() {
    super()
    this.state = {
      alphabet: [
        'A',
        'B',
        'C',
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
      letterArray: [],
      correctIndex: 0
    }

    this.handleChange = this.handleChange.bind(this)
  }

  generateValues = () => {
    const letterArr = []
    let correctIdx = Math.floor(Math.random() * 3)
    let n = 4
    while (n > 0) {
      n--
      letterArr.push(Math.floor(Math.random() * 26))
    }
    console.log(letterArr, correctIdx)
    this.setState({letterArray: letterArr})
    this.setState({correctIndex: correctIdx})
    console.log(this.state.letterArray, this.state.correctIndex)
  }
  handleChange(e, {value}) {
    this.setState({value})
  }

  render() {
    return (
      <div>
        <Navbar />
        <Segment style={{padding: '8em 0em', color: 'white'}} vertical>
          <Form>
            <Form.Field id="quizform">
              <b className="signFont">
                {
                  this.state.alphabet[
                    this.state.letterArray[this.state.correctIndex]
                  ]
                }
              </b>
            </Form.Field>
            <Form.Field>
              <Radio
                value={this.state.alphabet[this.state.letterArray[0]]}
                checked={
                  this.state.value ===
                  this.state.alphabet[this.state.letterArray[0]]
                }
                onChange={this.handleChange}
              />
              {this.state.alphabet[this.state.letterArray[0]]}
            </Form.Field>
            <Form.Field>
              <Radio
                value={this.state.alphabet[this.state.letterArray[1]]}
                checked={
                  this.state.value ===
                  this.state.alphabet[this.state.letterArray[1]]
                }
                onChange={this.handleChange}
              />
              {this.state.alphabet[this.state.letterArray[1]]}
            </Form.Field>
            <Form.Field>
              <Radio
                value={this.state.alphabet[this.state.letterArray[2]]}
                checked={
                  this.state.value ===
                  this.state.alphabet[this.state.letterArray[2]]
                }
                onChange={this.handleChange}
              />
              {this.state.alphabet[this.state.letterArray[2]]}
            </Form.Field>
            <Form.Field>
              <Radio
                value={this.state.alphabet[this.state.letterArray[3]]}
                checked={
                  this.state.value ===
                  this.state.alphabet[this.state.letterArray[3]]
                }
                onChange={this.handleChange}
              />
              {this.state.alphabet[this.state.letterArray[3]]}
            </Form.Field>
          </Form>
          <div>Quiz</div>
          <Button onClick={this.generateValues} />
        </Segment>
        <Footer />
      </div>
    )
  }
}
