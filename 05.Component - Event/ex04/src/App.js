import React, {useRef} from 'react';
import logo from './assets/images/react-logo.png';

export default function App() {
    const imgRef = useRef(null);
    
    return (
        <>
            <h2>Event Handler 예제</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyDown={onKeyDownInput}
                onKeyUp={onKeyUpInput}
                onChange={onChangeInput}
                onFocus={onFocusInput}
                onBlur={onBlurInput} />
            <br/>
            <br/>
            <img
                ref={imgRef}
                style={{
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                }}
                src={logo}
                onMouseOver={onMouseOverImg}
                onMouseMove={onMouseMoveImg}
                onMouseOut={onMouseOutImg}
                onMouseDown={onMouseDownImg}
                onMouseUp={onMouseUpImg}
                onClick={onClickImg}
                onDoubleClick={onDoubleClickImg}/>
        </>
    );
}