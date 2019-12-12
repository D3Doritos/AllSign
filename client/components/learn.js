import React from 'react'
import {Footer, Navbar} from '../components'
import {Icon, Modal, Popup, Button, Image} from 'semantic-ui-react'
let clicks = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
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
]
const Learn = () => {
  return (
    <div>
      <Navbar />
      <div id="Letters">
        {clicks.map(click => (
          <Popup
            size="huge"
            content={
              <Image
                src={require(`../../public/images/${click.toLowerCase()}.jpg`)}
              />
            }
            basic
            id="popup"
            key={click}
            trigger={
              <button
                key={click}
                id="letterbutton"
                type="button"
                className="ui button"
              >
                {click}
              </button>
            }
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}
function handleOver() {
  document.getElementById('letterbutton').hidden = true
}
export default Learn
