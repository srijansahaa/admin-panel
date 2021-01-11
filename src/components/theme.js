import React, {useState} from 'react';

function Theme() {
    const [darkTheme, setDarkTheme] = useState(false)
    console.log(darkTheme)

    return (
        <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}>
            Toggle Theme
        </button>
    )
}

export default Theme