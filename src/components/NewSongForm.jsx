import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    addSong(title);
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Songs:</label>
      <input
        type='text'
        value={title}
        required
        onChange={e => setTitle(e.target.value)}
      />
      <input className='btn btn-primary' type='submit' value='add song' />
    </form>
  );
};

export default NewSongForm;
