import React from 'react';
import AsideNav from './com/AsideNav';

import 'css/com/_aside-nav';
import 'css/com/_button';

import ButtonSpec from 'img/design-spec/button.png';

var btnDemo = {
  marginRight: '8px'
};

        // <div className="btn-spec-wrap">
        //   <img src={ButtonSpec} alt="button spec" />
        // </div>
        //


var btnCode = '<a href="" className="ui-button">正常按钮</a>' +
    '<a href="" className="ui-button ui-button-primary">突出</a>' +
    '<a href="" className="ui-button ui-button-suc">重点突出</a>';

class Button extends React.Component {
  render() {
    return (
      <div className="layout">
        <AsideNav />
        <h3>代码演示</h3>
        <div>
            <a href="" className="ui-button" style={btnDemo}>正常按钮</a>
            <a href="" className="ui-button ui-button-primary" style={btnDemo}>幽灵按钮</a>
            <a href="" className="ui-button ui-button-suc" style={btnDemo}>强调按钮</a>
            <pre>
            <code className="language-javascript">
              {btnCode}
            </code>
            </pre>
        </div>
        <div>
          <h2>一般按钮</h2>
          <a href="" className="ui-button ui-button-primary">一般按钮</a>
        </div>
        <div>
          <h2>重点突出按钮</h2>
          <a href="" className="ui-button ui-button-suc">重点突出</a>
        </div>
      </div>
    )
  }
};

export default Button;
