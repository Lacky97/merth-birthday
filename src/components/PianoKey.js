import React from 'react';
import { useDispatch } from 'react-redux';
import { playNote } from '../actions';

const PianoKey = ({ note, callback }) => {
    const dispatch = useDispatch();

    const handlePlay = () => {
        const audio = new Audio(`notes/${note}.mp3`);
        audio.play();
        dispatch(playNote(note));
        showImage();
        callback(note);
    };

    const showImage = () => {
        const img = document.createElement('img');
        img.src = 'gifs//no.gif';  // Aggiungi il percorso dell'immagine
        img.alt = 'Note image';
        img.className = 'note-image';
        img.style.position = 'absolute';
        img.style.transition = 'all 0.5s ease-in-out';
        img.style.width = '100px';  // Cambia la dimensione dell'immagine se necessario
        img.style.height = '100px';  // Cambia la dimensione dell'immagine se necessario

        // Calcolare una zona centrale da escludere
        const pianoWidth = 600;  // Adatta questa larghezza alla tua zona di tasti
        const pianoHeight = 400; // Adatta questa altezza alla tua zona di tasti

        // Genera una posizione casuale escluso il centro
        let top, left;

        // Seleziona una zona sopra o sotto, a sinistra o a destra dei tasti
        const excludeCenterX = 200; // Imposta il margine sinistro e destro
        const excludeCenterY = 150; // Imposta il margine superiore e inferiore

        // Genera posizione casuale sopra o sotto
        if (Math.random() > 0.5) {
            top = Math.random() * (window.innerHeight - 50); // Casuale in altezza
        } else {
            top = Math.random() * (window.innerHeight - pianoHeight - excludeCenterY); // Evita la zona centrale
        }

        // Genera posizione casuale a sinistra o a destra
        if (Math.random() > 0.5) {
            left = Math.random() * (window.innerWidth - 50); // Casuale in larghezza
        } else {
            left = Math.random() * (window.innerWidth - pianoWidth - excludeCenterX); // Evita la zona centrale
        }

        // Imposta la posizione
        img.style.top = `${top}px`;
        img.style.left = `${left}px`;

        document.body.appendChild(img);

        // Rimuovi l'immagine dopo un po' (ad esempio dopo 2 secondi)
        setTimeout(() => {
            img.remove();
        }, 2000);
    };


    return (
        <button
            style={{
                background: !['Reb', 'Mib', 'Solb', 'Lab', 'Sib'].includes(note) ? 'white' : 'black',
                position: ['Reb', 'Mib', 'Solb', 'Lab', 'Sib'].includes(note) ? 'absolute' : 'relative',
                width: !['Reb', 'Mib', 'Solb', 'Lab', 'Sib'].includes(note) ? '60px' : '40px',
                height: !['Reb', 'Mib', 'Solb', 'Lab', 'Sib'].includes(note) ? '200px' : '120px',
                zIndex: ['Reb', 'Mib', 'Solb', 'Lab', 'Sib'].includes(note) ? 1 : 0,
                padding:  ['Reb', 'Mib', 'Solb', 'Lab', 'Sib'].includes(note) ? '0px' : '0px',
                left: ['Reb', 'Mib', '', 'Solb', 'Lab', 'Sib'].indexOf(note) < 0 ? 'unset' :`${((['Reb', 'Mib', '', 'Solb', 'Lab', 'Sib'].indexOf(note) + 1) * 80 - ['Reb', 'Mib','', 'Solb', 'Lab', 'Sib'].indexOf(note) * 16)}px`,
            }}
            className="piano-key"
            onClick={handlePlay}
        >
            {note}
        </button>
    );
};

export default PianoKey;