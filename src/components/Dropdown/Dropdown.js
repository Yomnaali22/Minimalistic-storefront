import React, { Component } from "react";

import { Wrapper } from "./Dropdown.styles";

export default class Dropdown extends Component {
  render() {
    const { setCurrency, currencies, dropdown, isOpen } = this.props;
    return currencies ? (
      <Wrapper>
        <ul className={`${dropdown && isOpen ? "dropdown" : ""}`}>
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
