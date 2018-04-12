import React from 'react'
import styled from 'styled-components'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`
const Img = styled.img`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: ${rhythm(2)};
  height: ${rhythm(2)};
`

class Bio extends React.Component {
  render() {
    return (
      <Wrapper>
        <Img src={profilePic} alt={`Kyle Mathews`} />
        <p>
          Written by <strong>Kyle Mathews</strong> who lives and works in San
          Francisco building useful things.{' '}
          <a href="https://twitter.com/kylemathews">
            You should follow him on Twitter
          </a>
        </p>
      </Wrapper>
    )
  }
}

export default Bio
