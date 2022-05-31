import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import API from "./../../api";
import { categoriesNamesQuery } from "../../Queries";
// Icons
import GreenLogo from "./../../assets/Logo.svg";
import CartIcon from "./../../assets/Cart.svg";
import ArrowIcon from "./../../assets/Victor.svg";
// Styles
import {
  Header,
  LogoContainer,
  Content,
  LogoIcon,
  DropdownWrapper,
} from "./Navigation.styles";
// Components
import CartOverlay from "../../components/CartOverlay/CartOverlay";
import Dropdown from "../../components/Dropdown/Dropdown";

export default class Navigation extends Component {
  state = {
    dropdown: false,
    openOverlay: false,
    categoriesNames: [],
    categoryIndex: localStorage.getItem("categoryIndex"),
  };

  // Overlay of the mini cart
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

    window.addEventListener("scroll", () => {
      if (this.state.openOverlay) {
        this.setOverlay(false);
      }
    });
  }
  render() {
    const { categoriesNames, dropdown, openOverlay } = this.state;
    const currencies = this.props.currencies;
    const setCurrency = this.props.setCurrency;
    // Selected currency index
    const index = localStorage.getItem("currency");
    const categoryindex = localStorage.getItem("categoryIndex");
    const name =
      categoriesNames[categoryindex] && categoriesNames[categoryindex].name;

    const selectedProducts = JSON.parse(
      localStorage.getItem("SelectedProducts")
    );
    const productsQuantity =
      selectedProducts &&
      selectedProducts.reduce((total, curr) => {
        return total + curr.productAmount;
      }, 0);

    return (
      <Header>
        <LogoIcon src={GreenLogo} className="greenIcon" />
        {
          // Category names
          categoriesNames.map((category, index) => {
            const categoryName = category.name;
            return (
              <Content
                key={categoryName}
                category_name={name}
                categoriesNames={categoriesNames}
                index={index}
              >
                <Link
                  onClick={() => {
                    this.setState({
                      category_Name: localStorage.setItem(
                        "categoryIndex",
                        index
                      ),
                    });
                  }}
                  to={`/${categoryName === "all" ? "" : categoryName}`}
                  className="nav-link"
                >
                  {categoryName}
                </Link>
              </Content>
            );
          })
        }
        <LogoContainer>
          <button>
            <p
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => {
                this.setState({
                  dropdown: !dropdown,
                });
              }}
            >
              {
                // Currency change to the selected one
                (currencies[index] && currencies[index].symbol) || "$"
              }
            </p>
          </button>
          <DropdownWrapper dropdown={!dropdown} isOpen={!openOverlay}>
            <img src={ArrowIcon} className="victorIcon" />

            {dropdown ? (
              <Dropdown
                currencies={currencies}
                setCurrency={setCurrency.bind(this)}
                dropdown={dropdown}
                openOverlay={openOverlay}
              />
            ) : null}
          </DropdownWrapper>
          {productsQuantity ? (
            <div className="cartlogo">{productsQuantity}</div>
          ) : null}
          <img src={CartIcon} onClick={() => this.setOverlay(!openOverlay)} />
          {
            // Show Overlay
            openOverlay && (
              <CartOverlay className="overlay" isopen={openOverlay} />
            )
          }
        </LogoContainer>
        <Outlet />
      </Header>
    );
  }
}
