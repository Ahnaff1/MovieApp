import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

const placeholder = require('../assets/placeholder-images-image_large.png');

class Card extends React.PureComponent {
  render() {
    const {item, navigation} = this.props;
    return (
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() => navigation.navigate('Detail', {movieDetail: item})}>
        <Image
          style={styles.image}
          source={
            item.poster_path
              ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
              : placeholder
          }
        />
      </TouchableOpacity>
    );
  }
}

export default Card;
const styles = StyleSheet.create({
  imageContainer: {
    padding: 5,
    position: 'relative',
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
});
