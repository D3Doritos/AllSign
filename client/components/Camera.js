import React, {Component} from 'react'
import Webcam from 'react-webcam'
import {Button, Header, Image, Modal} from 'semantic-ui-react'
import axios from 'axios'
import * as tf from '@tensorflow/tfjs'
import * as tmImage from '@teachablemachine/image'
let webcam = new tmImage.Webcam(200, 200, true)

//teachable machine version for display purposes. Python based model in learn-interactive.txt 

class WebcamModal extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      currentImg: require('../../public/images/0.jpg'),
      correct: true
    }
    this.init = this.init.bind(this)
    this.handleTest = this.handleTest.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  async init() {
    await webcam.setup() // request access to the webcam
    await webcam.play()
    const loop = () => {
      webcam.update() // update the webcam frame
      window.requestAnimationFrame(loop)
    }
    window.requestAnimationFrame(loop)

    // append elements to the DOM
    document.getElementById('webcam-container').appendChild(webcam.canvas)
    document.getElementById('next').disabled = true
    let correct = document.getElementById('correct')
    correct.hidden = true
    let incorrect = document.getElementById('incorrect')
    incorrect.hidden = true
  }
  async handleTest() {
    let correct = document.getElementById('correct')
    let incorrect = document.getElementById('incorrect')
    incorrect.hidden = true
    const modelURL =
      'https://teachablemachine.withgoogle.com/models/NeX9xVyz/model.json'
    const metadataURL =
      'https://teachablemachine.withgoogle.com/models/NeX9xVyz/metadata.json'
    let count = this.state.count
    let model = await tmImage.load(modelURL, metadataURL)
    const handSign = await model.predict(webcam.canvas)
    if (handSign[count].probability < 1 && handSign[count].probability > 0.7) {
      this.setState({correct: true})
      correct.hidden = false
      document.getElementById('next').disabled = false
    } else {
      this.setState({correct: false})
      setTimeout(function() {
        incorrect.hidden = false
      }, 3000)
      document.getElementById('next').disabled = true
    }
  }

  handleNext() {
    document.getElementById('next').disabled = true
    const count = this.state.count
    let correct = document.getElementById('correct')
    correct.hidden = true
    this.setState({
      currentImg: require(`../../public/images/${count + 1}.jpg`)
    })
    this.setState({
      count: count + 1
    })
    let img = document.getElementById('desiredHandSign')
    img.src = this.state.currentImg
  }
  render() {
    let correct = document.getElementById('correct')
    return (
      <Modal
        onOpen={this.init}
        trigger={<Button id="webcam-button">Start</Button>}
      >
        <Modal.Header>Submit a Photo</Modal.Header>
        <Modal.Content id="modalbox" image>
          <div id="correct" className="ui success message" hidden={true}>
            <div className="content">
              <div className="header">Good Job!</div>
              <p>You can now move on to the next hand sign</p>
            </div>
          </div>
          <div id="incorrect" hidden={true} className="ui negative message">
            <div className="header">sorry that is not quite right</div>
            <p>try again</p>
          </div>
          <>
            <div id="webcam-container" />
          </>
          <Modal.Description>
            <Header>Make the displayed hand sign</Header>
            <Image id="desiredHandSign" src={this.state.currentImg} />
            <p>Please keep the hand used to sign in the box for the photo</p>
            <Button onClick={this.handleTest}>Test</Button>
            <button
              id="next"
              type="button"
              className="ui button"
              onClick={this.handleNext}
            >
              next
            </button>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default WebcamModal
