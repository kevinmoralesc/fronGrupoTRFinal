import React, { useState, useEffect } from 'react';
import HeaderMain from "./HeaderMain";
import { GalleryWithCarousel } from "./CarrouselMain";
import ContactForm from "./ContactForm";
import FooterMain from './FooterMain';

const MainMenu = ({ onClickLogin, onClickRegister }) => {
  const onClickLoginMain = (state) => {
    onClickLogin(state);
  };

  const onClickRegisterMain = (state) => {
    onClickRegister(state);
  };

  const [componentToShow, setComponentToShow] = useState("Home");

  const onClickNavigate = () => {
    setComponentToShow("contactForm")
  }

  return (
    <><HeaderMain
      onClickLogin={onClickLoginMain}
      onClickRegister={onClickRegisterMain}
      onClickNavigate={onClickNavigate} />
      <GalleryWithCarousel />
      {componentToShow === "contactForm" && (
          <ContactForm/>
        )}
      <FooterMain/>
      </>
  );
};

export default MainMenu;
