import React from 'react';

import AsideNav from './com/AsideNav';

class Index extends React.Component {
  render() {
    return (
      <div>
        <AsideNav />
        <div className="main-cont">
          <h1 className="index-header">首页</h1>
        </div>
      </div>
    )
  }
};

export default Index;
