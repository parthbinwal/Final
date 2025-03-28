import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { getMovieDetails } from '../api/omdbApi';

const MovieDetailsScreen = ({ route }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await getMovieDetails(movieId);
      setMovie(data);
      setLoading(false);
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.Title} ({movie.Year})</Text>
      <Text style={styles.details}>Genre: {movie.Genre}</Text>
      <Text style={styles.details}>IMDB Rating: {movie.imdbRating}</Text>
      <Text style={styles.plot}>{movie.Plot}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  poster: { width: 200, height: 300, marginBottom: 10 },
  title: { fontSize: 20, fontWeight: 'bold' },
  details: { fontSize: 16, marginBottom: 5 },
  plot: { fontSize: 14, textAlign: 'center', marginTop: 10 },
});

export default MovieDetailsScreen;
