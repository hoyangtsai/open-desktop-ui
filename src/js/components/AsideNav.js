import React from 'react';
import { Link } from 'react-router'

import 'css/_aside-nav';

class AsideNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="aside-nav">
        <div className="aside-nav-index">
          <Link to="/">ZC Desktop UI</Link>
        </div>
        <ul className="aside-nav-portal">
          <li className="aside-nav-entry">
            <Link to="/button">按鈕</Link>
          </li>
          <li className="aside-nav-entry">
            <Link to="/spacing">间距</Link>
          </li>
        </ul>
      </div>
    )
  }
};

export default AsideNav;
