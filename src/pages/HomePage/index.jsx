import React, { useState } from "react";
import Header from "../../components/Header";
import AsideMenu from "../../components/Header/AsideMenu";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <>
      <Header handleToggleMenu={handleToggleMenu} />
      <AsideMenu handleToggleMenu={handleToggleMenu} isMenuOpen={isMenuOpen} />
    </>
  );
};

export default HomePage;
