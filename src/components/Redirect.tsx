import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Redirect = () => {
  const { code } = useParams<{ code: string }>();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await axios.get(`/${code}`);
        window.location.href = response.data;
      } catch (error) {
        console.error(error);
        navigate('/');
      }
    };

    fetchUrl();
  }, [code, navigate]);

  return <>Redirecting...</>;
};

export default Redirect;
