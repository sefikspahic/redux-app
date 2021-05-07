import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    console.log(song)
if(!song) return <div><strong>Please select a song</strong></div>

    return (
        <div>
            <h3 className='title'>Details for:</h3>
            <p><p className='title'>Title:</p>{song.title}</p>
            <p><p className='title'>Duration:</p>{song.duration}</p>
        </div>
    );
}

const mapStateToProps = state => {
    return { song: state.selectedSong}
}
export default connect(mapStateToProps)(SongDetail);