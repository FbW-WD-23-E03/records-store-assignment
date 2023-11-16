import React, { useState } from "react";
import "./App.css";

function App() {
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");

  //! http GET request to retrieve all records
  const getAllRecords = async () => {};

  //! http POST request to add a new record
  const addRecord = async (e) => {
    e.preventDefault();

    setArtist("");
    setAlbum("");
  };

  return (
    <div className='App'>
      <button onClick={getAllRecords}>Get Records</button>

      <form onSubmit={addRecord} className='record-form'>
        <div className='form-group'>
          <label htmlFor='artist' className='form-label'>
            Artist:
          </label>
          <input
            id='artist'
            type='text'
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className='form-input'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='album' className='form-label'>
            Album:
          </label>
          <input
            id='album'
            type='text'
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            className='form-input'
          />
        </div>

        <button type='submit' className='submit-button'>
          Add Record
        </button>
      </form>
    </div>
  );
}

export default App;
