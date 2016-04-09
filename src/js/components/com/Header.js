import React from 'react';
import { Link } from 'react-router'

import 'css/com/_header';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="header">
        <div className="layout">
          <h2><Link to="/">Open Desktop UI</Link></h2>
          <div className="nav">
            <ul>
              <li className="has-sub">
                <h2><Link to="/button">按鈕</Link></h2>
              </li>
              <li className="has-sub">
                <h2><Link to="/form">表单</Link></h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
};

export default Header;
