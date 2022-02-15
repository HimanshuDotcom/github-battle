import { useState } from "react";

const _styles = {
    container : {
        position: 'relative',
        zIndex: '5',

    },
    tip : {
        fontSize: '12px',
        padding: '5px 15px',
        position: 'absolute',
        border: '1px solid green',
        // top: '-20px',
        bottom: '100%',
        left: '50px',
        backgroundColor: 'rgba(0,0,0,.7)',
        color: 'white',
        fontWeight: 'lighter',
        textAlign: 'center',
        // zIndex: '0',
    }
}

function Tooltip({msg,children}) {
    const [hover,setHover] = useState(false);

    return (
        <div 
            onMouseOver={() => setHover(true)} 
            onMouseOut = {() => setHover(false)} 
            style = {_styles.container}
        >
            {hover && <div style={_styles.tip}>{msg}</div>}
            {children}

        </div>
    )

}

export default Tooltip;