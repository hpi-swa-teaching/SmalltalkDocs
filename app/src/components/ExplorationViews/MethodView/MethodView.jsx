import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';
import { getMethodInfo, getMethodText } from '../../../utils/BackendHandling/apiHandler';
import './MethodView.css';

const MethodView = ({ currentClass, site, currentMethod }) => {
  const [loading, setLoading] = useState(true);
  const [methodText, setMethodText] = useState('');
  const [hasPrecodeComment, setHasPrecodeComment] = useState(false);
  const [precodeComment, setPrecodeComment] = useState('');

  useEffect(() => {
    const simpleFetch = async () => {
      const methodResponse = await getMethodInfo(currentClass, site, currentMethod);
      const methodTextResponse = await getMethodText(currentClass, site, currentMethod);
      // console.log(methodResponse);
      setMethodText(methodTextResponse);
      setHasPrecodeComment(methodResponse.hasPrecodeComment);
      setPrecodeComment(methodResponse.precodeComment);
      setLoading(false);
    };
    simpleFetch();
  }, [currentClass, site, currentMethod]);

  return (
    <div>
      <h1>{currentMethod}</h1>

      {hasPrecodeComment ? (
        <div className="comment">
          {' '}
          <p>{precodeComment}</p>{' '}
        </div>
      ) : null}

      <div className="code">
        {loading ? (
          <LoadingIndicator />
        ) : (
          <SyntaxHighlighter language="smalltalk" style={docco}>
            {methodText}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  );
};

export default MethodView;

MethodView.propTypes = {
  currentClass: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  currentMethod: PropTypes.string.isRequired
};
