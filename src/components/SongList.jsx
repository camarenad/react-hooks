import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';


const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'groovy bones', id: 1 },
    { title: 'that way', id: 2 },
    { title: 'lesbian skud missle', id: 3 }
  ]);
  const [age,setAge] = useState(20);

  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  useEffect(() => {
    console.log('useEffect hook', songs)
  },[songs]);
  useEffect(() => {
    console.log('useEffect hook', age)
  },[age]);
  return (
    <div className='song-list'>
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)} className='btn btn-primary'>Add one to age: {age}</button>
    </div>
  );
};

export default SongList;
