import React from 'react';

import AsideNav from './AsideNav';

class Index extends React.Component {
  render() {
    return (
      <div className="main-cont">
        <AsideNav />
        <h1 className="index-header">首页</h1>
      </div>
    )
  }
};

export default Index;
