import React from 'react';
import AsideNav from './AsideNav';

import 'css/g';
import 'css/com/_button';

import ButtonSpec from 'img/design-spec/button.png';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/styles';

let defaultMg = {
  marginRight: '12px'
}
let smallMg = {
  marginRight: '8px'
}
let mt = {
  marginTop: '20px'
}

let btnStr = '<a href="" className="ui-button" style={defaultMg}>正常按钮</a>\
            <a href="" className="ui-button ui-button-primary" style={defaultMg}>幽灵按钮</a>\
            <a href="" className="ui-button ui-button-fill" style={defaultMg}>填充按钮</a>';

class Button extends React.Component {
  render() {
    return (
      <div>
        <div className="main-cont">
            <AsideNav />
            <div className="zc-ui-demo-box">
              <div className="zc-ui-demo-row">
                <h3>按钮样式</h3>
                <a href="" className="ui-button" style={defaultMg}>正常按钮</a>
                <a href="" className="ui-button ui-button-primary" style={defaultMg}>幽灵按钮</a>
                <a href="" className="ui-button ui-button-fill" style={defaultMg}>填充按钮</a>
                <SyntaxHighlighter language="html" style={monokai}>
                  {btnStr}
                </SyntaxHighlighter>
              </div>
              <div className="zc-ui-demo-row">
                <h3>按钮尺寸</h3>
                <a href="" className="ui-button ui-button-primary" style={defaultMg}>默认按钮</a>
                <a href="" className="ui-button ui-button-primary ui-button-small" style={defaultMg}>小按钮</a>
                <div className="ui-button ui-button-primary" style={mt}>整块都是按钮</div>
              </div>
              <div className="zc-ui-demo-row">
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
              <div className="zc-ui-demo-row">
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
              <div className="zc-ui-demo-row">
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
              <div className="zc-ui-demo-imgdoc">
                <h3>按钮规范文件</h3>
                <img src={ButtonSpec} alt="button spec"/>
              </div>
            </div>

        </div>
      </div>
    )
  }
};

export default Button;
