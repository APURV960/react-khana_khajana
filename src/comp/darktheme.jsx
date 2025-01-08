import React, { useState, useEffect } from "react";

const DarkThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggles the theme
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        // Apply dark mode based on the saved preference (if any)
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        // Save theme preference to localStorage
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <div
            className="bg-gray-800 text-white px-3 w-12 h-7 rounded-full hover:bg-gray-700 duration-300 cursor-pointer flex items-center justify-center"
            onClick={toggleTheme}
        >
            {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.66-8.66h-1m-16.32 0H3m12.73-7.27l-.73.73m0 12.73l.73.73m-9.19-9.19l-.73.73m12.73 0l.73-.73M12 12a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12.41A8.66 8.66 0 0112.41 20 8.66 8.66 0 014 12.41 8.66 8.66 0 0112.41 4 8.66 8.66 0 0120 12.41z" />
                </svg>
            )}
        </div>
    );
};

export default DarkThemeToggle;
