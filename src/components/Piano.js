import React, {useState} from 'react';
import PianoKey from './PianoKey';

const Piano = ({openPopup}) => {

    const correctSequence = ['Do','Do','Re','Do','Fa','Mi', 'Do','Do','Re','Do', 'Sol', 'Fa', 'Do','Do','DoM','La','Fa','Mi', 'Re', 'Sib','Sib','La', 'Fa', 'Sol', 'Fa'];
    //const correctSequence = ['Do','Do'];
    const keys = ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si', 'DoM', 'Reb', 'Mib', 'Solb', 'Lab', 'Sib'];
    const [playedNotes, setPlayedNotes] = useState([]);




    const handleNoteClick = (note) => {
        setPlayedNotes(prevNotes => [...prevNotes, note]);
        if(JSON.stringify(correctSequence) === JSON.stringify([...playedNotes, note])){
            openPopup();
        } else {
            if(!compareFirstNElements(correctSequence, [...playedNotes, note], [...playedNotes, note].length)){
                setPlayedNotes(prevNotes => []);
            }
        }
    };

    function compareFirstNElements(arr1, arr2, n) {
        // Controllo se gli array hanno abbastanza elementi
        if (arr1.length < n || arr2.length < n) {
            return false;
        }

        // Confronto i primi n elementi
        for (let i = 0; i < n; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 center">Auguri merth</h1>
            <div className="piano-container" style={{ position: 'relative', width: '550px'}}>
                {keys.map((key) => (
                    <PianoKey key={key} note={key} callback={handleNoteClick} />
                ))}
            </div>

        </div>
    );


};

export default Piano;