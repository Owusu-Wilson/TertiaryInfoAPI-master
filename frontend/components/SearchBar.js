import React, { Component } from "react";

import styles from "./Search.module.css";
import { Close, PersonSearch, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const SearchBar = ({ onChange, value }) => {

  return (
    <div className={styles.container}>
      <Search fontSize="medium" />
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Search by the title ..."
        />
        {/* <IconButton >
          <Close />
        </IconButton> */}
      </div>
    </div>
  );
};

export default SearchBar;
