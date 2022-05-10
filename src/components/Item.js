import React, { useEffect } from 'react';
import Container from "./Container";
import { sendSearch } from '../lib/honeycomb';

const Item = ({ searchTerm }) => {
  useEffect(() => {
    sendSearch(searchTerm);
  }, [searchTerm])
  return (
    <div>
      <h2>{searchTerm} Pictures</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
