import React from 'react';

import AsideNav from './com/AsideNav';
import 'css/com/_aside-nav';
import 'css/com/_button';

import ButtonSpec from 'img/design-spec/button.png';

class Button extends React.Component {
  render() {
    return (
      <div className="layout">
        <AsideNav />
        <div className="btn-spec-wrap">
          <img src={ButtonSpec} alt="button spec" />
        </div>
        <div>
            <a href="" className="ui-button">正常按钮</a>
            <a href="" className="ui-button ui-button-primary">突出</a>
            <a href="" className="ui-button ui-button-suc">重点突出</a>
            <a href="" className="ui-button">很多文字时候的样子</a>
            <a href="" className="ui-button disabled">不可用状态</a>
            <a href="" className="ui-button ui-button-small">小按钮</a>
            <a href="" className="ui-button ui-button-small ui-button-primary">小按钮</a>
            <a href="" className="ui-button ui-button-small ui-button-suc">小按钮</a>
            <div className="ui-button ui-button-primary mt10">整块都是按钮</div>
        </div>
        <div>
          <h2>无样式按钮</h2>
          <a href="" className="ui-button">无样式</a>
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
