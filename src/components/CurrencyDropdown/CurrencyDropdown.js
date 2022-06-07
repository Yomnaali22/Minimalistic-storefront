import React, { Component } from "react";
// Styles
import { List, ListItems, Item } from "./CurrencyDropdown.styles";

export default class CurrencyDropdown extends Component {
  render() {
    const { setCurrency, currencies, dropdown, openOverlay } = this.props;
    return (
      currencies && (
        <>
          <List className={`${dropdown && openOverlay ? "dropdown" : ""}`}>
            {
              // Rendering Currencies
              currencies.map((currency, index) => {
                return (
                  <ListItems onClick={() => setCurrency(index)} key={index}>
                    <Item
                      href=""
                      onClick={(e) => e.preventDefault()}
                    >{`${currency.symbol} ${currency.label}`}</Item>
                  </ListItems>
                );
              })
            }
          </List>
        </>
      )
    );
  }
}
