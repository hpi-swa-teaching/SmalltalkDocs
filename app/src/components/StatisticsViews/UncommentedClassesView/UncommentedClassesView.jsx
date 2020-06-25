import React, {useState} from 'react';
import './UncommentedClassesView.css';

const UncommentedClassesView = () => {
  const [uncommentedClasses, setUncommentedClasses] = useState([]);

  return (<div>
    <h1>Uncommented Classes</h1>
  </div>);
};

export default UncommentedClassesView;
