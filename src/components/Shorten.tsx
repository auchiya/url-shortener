import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ThemeSwitch from './ThemeSwitch';

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

const Title = styled.h1`
  font-size: 2.5em;
  color: #007bff;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 1000px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const Shorten = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('/shorten', { url });
      setShortUrl(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ThemeSwitch />
      <Container>
        <Title>Link.Trim()</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
          />
          <Button type="submit">Shorten</Button>
        </Form>
        {shortUrl && <p>Short URL: {shortUrl}</p>}
      </Container>
    </>
  );
};

export default Shorten;
