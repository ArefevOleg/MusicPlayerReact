import React, {useState} from 'react';
import {SongsType} from "./data/songsData";
import allSongs from './data/songsData';


function App() {
  const [songs, setSongs] = useState<SongsType[]>(allSongs)
  return (
      <div className="App">

      </div>
  );
}

export default App;


