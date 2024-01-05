// NoteForm.js
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addNote } from "../actions/notesActions";
import { Button, TextInput, View, StyleSheet } from "react-native";

const NoteForm = () => {
  const [noteText, setNoteText] = useState('');
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (noteText.trim() !== '') {
      dispatch(addNote(noteText));
      setNoteText('');
    }
  };

  return (
    <View style={styles.noteFormContainer}>
      <TextInput
        style={styles.input}
        placeholder="Type your note here"
        value={noteText}
        onChangeText={(text) => setNoteText(text)}
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Add Note" onPress={handleAddNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  noteFormContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default NoteForm;
