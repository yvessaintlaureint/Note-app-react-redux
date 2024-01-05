// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/stores/store';
import NoteForm from './src/components/NoteForm';
import NoteList from './src/components/NoteList';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NoteList />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
  },
});

export default App;
