import React, { Component } from "react";
// Styles
import { Wrapper } from "./Dropdown.styles";

export default class Dropdown extends Component {
  render() {
    const { setCurrency, currencies, dropdown, openOverlay } = this.props;
    return currencies ? (
      <Wrapper>
        <ul className={`${dropdown && openOverlay ? "dropdown" : ""}`}>
          {currencies.map((currency, index) => {
            return (
              <li onClick={() => setCurrency(index)} key={index}>
                <a
                  href=""
                  onClick={(e) => e.preventDefault()}
                >{`${currency.symbol} ${currency.label}`}</a>
              </li>
            );
          })}
        </ul>
      </Wrapper>
    ) : null;
  }
}
