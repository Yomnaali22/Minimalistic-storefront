import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import API from "./../../api";
import { categoriesNamesQuery } from "../../Queries";
// Logos
import GreenLogo from "./../../assets/Logo.svg";
import CartIcon from "./../../assets/Cart.svg";
import ArrowIcon from "./../../assets/Victor.svg";
// Styles
import {
  Header,
  Actions,
  Content,
  LogoIcon,
  DropdownWrapper,
  Nav,
} from "./Navigation.styles";
// Components
import CartOverlay from "../../components/CartOverlay/CartOverlay";
import CurrencyDropdown from "../../components/CurrencyDropdown/CurrencyDropdown";

export default class Navigation extends Component {
  state = {
    dropdown: false,
    openOverlay: false,
    categoriesNames: [],
    categoryIndex: localStorage.getItem("categoryIndex"),
  };

  // Show or hide overlay
  setOverlay(boolean) {
    this.setState({
      openOverlay: boolean,
    });
  }

  async componentDidMount() {
    try {
      const categoriesNames = await API.getData(categoriesNamesQuery);
      this.setState({
        categoriesNames: [...categoriesNames.data.data.categories],
      });
    } catch (error) {
      console.log("error", error);
    }
    if (!localStorage.getItem("categoryIndex")) {
      localStorage.setItem("categoryIndex", 0);
    }

    // Close the overlay or currencies on scroll
    window.addEventListener("scroll", () => {
      const { openOverlay, dropdown } = this.state;
      if (openOverlay || dropdown) {
        this.setOverlay(false);
        this.setState({
          dropdown: false,
        });
      }
    });
  }
  render() {
    const { categoriesNames, dropdown, openOverlay } = this.state;
    const currencies = this.props.currencies;
    const setCurrency = this.props.setCurrency;
    // Selected currency index
    const selectedCurrencyIndex = localStorage.getItem("currency");
    // Selected Category name index
    const categoryindex = localStorage.getItem("categoryIndex");
    const name =
      categoriesNames[categoryindex] && categoriesNames[categoryindex].name;

    // want to buy products
    const selectedProducts = JSON.parse(
      localStorage.getItem("SelectedProducts")
    );

    const productsQuantity =
      selectedProducts &&
      selectedProducts.reduce((total, curr) => {
        return total + curr.productAmount;
      }, 0);

    return (
      <Header dropdown={dropdown}>
        <LogoIcon src={GreenLogo} className="greenIcon" />
        <Nav>
          {categoriesNames.map((category, index) => {
            const categoryName = category.name;
            return (
              <Link
                key={categoryName}
                to={`/${categoryName === "all" ? "" : categoryName}`}
                className="nav-link"
                key={categoryName}
                onClick={() => {
                  return this.setState({
                    category_Name: localStorage.setItem("categoryIndex", index),
                  });
                }}
              >
                <Content
                  category_name={name}
                  categoriesNames={categoriesNames}
                  index={index}
                >
                  {categoryName}
                </Content>
              </Link>
            );
          })}
        </Nav>
        <Actions>
          <button>
            {productsQuantity ? (
              <div className="cartlogo">{productsQuantity}</div>
            ) : null}
            <img
              src={CartIcon}
              onClick={() => this.setOverlay(!openOverlay)}
              className="cart"
            />
            <img src={ArrowIcon} className="victorIcon" />
            <p
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => this.setState({ dropdown: !dropdown })}
            >
              {
                // Currency change to the selected one
                currencies[selectedCurrencyIndex] &&
                currencies[selectedCurrencyIndex].symbol
                  ? currencies[selectedCurrencyIndex].symbol
                  : "$"
              }
            </p>
          </button>
          <DropdownWrapper dropdown={!dropdown} isOpen={!openOverlay}>
            {
              // Show currencies
              dropdown ? (
                <CurrencyDropdown
                  currencies={currencies}
                  setCurrency={setCurrency.bind(this)}
                  dropdown={dropdown}
                  openOverlay={openOverlay}
                />
              ) : null
            }
          </DropdownWrapper>

          {
            // Show Overlay
            openOverlay && (
              <CartOverlay className="overlay" isopen={openOverlay} />
            )
          }
        </Actions>
        <Outlet />
      </Header>
    );
  }
}
