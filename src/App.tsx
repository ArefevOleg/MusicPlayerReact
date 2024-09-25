import React, {useState} from 'react';
import {SongsType} from "./data/songsData";
import allSongs from './data/songsData';
import {Player} from "./Player";


function App() {
    const [songs, setSongs] = useState<SongsType[]>(allSongs)
    return (
        <div className="App">
            <Player/>
        </div>
    );
}

export default App;


