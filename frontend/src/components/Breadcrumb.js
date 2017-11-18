import React, { Component } from 'react';

export default class Breadcrumb extends Component {
  updateBreadcrumb(insertion, arr) {
    return arr.reduce((newArr, member, i, arr) =>
      i < arr.length - 1
        ? newArr.concat(member, insertion)
        : newArr.concat(member),
      []
    );
  }

  render() {
    const { breadcrumb } = this.props;
    const str = this.updateBreadcrumb(' :: ', breadcrumb);

    return (
      <div className="breadcrumb">{str}</div>
    );
  }
};
