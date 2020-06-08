import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getContentOfBook } from '../../utils/apiHandler';

const HelpView = ({ bookName }) => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');

  useEffect(() => {
    const simpleFetch = async () => {
      setContent(await getContentOfBook(bookName));
      setLoading(false);
    };
    simpleFetch();
  }, [bookName]);

  return (
    <div>
      <h1>{bookName}</h1>
      {loading ? <CircularProgress /> : null}
      <div>{content}</div>
    </div>
  );
};

export default HelpView;

HelpView.propTypes = {
  bookName: PropTypes.string.isRequired
};
