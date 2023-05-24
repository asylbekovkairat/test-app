import React, { useRef } from "react";
import { Container, Navbar } from "react-bootstrap";
import styles from "./aside-menu.module.scss";
import userProfileIcon from "../../../assets/images/user-profile-icon.svg";
import { Link } from "react-router-dom";

const AsideMenu = ({ handleToggleMenu, isMenuOpen }) => {
  const menuOverlayRef = useRef(null);
  const handleOverlayClick = (event) => {
    if (event.target === menuOverlayRef.current) {
      handleToggleMenu();
    }
  };
  return (
    <>
      {isMenuOpen && (
        <section
          className={styles.overlay}
          onClick={handleOverlayClick}
          ref={menuOverlayRef}
        >
          <aside
            className={styles.aside}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.profileInfo}>
              <img src={userProfileIcon} alt="User Profile Logo" />
              <div>
                <p>username</p>
                <p>useremail</p>
              </div>
            </div>
            <hr />
            <Navbar>
              <Container>
                <Link to={"/"}>Список постов</Link>
              </Container>
            </Navbar>
            <Navbar>
              <Container>
                <Link to={"/about-me"}>Обо мне</Link>
              </Container>
            </Navbar>
          </aside>
        </section>
      )}
    </>
  );
};

export default AsideMenu;
