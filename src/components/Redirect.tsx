import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 24px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const Redirect = () => {
  const { code } = useParams<{ code: string }>();

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await axios.get(`/${code}`);
        window.location.href = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    fetchUrl();
  }, [code]);

  return <Container>Redirecting...</Container>;
};

export default Redirect;
