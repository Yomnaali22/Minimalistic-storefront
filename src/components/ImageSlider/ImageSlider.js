import React, { Component } from "react";
import { Button } from "./ImageSlider.styles";
export default class ImageSlider extends Component {
  state = { index: 0 };
  render() {
    const { images } = this.props;
    const { index } = this.state;
    return (
      <>
        <img src={images[index]} />
        <Button
          href=""
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              index: index < images.length - 1 ? index + 1 : 0,
            });
          }}
        >
          {`>`}
        </Button>
        <Button
          href=""
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              index: index < images.length + 1 && index !== 0 ? index - 1 : 0,
            });
          }}
        >
          {`<`}
        </Button>
      </>
    );
  }
}
