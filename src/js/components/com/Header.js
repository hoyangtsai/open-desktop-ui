import React from 'react';

import 'css/com/_header';

                // <span class="arrow"></span>
                // <div class="sub">
                //   <ul>
                //     <li><a href="">移动应用接入</a></li>
                //     <li><a href="">网页应用接入</a></li>
                //     <li><a href="">智能硬件</a></li>
                //     <li><a href="">资料库</a></li>
                //   </ul>
                // </div>
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="layout">
          <h1><a href="index.html" title="腾讯开放平台">腾讯开放平台</a></h1>
          <div className="nav">
            <ul>
              <li className="has-sub">
                <h2><a href="">按鈕</a></h2>
              </li>
              <li className="has-sub">
                <h2><a href="">文字</a></h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
};

export default Header;
