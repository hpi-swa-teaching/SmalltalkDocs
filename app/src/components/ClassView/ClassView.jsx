import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getAllMethodsOf, getClass } from '../../utils/apiHandler';
import './ClassView.css';

const ClassView = ({ currentClass }) => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState('');
  const [hasClassComment, setHasClassComment] = useState(false);
  const [classComment, setClassComment] = useState('');

  useEffect(() => {
    const simpleFetch = async () => {
      const methodsResponse = await getAllMethodsOf(currentClass);
      const classResponse = await getClass(currentClass);
      setCount(methodsResponse.count.total);
      setHasClassComment(classResponse.hasClassComment);
      setClassComment(classResponse.classComment);
      setLoading(false);
    };
    simpleFetch();
  }, [currentClass]);

  return (
    <div>
      <h1>{currentClass}</h1>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="description">
          <h3>This class has a total of {count} methods.</h3>
        </div>
      )}
      {hasClassComment ? (
        <div className="comment">
          <p className="commentText">{classComment}</p>
        </div>
      ) : null}
    </div>
  );
};

export default ClassView;

ClassView.propTypes = {
  currentClass: PropTypes.string.isRequired
};
