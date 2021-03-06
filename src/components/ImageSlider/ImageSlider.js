import React, { Component } from "react";
import { Button, ButtonWrapper, Img } from "./ImageSlider.styles";
export default class ImageSlider extends Component {
  state = { index: 0 };
  // Next Image
  nextSlide = () => {
    const { images } = this.props;
    const { index } = this.state;
    this.setState({
      index: index === images.length - 1 ? 0 : index + 1,
    });
  };
  // Previous Image
  prevSlide = () => {
    const { images } = this.props;
    const { index } = this.state;
    this.setState({ index: index === 0 ? images.length - 1 : index - 1 });
  };
  render() {
    const { images } = this.props;
    const { index } = this.state;
    return (
      <>
        <Img src={images[index]} />
        {images.length !== 1 && (
          <ButtonWrapper>
            <Button
              onClick={(e) => {
                e.preventDefault();
                this.nextSlide();
              }}
            >
              {`>`}
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                this.prevSlide();
              }}
            >
              {`<`}
            </Button>
          </ButtonWrapper>
        )}
      </>
    );
  }
}
