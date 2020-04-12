import React, { useState } from 'react';
import { SketchPicker, ColorChangeHandler, ColorResult } from 'react-color';

export const ColorPicker: React.FC<{ colorVal: string, onColorChange: (c: string) => void }> = ({ colorVal, onColorChange }) => {
    const [displayPicker, setDisplayPicker] = useState(false)

    const handleClick = () => {
        setDisplayPicker(!displayPicker)
    };

    const handleColorChange: ColorChangeHandler = (clr: ColorResult) => {
        onColorChange(clr.hex)
    };

    const styles = {
        color: {
            width: '36px',
            height: '14px',
            borderRadius: '2px',
            background: `${colorVal}`,
        },
        swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
            'margin-left': '5px'
        }
    }

    return <>
        <div>
            <input type='text' value={colorVal} onChange={(ev) => { onColorChange(ev.target.value) }} />
            <div style={styles.swatch} onClick={handleClick}>
                <div style={styles.color} />
            </div>
            {displayPicker &&
                <SketchPicker color={colorVal} onChange={handleColorChange} />
            }
        </div>
    </>

}