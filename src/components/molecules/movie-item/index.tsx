import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { MovieItemProps } from './types';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { MovieTitle, Label, Star } from '@/components';
import { Platform } from '@/theme';
import { MovieContext } from '@/contexts';

const MovieItemBase = ({
  name,
  year,
  nameStyle,
  yearStyle,
  containerMovieTitleStyle,
  movieItemStyle,
  imgUrl,
  id,
}: MovieItemProps) => {
  const movieContext = useContext(MovieContext);
  const [clicked, setClicked] = useState<boolean>(false);

  const onPressLike = useCallback(() => {
    const checkLikedMovie = movieContext.state.likedMovies?.filter(
      item => item !== id,
    );
    if (checkLikedMovie?.length === movieContext.state.likedMovies?.length) {
      // id doesn't existed -> add new
      const newLikedMovies = [...(movieContext.state.likedMovies || []), id];
      movieContext.dispatch({
        type: 'UPDATE_LIKED_MOVIE',
        likedMovies: newLikedMovies,
      });
    } else {
      // remove id from liked list
      movieContext.dispatch({
        type: 'UPDATE_LIKED_MOVIE',
        likedMovies: checkLikedMovie,
      });
    }
  }, [id, movieContext]);

  useEffect(() => {
    const checkLikedMovie = movieContext.state.likedMovies?.filter(
      item => item !== id,
    );
    if (checkLikedMovie?.length === movieContext.state.likedMovies?.length) {
      // id doesn't existed -> un-like
      setClicked(false);
    } else {
      // like
      setClicked(true);
    }
  }, [movieContext.state.likedMovies, id]);

  return (
    <View style={[styles.container, movieItemStyle]}>
      {imgUrl ? (
        <Image
          source={{ uri: imgUrl }}
          style={styles.containerImg}
          resizeMode="stretch"
        />
      ) : (
        <View style={styles.containerImg}>
          <Label value="data not found" />
        </View>
      )}
      <MovieTitle
        name={name}
        year={year}
        nameStyle={nameStyle}
        yearStyle={yearStyle}
        containerMovieTitleStyle={[containerMovieTitleStyle, styles.movieTitle]}
      />
      <TouchableOpacity style={styles.starContainer} onPress={onPressLike}>
        <Star clicked={clicked} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieTitle: {
    position: 'absolute',
    bottom: 0,
  },
  starContainer: {
    position: 'absolute',
    top: Platform.SizeScale(10),
    right: Platform.SizeScale(10),
  },
});

export const MovieItem = memo(MovieItemBase);
