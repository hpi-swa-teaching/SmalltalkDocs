import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getAllMethodsOf } from '../../utils/apiHandler';
import './ClassView.css';

const ClassView = ({ currentClass }) => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');

  useEffect(() => {
    const simpleFetch = async () => {
      const methodsResponse = await getAllMethodsOf(currentClass);
      setContent(methodsResponse.count.total);
      setLoading(false);
    };
    simpleFetch();
  }, [currentClass]);

  return (
    <div>
      <h1>{currentClass}</h1>
      {loading ? <CircularProgress /> : <div class = "description">This class has a total of {content} methods</div>}
    </div>
  );
};

export default ClassView;

ClassView.propTypes = {
  currentClass: PropTypes.string.isRequired
};
