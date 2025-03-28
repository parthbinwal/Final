import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { searchMovies } from '../api/omdbApi';

const SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const results = await searchMovies(searchTerm);
    setMovies(results);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Movies..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.movieItem}
            onPress={() => navigation.navigate('Details', { movieId: item.imdbID })}
          >
            <Image source={{ uri: item.Poster }} style={styles.poster} />
            <Text style={styles.movieTitle}>{item.Title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  movieItem: { flexDirection: 'row', padding: 10, alignItems: 'center' },
  poster: { width: 50, height: 75, marginRight: 10 },
  movieTitle: { fontSize: 16, fontWeight: 'bold' },
});

export default SearchScreen;
