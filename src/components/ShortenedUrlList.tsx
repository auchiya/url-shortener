import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const UrlList = styled.div`
  width: 100%;
  max-width: 600px;
`;

const UrlItem = styled.div`
  background: ${(props) => props.theme.background};
  padding: 10px;
  margin: 10px 0;
  color: ${(props) => props.theme.color};
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

const ShortenedUrlList = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    axios.get('/list')
      .then(response => {
        setUrls(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Shortened URLs</h1>
      <UrlList>
        {urls.map((url: { longUrl: string, code: string, alias: string }, index) => (
          <UrlItem key={index}>
            <p>
              <strong>Original URL:</strong>
              <LinkTo to={url.longUrl} target='_blank' rel="noopener noreferrer">{url.longUrl}</LinkTo>
            </p>
            <p>
              <strong>Shortened URL:</strong>
              <LinkTo to={`/${url.code}`} target='_blank' rel="noopener noreferrer">{`${window.location.origin}/${url.code}`}</LinkTo>
            </p>
            <p>
              <strong>Shortened Alias URL:</strong>
              <LinkTo to={`/${url.alias}`} target='_blank' rel="noopener noreferrer">{`${window.location.origin}/${url.alias}`}</LinkTo>
            </p>
          </UrlItem>
        ))}
      </UrlList>
    </div>
  );
};

export default ShortenedUrlList;
