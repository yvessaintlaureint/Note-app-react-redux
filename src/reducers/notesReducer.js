// notesReducer.js
const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case 'EDIT_NOTE':
      const editedNotes = [...state.notes];
      editedNotes[action.payload.index] = action.payload.newNote;
      return {
        ...state,
        notes: editedNotes,
      };
    case 'DELETE_NOTE':
      const updatedNotes = state.notes.filter((_, index) => index !== action.payload);
      return {
        ...state,
        notes: updatedNotes,
      };
    default:
      return state;
  }
};

export default notesReducer;
