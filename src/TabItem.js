import React from 'react';

class TabItem extends React.Component {

  render() {

    return (
      <li>
        {
          this.props.children
        }
      </li>
    )
  }
}

export default TabItem;