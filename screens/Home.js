import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import axios from 'axios';
import {SliderBox} from 'react-native-image-slider-box';
import List from '../components/List';

const di = Dimensions.get('screen');

const getUpcomingMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/movie/upcoming?api_key=03e185082f315843666a90034a86b9ff',
  );
  return resp.data.results;
};

const getPopularMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=03e185082f315843666a90034a86b9ff',
  );
  return resp.data.results;
};

const getPopularTv = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/tv/popular?api_key=03e185082f315843666a90034a86b9ff',
  );
  return resp.data.results;
};

const getFamilyMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=03e185082f315843666a90034a86b9ff&with_genres=10751',
  );
  return resp.data.results;
};

const Home = ({navigation}) => {
  const [moviesImages, setMoviesImages] = useState('');
  const [popularMovies, setPopularMovies] = useState('');
  const [popularTv, setPopularTv] = useState('');
  const [familyMovies, setFamilyMovies] = useState('');
  const [error, setError] = useState(false);
  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const moviesImagesArray = [];
        movies.forEach(movies => {
          moviesImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movies.poster_path,
          );
        });
        setMoviesImages(moviesImagesArray);
      })
      .catch(err => {
        setError(err);
      });
    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies);
      })
      .catch(err => {
        setError(err);
      });
    getPopularTv()
      .then(movies => {
        setPopularTv(movies);
      })
      .catch(err => {
        setError(err);
      });
    getFamilyMovies()
      .then(movies => {
        setFamilyMovies(movies);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <ScrollView style={{backgroundColor: 'black'}}>
      <View style={styles.sliderContainer}>
        <SliderBox
          images={moviesImages}
          dotStyle={{height: 0}}
          sliderBoxHeight={di.height / 1.5}
          autoplay={true}
          circleLoop={true}
        />
      </View>
      <View style={styles.carousel}>
        <List
          navigation={navigation}
          title="Popular Movies"
          content={popularMovies}></List>
      </View>
      <View style={styles.carousel}>
        <List
          navigation={navigation}
          title="Popular Tv"
          content={popularTv}></List>
      </View>
      <View style={styles.carousel}>
        <List
          navigation={navigation}
          title="Family Movies"
          content={familyMovies}></List>
      </View>
    </ScrollView>
  );
};

export default Home;
const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
