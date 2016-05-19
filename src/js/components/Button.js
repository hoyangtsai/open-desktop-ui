import React from 'react';
import AsideNav from './com/AsideNav';

import 'css/g';
import 'css/com/_button';

import ButtonSpec from 'img/design-spec/button.png';

var defaultMg = {
  marginRight: '12px'
}
var smallMg = {
  marginRight: '8px'
}
var mt = {
  marginTop: '20px'
}

class Button extends React.Component {
  render() {
    return (
      <div>
        <AsideNav />
        <div className="main-cont">
            <div className="ui-box-item">
              <h3>按钮样式</h3>
              <a href="" className="ui-button" style={defaultMg}>正常按钮</a>
              <a href="" className="ui-button ui-button-primary" style={defaultMg}>幽灵按钮</a>
              <a href="" className="ui-button ui-button-fill" style={defaultMg}>填充按钮</a>
            </div>
            <div className="ui-box-item">
              <h3>按钮尺寸</h3>
              <a href="" className="ui-button ui-button-primary" style={defaultMg}>默认按钮</a>
              <a href="" className="ui-button ui-button-primary ui-button-small" style={defaultMg}>小按钮</a>
              <div className="ui-button ui-button-primary" style={mt}>整块都是按钮</div>
            </div>
            <div className="ui-box-item">
              <h3>按钮状态</h3>
              <ul>
                <li>
                  <a href="" className="ui-button ui-button" style={defaultMg}>可点击按钮</a>
                  <a href="" className="ui-button ui-button disabled" style={defaultMg}>不可点击按钮</a>
                </li>
                <li style={mt}>
                  <a href="" className="ui-button ui-button-primary" style={defaultMg}>可点击按钮</a>
                  <a href="" className="ui-button ui-button-primary disabled" style={defaultMg}>不可点击按钮</a>
                </li>
                <li style={mt}>
                  <a href="" className="ui-button ui-button-fill" style={defaultMg}>可点击按钮</a>
                  <a href="" className="ui-button ui-button-fill disabled" style={defaultMg}>不可点击按钮</a>
                </li>
              </ul>
            </div>
            <div className="ui-box-item">
              <h3>按钮组合</h3>
              <ul>
                <li>
                  <a href="" className="ui-button ui-button-fill" style={defaultMg}>保存</a>
                  <a href="" className="ui-button ui-button-primary" style={defaultMg}>取消</a>
                </li>
                <li style={mt}>
                  <a href="" className="ui-button ui-button-primary" style={defaultMg}>保存</a>
                  <a href="" className="ui-button ui-button" style={defaultMg}>取消</a>
                </li>
              </ul>
            </div>
            <div className="ui-box-item">
              <h3>按钮间距</h3>
              <ul>
                <li>
                  <a href="" className="ui-button ui-button-primary" style={defaultMg}>保存</a>
                  <a href="" className="ui-button ui-button-primary" style={defaultMg}>取消</a>
                </li>
                <li style={mt}>
                  <a href="" className="ui-button ui-button-primary ui-button-small" style={smallMg}>保存</a>
                  <a href="" className="ui-button ui-button-primary ui-button-small" style={smallMg}>取消</a>
                </li>
              </ul>
            </div>
            <div className="btn-spec-wrap">
              参照：<a href={ButtonSpec} target="_blank">按钮规范</a>
            </div>
        </div>
      </div>
    )
  }
};

export default Button;
