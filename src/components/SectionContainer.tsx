import React, { Component, PropsWithChildren } from "react";

interface SectionContainerProps extends PropsWithChildren<any> {
  padding?: string;
}

export class SectionContainer extends Component<SectionContainerProps, {}> {
  render() {
    const { padding = "py-24 px-5", children } = this.props;
    return <div className={`container ${padding} mx-auto`}>{children}</div>;
  }
}

export default SectionContainer;
