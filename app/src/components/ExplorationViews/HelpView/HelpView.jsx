import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getContentOfBook } from '../../../utils/BackendHandling/apiHandler';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';

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
      {loading ? <LoadingIndicator /> : null}
      <code>{content}</code>
    </div>
  );
};

export default HelpView;

HelpView.propTypes = {
  bookName: PropTypes.string.isRequired
};
