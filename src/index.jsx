import React, { useState } from "react";
import arrow from "./angle-arrow-down.png";
// import styled from "styled-components";
import PropTypes from "prop-types";

const SelectItem = ({ annotationRanges }) => {
  const [option, setOption] = useState("");
  const [selected, setSelected] = useState(false);

  const toggleArrow = () => {
    const arrow = document.querySelector(".selectItem__field--img");
    arrow.classList.toggle("rotate");
  };

  const toggleList = () => {
    const list = document.querySelector(".selectItem__list");
    list.classList.toggle("hide");
    toggleArrow();
  };
  return (
    <div className="selectItem">
      <div
        id="selectField"
        className="selectItem__field"
        onClick={() => {
          toggleList();
        }}
      >
        <p id="selectText">
          {selected === false ? "Select your choice" : option}
        </p>
        <img
          className="selectItem__field--img"
          src={arrow}
          alt="Fleche ouverture du select"
        />
      </div>
      <ul className="selectItem__list hide">
        {annotationRanges.map((unit) => (
          <li
            className="selectItem__list--option"
            onClick={() => {
              setOption(unit.name);
              setSelected(true);
              toggleList();
            }}
            key={unit.abbreviation}
          >
            <p>{unit.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
SelectItem.propTypes = {
  annotationRanges: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      abbreviation: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export { SelectItem };
