import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import styled from "styled-components";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #2196f3;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + ${Slider}::before {
    transform: translateX(26px);
  }
`;

const SwitchWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <SwitchWrapper>
      <Switch>
        <Checkbox
          type="checkbox"
          checked={theme === "light"}
          onChange={toggleTheme}
        />
        <Slider />
      </Switch>
    </SwitchWrapper>
  );
};

export default ThemeSwitch;
