import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ThemeSwitch from './ThemeSwitch';
import { Link } from 'react-router-dom';

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

export const LinkTo = styled(Link)`
 color:${(props) => props.theme.color};;
 margin: 10px;
&:hover,
&:focus{
    color: ${(props) => props.theme.color};;
}
&:active{
    color: red;
};
`

const Shorten = () => {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const isValidUrl = (urlInput: string) => {
    try {
      new URL(urlInput);
    } catch (_) {
      return false;
    }
    return true;
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (url === '') {
      alert('URL cannot be empty');
    } else if (!isValidUrl(url)) {
      alert('URL is not valid');
    } else {
      try {
        const response = await axios.post('/shorten', { url });
        setShortUrl(`${window.location.origin}/${response.data.code}`);
      } catch (error) {
        console.error(error);
      }
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
        {shortUrl && <p>Short URL: <LinkTo to={shortUrl} target='_blank'>{shortUrl}</LinkTo></p>}
      </Container>
    </>
  );
};

export default Shorten;
