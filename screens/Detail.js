import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

const di = Dimensions.get('screen');
const placeholder = require('../assets/placeholder-images-image_large.png');

const Detail = ({route, navigation}) => {
  const movieDetail = route.params.movieDetail;

  const [modal, setModal] = useState(false);

  const videoShown = () => {
    setModal(!modal);
  };
  return (
    <View>
      <ScrollView style={{backgroundColor: 'black'}}>
        <Image
          style={styles.image}
          source={
            movieDetail.poster_path
              ? {
                  uri:
                    'https://image.tmdb.org/t/p/w500' + movieDetail.poster_path,
                }
              : placeholder
          }
        />
        <View style={styles.playContainer}>
          <TouchableOpacity style={styles.play} onPress={() => videoShown()}>
            <Text style={{color: '#fff', fontSize: 20}}>Play</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.name}>{movieDetail.title}</Text>
        <Text style={styles.rating}>
          Ratings : {movieDetail.vote_average}/10
        </Text>
        <Text style={styles.overview}>
          Release Date : {movieDetail.release_date}
        </Text>
        <Text style={styles.overview}>
          Language : {movieDetail.original_language}
        </Text>
        <Text style={styles.overview}>{movieDetail.overview}</Text>
      </ScrollView>
      <Modal animationType="slide" visible={modal}>
        <View style={styles.videoModal}>
          <VideoPlayer
            onBack={() => {
              videoShown();
            }}
            navigator={navigation}
            source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
          />
        </View>
      </Modal>
    </View>
  );
};

export default Detail;
const styles = StyleSheet.create({
  imageContainer: {
    padding: 5,
    position: 'relative',
  },
  image: {
    height: di.height / 2.3,
    width: di.width,
    resizeMode: 'stretch',
  },
  name: {
    paddingTop: 15,
    color: 'red',
    fontSize: 30,
    alignSelf: 'center',
  },
  overview: {
    fontSize: 18,
    color: 'white',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
  },
  rating: {
    color: '#4169e1',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    fontSize: 20,
  },
  play: {
    alignContent: 'center',
    borderRadius: 50,
    width: 60,
    padding: 10,
    backgroundColor: '#4481FC',
  },
  playContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingRight: 35,
    paddingTop: 335,
  },
  videoModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
