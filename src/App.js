import React, {useState} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Piano from './components/Piano';
import './App.css';
import VideoPopup from "./components/VideoPopup";



export default function App() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

  return (
      <Provider store={store}>
          <VideoPopup isOpen={isPopupOpen} />
          <Piano openPopup={openPopup}/>
      </Provider>
  );
}
