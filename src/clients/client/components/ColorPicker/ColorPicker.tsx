import React, { useState } from 'react';
import { SketchPicker, ColorChangeHandler, ColorResult } from 'react-color';

export const ColorPicker: React.FC<{ colorStr: string, onColorChange: (c: string) => void }> = ({ colorStr, onColorChange }) => {
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
            background: `${colorStr}`,
        },
        swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
            marginLeft: '5px'
        }
    }

    const colorStringFromInp = (txt: string) => {
        if (txt == undefined || txt == null) {
            return null
        }
        const clrStr = txt.trim()
        if (txt == "" || txt == "null") {
            return null
        }
        return clrStr
    }

    return <>
        <div>
            <input type='text' value={colorStr} onChange={(ev) => { onColorChange(colorStringFromInp(ev.target.value)) }} />
            <div style={styles.swatch} onClick={handleClick} className={'align-middle'}>
                <div style={styles.color} />
            </div>
            {displayPicker &&
                <SketchPicker color={colorStr} onChange={handleColorChange} />
            }
        </div>
    </>

}