export const PLAY_NOTE = 'PLAY_NOTE';

export const playNote = (note) => ({
    type: PLAY_NOTE,
    payload: note,
});