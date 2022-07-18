import React, { useState, createContext, ReactNode, useContext } from 'react';

interface IThemeContext {
    dark: boolean;
    day: {syntax:string, ui: string, bg: string, input: string},
    night: {syntax:string, ui: string, bg: string, input: string},
    toggleDark?: () => void
  }
  
  const defaultState = {
    dark: false,
    day: { syntax:'#555', ui: '#ddd', bg: '#eee', input: '#fff'},
    night: { syntax:'#ddd', ui: '#333', bg: '#555', input: '#777' }
  };
  
  const ThemeContext = createContext<IThemeContext>(defaultState);

export const ThemeProvider = ({ children }: {children: ReactNode}) => {
  const [dark, setDark] = useState(defaultState.dark);
  const [day, setDay] = useState (defaultState.day)
  const [night, isNight] = useState (defaultState.night)

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        day,
        night,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () =>  useContext(ThemeContext);
