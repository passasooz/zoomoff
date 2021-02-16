import useSound from 'use-sound';
import ringTone from './assets/ringtone.mp3';
import bell from './assets/bell.mp3';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import StopIcon from '@material-ui/icons/Stop';

function SoundButton(props) {
    const [text, setText] = useState('play');
    const sound = props.sound == 'ringtone' ? ringTone : bell;
    const textSound = props.sound == 'ringtone' ? 'ringtone' : 'bell';
    const [play, { stop, isPlaying }] = useSound(sound);
    const handleClick = () => {
        if(!isPlaying) {
            play();
            setText('stop');
        } else {
            stop();
            setText('play');
        }
    }
    return (
        <Button variant="contained" color="primary" onClick={handleClick} startIcon={<PlayCircleOutlineIcon/>}>{text} {textSound}</Button>
    );
};
export default SoundButton;