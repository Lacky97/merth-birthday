import { PLAY_NOTE } from '../actions';

const initialState = { currentNote: null };

function pianoReducer(state = initialState, action) {
    switch (action.type) {
        case PLAY_NOTE:
            return { ...state, currentNote: action.payload };
        default:
            return state;
    }
}

export default pianoReducer;