// display dark mode toggle

// get local storage 
let darkMode = localStorage.getItem('darkMode');
// create dark mode enable function

const darkModeEnable = () => {
    localStorage.setItem('darkMode', 'dark');
    // class add
    document.body.classList.add('dark');
}

const darkModeDisable = () => {
    localStorage.setItem('darkMode', 'light');
    // class add
    document.body.classList.remove('dark');
}
// display save 
if (darkMode === 'dark') {
    darkModeEnable();
}

// button click event dark mode toggle

const darkThem = () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'dark') {
        darkModeEnable();
        document.getElementById('darkLight').innerText = 'Light';
    } else {
        darkModeDisable();
        document.getElementById('darkLight').innerText = 'Dark';
    }
}