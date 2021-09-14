import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            margin: '0 auto',
            width: '100%',
            maxWidth: '80%',
            padding: '0 10px',
            userSelect: 'none',
            '&:hover': {
                backgroundColor: '#f5f5f5',
            },
        }}>
            <button
                style={{
                    margin: '0.5rem',
                    backgroundColor: "transparent",
                    borderRadius: "10%",
                    cursor: 'pointer',
                    transition: 'all 0.8s ease-in-out',
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
                }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'dark' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" style={{ height: "2em", width: "2em" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" style={{ height: "2em", width: "2em" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                )}
            </button >
        </div>
    );
};

export default ThemeToggle;