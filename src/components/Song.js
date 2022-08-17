import React from 'react';

const Song = ({song}) => {

    return(
        <div>
            {song.id}, {song.title}, {song.artist}
        </div>
    )
}

export default Song