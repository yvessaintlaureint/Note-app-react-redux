// notesActions.js
export const addNote = (note) => {
  return {
    type: 'ADD_NOTE',
    payload: note,
  };
};

export const editNote = (index, newNote) => {
  return {
    type: 'EDIT_NOTE',
    payload: { index, newNote },
  };
};

export const deleteNote = (index) => {
  return {
    type: 'DELETE_NOTE',
    payload: index,
  };
};
