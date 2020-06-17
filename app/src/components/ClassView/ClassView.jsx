import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getAllMethodsOf, getClass } from '../../utils/apiHandler';
import './ClassView.css';

const ClassView = ({ currentClass }) => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState('');
  const [hasClassComment, setHasClassComment] = useState(false);
  const [classComment, setClassComment] = useState('');

  useEffect(() => {
    const simpleFetch = async () => {
      const methodsResponse = await getAllMethodsOf(currentClass);
      const classResponse = await getClass(currentClass);
      setContent(methodsResponse.count.total);
      setHasClassComment(classResponse.hasClassComment);
      setClassComment(classResponse.classComment);
      setLoading(false);
    };
    simpleFetch();
  }, [currentClass]);

  return (
    <div>
      <h1>{currentClass}</h1>
      <div className="comment">{hasClassComment ? <p>{classComment}</p> : null}</div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="description">
          <h2>This class has a total of {content} methods</h2>
        </div>
      )}
    </div>
  );
};

export default ClassView;

ClassView.propTypes = {
  currentClass: PropTypes.string.isRequired
};
