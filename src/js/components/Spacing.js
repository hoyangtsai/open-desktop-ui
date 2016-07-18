import React from 'react';
import AsideNav from './AsideNav';

import 'css/g';
import 'css/com/_form';

class Spacing extends React.Component {
  render() {
    return (
      <div>
        <AsideNav />
        <div className="main-cont">
          <h3>表单</h3>
          <div className="mod-form-card">
            <div className="mod-form-head">
              <h4 className="caption">客服信息</h4>
            </div>
            <div className="mod-form-body">
              <div className="form-row">
                <div className="form-tit">
                  <label>客服电话<span className="require">*</span></label>
                </div><div className="form-cont">
                  <div className="form-col">
                    <input type="text" className="ui-input default-input-width" placeholder="请输入" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Spacing;
