import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput, Button, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addNote, editNote, deleteNote } from "../actions/notesActions";

const NoteList = () => {
    const notes = useSelector((state) => state.notes);
    const dispatch = useDispatch();
  
    const [editIndex, setEditIndex] = useState(null);
    const [editNoteText, setEditNoteText] = useState('');
    const [isEditModalVisible, setEditModalVisible] = useState(false);
    const [isNewNoteModalVisible, setNewNoteModalVisible] = useState(false);
    const [newNoteText, setNewNoteText] = useState('');
  
    const renderItem = ({ item, index }) => (
      <View style={styles.noteItem}>
        <Text style={styles.noteText}>{item}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.editButton]}
            onPress={() => handleEdit(index, item)}
          >
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={() => handleDelete(index, item)}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  
    const handleEdit = (index, note) => {
      setEditIndex(index);
      setEditNoteText(note);
      setEditModalVisible(true);
    };
  
    const handleEditSave = () => {
      dispatch(editNote(editIndex, editNoteText));
      setEditModalVisible(false);
      setEditIndex(null);
      setEditNoteText('');
    };
  
    const handleDelete = (index, note) => {
      Alert.alert(
        "Delete Note",
        `Are you sure you want to delete this note: "${note}"?`,
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Delete",
            onPress: () => {
              dispatch(deleteNote(index));
            },
            style: "destructive",
          },
        ],
        { cancelable: true }
      );
    };
  
    const handleAddNote = () => {
      setNewNoteModalVisible(true);
    };
  
    const handleAddNoteSave = () => {
      if (newNoteText.trim() !== '') {
        dispatch(addNote(newNoteText));
        setNewNoteModalVisible(false);
        setNewNoteText('');
      }
    };
  
    return (
      <View>
        <FlatList
          data={notes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          style={styles.noteList}
        />
  
        <TouchableOpacity
          style={styles.addNoteButton}
          onPress={handleAddNote}
        >
          <Text style={styles.buttonText}>Add Note</Text>
        </TouchableOpacity>
  
        <Modal
          animationType="slide"
          transparent={true}
          visible={isEditModalVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                style={styles.modalInput}
                placeholder="Edit your note here"
                value={editNoteText}
                onChangeText={(text) => setEditNoteText(text)}
              />
              <View style={styles.modalButtonContainer}>
                <Button title="Save" onPress={handleEditSave} color="#2ecc71" />
                <Button title="Cancel" onPress={() => setEditModalVisible(false)} color="#e74c3c" />
              </View>
            </View>
          </View>
        </Modal>
  
        <Modal
          animationType="slide"
          transparent={true}
          visible={isNewNoteModalVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TextInput
                style={styles.modalInput}
                placeholder="Type your new note here"
                value={newNoteText}
                onChangeText={(text) => setNewNoteText(text)}
              />
              <View style={styles.modalButtonContainer}>
                <Button title="Save" onPress={handleAddNoteSave} color="#2ecc71" />
                <Button title="Cancel" onPress={() => setNewNoteModalVisible(false)} color="#e74c3c" />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  



const styles = StyleSheet.create({
  noteList: {
    marginBottom: 20,
  },
  noteItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    padding: 16,
    elevation: 3,
  },
  noteText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton: {
    backgroundColor: '#3498db',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '80%',
    elevation: 5,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addNoteButton: {
    backgroundColor: '#3498db',
    alignSelf: 'flex-end',
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default NoteList;
