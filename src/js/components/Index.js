import React from 'react';
import Header from './com/Header';
import AsideNav from './com/AsideNav';

class Index extends React.Component {
  render() {
    return (
      <div className="main-container">
        <AsideNav />
        <div className="layout">
          <h1 className="index-header">首页</h1>
        </div>
      </div>
    )
  }
};

export default Index;
