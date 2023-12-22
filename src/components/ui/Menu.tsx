import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaStickyNote,
} from "react-icons/fa";
import useMenuAnimation from "../hooks/useMenuAnimation";
import font from "../../styles/NextFont";

export const Component = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <StyledNav
      className="menu"
      ref={scope}
    >
      <StyledButton
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className={font.roboto.className}
      >
        News/Blog
        <StyledContainer
          className="arrow"
          style={{ transformOrigin: "50% 55%" }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 20 20"
          >
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </StyledContainer>
      </StyledButton>
      <StyledUl
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        }}
      >
        <StyledLi>
          <StyledLink
            href="https://www.instagram.com/mi2__pic/?hl=ja"
            target="_blank"
            className={font.roboto.className}
          >
            <FaInstagram />
            Instagram
          </StyledLink>
          <Hr />
        </StyledLi>
        <StyledLi>
          <StyledLink
            href="https://www.linkedin.com/in/mitsuhiro-okada"
            target="_blank"
            className={font.roboto.className}
          >
            <FaLinkedin />
            Linkedin
          </StyledLink>
          <Hr />
        </StyledLi>
        <StyledLi>
          <StyledLink
            href="https://twitter.com/mi2__user"
            target="_blank"
            className={font.roboto.className}
          >
            <FaTwitter />
            Twitter
          </StyledLink>
          <Hr />
        </StyledLi>
        <StyledLi>
          <StyledLink
            href="https://note.com/mitsuhiro_3232"
            target="_blank"
            className={font.roboto.className}
          >
            <FaStickyNote />
            Note
          </StyledLink>
          <Hr />
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  z-index: 100;
  position: fixed;
  width: 200px;
  bottom: 0;
  left: 1rem;
`;

const StyledContainer = styled.div``;

const StyledButton = styled(motion.button)`
  background: #54a2c0;
  opacity: 0.8;
  color: white;
  width: 200px;
  height: 75px;
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  border: none;
`;

const StyledUl = styled.ul`
  padding: 16px;
  width: 100%;
  height: 200px;
  list-style: none;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledLi = styled.li`
  display: block;
  transform-origin: -20px 50%;
  text-align: left;
  color: black;
`;

const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;

  &:hover {
    color: #000;
    text-decoration: none;
  }

  svg {
    margin-right: 8px;
  }
`;

const Hr = styled.hr`
  border-width: 0 0 0.5px;
  border-image: linear-gradient(
      90deg,
      hsla(0, 0%, 35%, 0),
      hsla(0, 0%, 35%, 0.5) 15%,
      hsla(0, 0%, 35%, 0) 35%
    )
    0 0 100%;
  border-style: solid;
`;
