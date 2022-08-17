import React, {useState, useEffect} from 'react';
import Chart from '../components/Chart';

const ChartContainer = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function () {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs))
    }

    return(
        <div>
            <Chart songs={songs}/>
        </div>
    )
}

export default ChartContainer