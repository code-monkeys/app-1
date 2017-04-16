/**
 * Created by budde on 25/02/2017.
 */
import React from 'react'
import FancyImageTextButton from './FancyImageTextButton'
import { fancyFacebookButton } from '../../../style'

const FancyFacebookButton = ({text, onPress, disabled}) => <FancyImageTextButton
  style={fancyFacebookButton.button}
  onPress={onPress}
  text={text}
  disabled={disabled}
  imageSource={require('../../../../img/facebook.png')}/>

export default FancyFacebookButton

FancyFacebookButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.bool
}
