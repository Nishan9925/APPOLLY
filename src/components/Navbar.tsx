import { useState, useEffect } from "react";
import {
  BurgerMenu,
  MobileMenu,
  NavbarLink,
  NavbarLogo,
  NavbarLogoWrapper,
  NavBarWrapper,
  NavbarWrapper,
} from "../assets/styles/NavbarStyles/navbar";
import logo from "../assets/icons/logo.png";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 890);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 890);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <NavBarWrapper>
      {isMobile ? (
        <>
          <BurgerMenu onClick={() => setMenuOpen(!menuOpen)}>
            <div />
            <div />
            <div />
          </BurgerMenu>
          {menuOpen && (
            <MobileMenu>
              <NavbarLink>HOME</NavbarLink>
              <NavbarLink>ABOUT</NavbarLink>
              <NavbarLink>FEATURES</NavbarLink>
              <NavbarLink>SCREENSHOT</NavbarLink>
              <NavbarLink>BLOG</NavbarLink>
            </MobileMenu>
          )}
          <NavbarLogoWrapper>
            <NavbarLogo src={logo} />
          </NavbarLogoWrapper>
          <NavbarLink variant="download">DOWNLOAD</NavbarLink>
        </>
      ) : (
        <>
          <NavbarLink>HOME</NavbarLink>
          <NavbarLink>ABOUT</NavbarLink>
          <NavbarLink>FEATURES</NavbarLink>
          <NavbarLogoWrapper>
            <NavbarLogo src={logo} />
          </NavbarLogoWrapper>
          <NavbarLink>SCREENSHOT</NavbarLink>
          <NavbarLink>BLOG</NavbarLink>
          <NavbarLink variant="download">DOWNLOAD</NavbarLink>
        </>
      )}
    </NavBarWrapper>
  );
}

export default Navbar;

