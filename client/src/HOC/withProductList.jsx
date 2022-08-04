import React from "react";

const withProductList = (Component) => (props) => {
  return React.Children.map(Component(), (child) => {
    const listItem = child.props.children.props.children;
    return React.Children.map(listItem, (childItems) => {
      return React.cloneElement(childItems);
    });
  });
};

export default withProductList;
