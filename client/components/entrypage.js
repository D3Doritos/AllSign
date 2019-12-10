import React from 'react'
import {Video} from './index.js'
import Sound from 'react-sound'
import {Link} from 'react-router-dom'
import {Footer, Navbar} from '../components'
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Button
} from 'semantic-ui-react'

const EntryPage = () => {
  return (
    <Grid>
      <Navbar />
      <Grid.Row>
        <Grid.Column id="logo" width={4}>
          <Image
            rounded={true}
            id="getstartedimg"
            src="https://www.ajc.com/rf/image_inline/Pub/p8/CmgSharedContent/2017/12/04/Images/GettyImages-830954658.jpg"
          />
          <strong id="welcom"> Welcome, Start Learning Sign Today</strong>
          <Link to="/interactive">
            <Button id="getstartedbutton">
              <Icon size="large" name="american sign language interpreting" />
              Get Started
            </Button>
          </Link>
        </Grid.Column>
      </Grid.Row>
      <Footer />
    </Grid>
  )
}

export default EntryPage
