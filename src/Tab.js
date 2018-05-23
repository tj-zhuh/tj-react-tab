import React from 'react';
import TabItem from './TabItem.js';

class Tab extends React.Component {

  render() {

    let { children, selectedIndex } = this.props;

    return (
      <div className="tj-react-tab">
        <ul className="tj-react-tab-bar">
          {
            React.Children.map(children, (child, index) => {
              if (child.type !== TabItem) return null;    
              let isActive = index === selectedIndex;
              let classNameObj = isActive ? { className: 'active' } : {};

              return (
                <li
                  {...classNameObj}
                  onClick={e => {
                    if (!isActive) {
                      this.onClickHeader(index);
                    }
                  }}
                >
                  {child.props.header}
                </li>
              )
            })
          }
        </ul>
        <ul className="tj-react-tab-body">
          {
            React.Children.map(this.props.children, (child, index) => {
              if (child.type !== TabItem) return null;
              let isActive = index === selectedIndex;
              let classNameObj = isActive ? { className: 'active' } : {};

              return (
                <li
                  {...classNameObj}                 
                >
                  {child.props.children}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }

  onClickHeader(index) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(index);
    }
  }
}

export default Tab;