import React from 'react';

import Header from './com/Header';
import 'css/com/_button';

class Button extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="ui-box-item">
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
      </div>
    )
  }
};

export default Button;
