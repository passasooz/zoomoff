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
    const [color, setColor] = useState('primary');
    const [icon, setIcon] = useState(<PlayCircleOutlineIcon/>);
    const handleClick = () => {
        if(!isPlaying) {
            play();
            setText('stop');
            setColor('secondary');
            setIcon(<StopIcon/>);
        } else {
            stop();
            setText('play');
            setColor('primary');
            setIcon(<PlayCircleOutlineIcon/>);
        }
    }
    return (
        <Button variant="contained" color={color} onClick={handleClick} startIcon={icon}>{text} {textSound}</Button>
    );
};
export default SoundButton;