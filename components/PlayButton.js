import React from 'react';
import {Icon} from 'react-native-vector-icons/Ionicons';
import {Pressable} from 'react-native';

class PlayButton extends React.PureComponent {
  render() {
    return (
      <Pressable>
        <Icon name={'caret-forward-outline'}></Icon>
      </Pressable>
    );
  }
}

export default PlayButton;
