import React from 'react';
import { useParams } from 'react-router';
import ClassView from '../../components/ClassView/ClassView';

import HelpView from '../../components/HelpView/HelpView';
import MethodSidebar from '../../components/Sidebars/MethodSidebar/MethodSidebar';
import MethodView from '../../components/MethodView/MethodView';
import './ExplorationView.css';

const ExplorationView = options => {
  const pathParams = useParams();

  const doExploreClass = () => options.mode === 'class';
  const doExploreMethod = () => options.mode === 'method';
  const doExploreBook = () => options.mode === 'help';

  function setBarVisibility(isVisible) {
        if(isVisible){
            document.getElementById("main1").style.marginLeft = "417px";
            document.getElementById("main2").style.marginLeft = "417px";
            document.getElementById("main3").style.marginLeft = "417px";
        }
        else{
            document.getElementById("main1").style.marginLeft = "50px";
            document.getElementById("main2").style.marginLeft = "50px";
            document.getElementById("main3").style.marginLeft = "50px";
        }
  }

  return (
    <div>
      <div>
        {'currentClass' in pathParams ? (
          <MethodSidebar setBar={setBarVisibility.bind(this)} currentClass={pathParams.currentClass} />
        ) : null}
      </div>

      <div id="main1" className="main">
        {doExploreClass() ? <ClassView currentClass={pathParams.currentClass} /> : null}
      </div>

      <div id="main2" className="main">
        {doExploreMethod() ? (
          <MethodView
            currentClass={pathParams.currentClass}
            site={pathParams.site}
            currentMethod={pathParams.currentMethod}
          />
        ) : null}
      </div>

      <div id="main3" className="main">
        {doExploreBook() ? (
          <HelpView bookName={pathParams.currentClass} className="helpBox" />
        ) : null}
      </div>
    </div>
  );
};

export default ExplorationView;
