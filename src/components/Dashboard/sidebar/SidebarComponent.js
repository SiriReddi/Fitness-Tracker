import React from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import { BrowserRouter, Route, Link } from "react-router-dom";
import LogoComponent from "./LogoComponent";
import MenuItemComponent from "./MenuItemComponent";
import FoodLog from "../../../pages/FoodLog";
import "./images1.png";
// import IconOverview from "../../assets/icon-overview.js";
// import IconTickets from "../../assets/icon-tickets.js";
// import IconIdeas from "../../assets/icon-ideas.js";
// import IconContacts from "../../assets/icon-contacts";
//import IconAgents from "../../../assets/icon-agents";
// import IconArticles from "../../assets/icon-articles";
// import IconSettings from "../../assets/icon-settings";
// import IconSubscription from "../../assets/icon-subscription";
// import IconBurger from "../../../assets/icon-burger";

const styles = StyleSheet.create({
  burgerIcon: {
    cursor: "pointer",
    position: "absolute",
    left: 24,
    top: 34
  },
  container: {
    backgroundImage:
      "linear-gradient(to right top, #1f1d1e, #261c24, #2a1c2c, #2b1d37, #262043, #1c2245, #102445, #002645, #002438, #01202a, #0b1b1e, #121515)",
    width: 255,
    paddingTop: 32,
    height: "calc(100% - 32px)"
  },
  containerMobile: {
    transition: "left 0.5s, right 0.5s",
    position: "absolute",
    width: 255,
    height: "calc(100% - 32px)",
    zIndex: 901
  },
  mainContainer: {
    height: "100%",
    minHeight: "100vh"
  },
  mainContainerMobile: {
    position: "absolute",
    top: 0,
    left: 0
  },
  mainContainerExpanded: {
    width: "100%",
    minWidth: "100vh"
  },
  menuItemList: {
    marginTop: 52
  },
  outsideLayer: {
    position: "absolute",
    width: "100vw",
    minWidth: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.50)",
    zIndex: 900
  },
  image: {
    marginLeft: "20%",
    marginTop: "5%",
    borderRadius: "40px",
    border: "1px solid lightpink"
  },
  appname: {
    marginLeft: "10%",
    color: "lightgrey",
    fontStyle: "italic"
  },
  separator: {
    borderTop: "1px solid #DFE0EB",
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06
  },

  hide: {
    left: -255
  },
  show: {
    left: 0
  }
});

class SidebarComponent extends React.Component {
  state = { expanded: false };

  onItemClicked = item => {
    this.setState({ expanded: false });
    return this.props.onChange(item);
  };

  isMobile = () => window.innerWidth <= 768;

  toggleMenu = () =>
    this.setState(prevState => ({ expanded: !prevState.expanded }));

  renderBurger = () => {
    return (
      <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
        {/* <IconBurger /> */}
      </div>
    );
  };

  render() {
    const { expanded } = this.state;
    const isMobile = this.isMobile();
    return (
      <div style={{ position: "relative" }}>
        <Row
          className={css(styles.mainContainer)}
          breakpoints={{
            768: css(
              styles.mainContainerMobile,
              expanded && styles.mainContainerExpanded
            )
          }}
        >
          {isMobile && !expanded && this.renderBurger()}
          <Column
            className={css(styles.container)}
            breakpoints={{
              768: css(
                styles.containerMobile,
                expanded ? styles.show : styles.hide
              )
            }}
          >
            {/* <LogoComponent /> */}
            <div>
              <img
                width="100"
                height="100"
                src={require("./images1.png")}
                className={css(styles.image)}
              />
            </div>
            <h2 className={css(styles.appname)}> Fitness Tracker </h2>
            <Column className={css(styles.menuItemList)}>
              <Link to="/Dashboard" style={{ textDecoration: "none" }}>
                <MenuItemComponent
                  title="Dashboard"
                  // icon={IconOverview}
                  onClick={() => this.onItemClicked("Dashboard")}
                  active={this.props.selectedItem === "Dashboard"}
                />
              </Link>
              <Link to="/Goals" style={{ textDecoration: "none" }}>
                <MenuItemComponent
                  title="Goals"
                  // icon={IconContacts}
                  onClick={() => this.onItemClicked("Goals")}
                  active={this.props.selectedItem === "Goals"}
                />
              </Link>
              <Link to="/Food-Dairy" style={{ textDecoration: "none" }}>
                <MenuItemComponent
                  title="Nutrition"
                  // icon={IconTickets}
                  onClick={() => this.onItemClicked("Nutrition")}
                  active={this.props.selectedItem === "Nutrition"}
                />
              </Link>
              <Link to="/Exercise" style={{ textDecoration: "none" }}>
                <MenuItemComponent
                  title="Exercise"
                  // icon={IconIdeas}
                  onClick={() => this.onItemClicked("Exercise")}
                  active={this.props.selectedItem === "Exercise"}
                />
              </Link>

              <div className={css(styles.separator)}></div>
              <Link to="/Video" style={{ textDecoration: "none" }}>
                <MenuItemComponent
                  title="Recommended Videos"
                  // icon={IconAgents}
                  onClick={() => this.onItemClicked("Videos")}
                  active={this.props.selectedItem === "Videos"}
                />
              </Link>
            </Column>
          </Column>
          {isMobile && expanded && (
            <div
              className={css(styles.outsideLayer)}
              onClick={this.toggleMenu}
            ></div>
          )}
        </Row>
      </div>
    );
  }
}

export default SidebarComponent;
