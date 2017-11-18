import React, { Component } from 'react';

export default class Breadcrumb extends Component {
  updateBreadcrumbArray(insertion, arr) {
    return arr.reduce((newArr, member, i, arr) =>
      i < arr.length - 1
        ? newArr.concat(member, insertion)
        : newArr.concat(member),
      []
    );
  }

  render() {
    const { breadcrumb } = this.props;
    const str = this.updateBreadcrumbArray(' :: ', breadcrumb);

    return (
      <div className="breadcrumb">{str}</div>
    );
  }
};
