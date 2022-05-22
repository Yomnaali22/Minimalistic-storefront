import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import API from "./../../api";
import { categoriesNamesQuery } from "../../Queries";
// Icons
import GreenLogo from "./../../assets/Logo.svg";
import CartIcon from "./../../assets/Cart.svg";
import ArrowIcon from "./../../assets/Victor.svg";
// Styles
import { Header, LogoContainer, Content, LogoIcon } from "./Navigation.styles";
// Components
import CartOverlay from "../../components/CartOverlay/CartOverlay";
import Dropdown from "../../components/Dropdown/Dropdown";

export default class Navigation extends Component {
  state = {
    categoriesNames: [],
    open: false,
    dropdown: false,
    categoryIndex: localStorage.getItem("categoryIndex"),
  };

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
  }

  render() {
    const { categoriesNames, dropdown, open } = this.state;
    const { setOverlay, isOpen } = this.props;
    const currencies = this.props.currencies;
    const setCurrency = this.props.setCurrency;
    // Selected currency index
    const index = localStorage.getItem("currency");
    const categoryindex = localStorage.getItem("categoryIndex");
    const name =
      categoriesNames[categoryindex] && categoriesNames[categoryindex].name;
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
        <LogoContainer isOpen={!isOpen} dropdown={!dropdown}>
          <p
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => {
              this.setState({
                dropdown: !dropdown,
                open: !open,
              });
            }}
          >
            {
              // Currency change to the selected one
              (currencies[index] && currencies[index].symbol) || "$"
            }
            <img src={ArrowIcon} className="victorIcon" />
          </p>
          <div className="dropdown">
            {dropdown ? (
              <Dropdown
                currencies={currencies}
                setCurrency={setCurrency.bind(this)}
                dropdown={dropdown}
                isOpen={open}
              />
            ) : null}
          </div>
          <img
            src={CartIcon}
            isOpen={isOpen}
            onClick={() => setOverlay(!isOpen)}
          />
          {
            // Show Overlay
            isOpen && <CartOverlay className="overlay" isOpen={isOpen} />
          }
        </LogoContainer>
        <Outlet />
      </Header>
    );
  }
}
