import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shorten from './components/Shorten';
import Redirect from './components/Redirect';
import { ThemeProvider } from './ThemeProvider';
import { createGlobalStyle, styled } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

const Author = styled.div`
  position: fixed;
  left: 5px;
  bottom: 20px;
  font-size: 14px;
  color: ${(props) => props.theme.color};
`;

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/:code" element={<Redirect />} />
          <Route path="/" element={<Shorten />} />
        </Routes>
      </Router>
      <Author>aUchiya</Author>
    </ThemeProvider>
  )
}

export default App
