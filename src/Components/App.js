import React from 'react';
import SongList from './songsList'
import SongsDetails from './songsDetails';

function App() {
  return (
    <div className='container'>
       <div className='row'>
          <div className='col'>
             <SongList/>
          </div>
          <div className='col'>
             <SongsDetails/>
          </div>
       </div>
      
    </div>
  );
}

export default App;
