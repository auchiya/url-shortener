import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shorten from './components/Shorten';
import Redirect from './components/Redirect';
import { ThemeProvider } from './ThemeProvider';
import { createGlobalStyle, styled } from 'styled-components';
import ShortenedUrlList from './components/ShortenedUrlList';
import ThemeSwitch from './components/ThemeSwitch';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  padding: 0 20px;
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
      <Container>
        <Router>
          <Routes>
            <Route path="/:code" element={<Redirect />} />
            <Route path="/list" element={<ShortenedUrlList />} />
            <Route path="/" element={<Shorten />} />
          </Routes>
        </Router>
        <Author>aUchiya</Author>
        <ThemeSwitch />
      </Container>
    </ThemeProvider>
  )
}

export default App
