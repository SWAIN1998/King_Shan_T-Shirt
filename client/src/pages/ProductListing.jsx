import React from "react";
import Filter from "../components/Filter/Filter";
import Search from "../components/Search/Search";
import Product from "../components/Product/Product";
import styles from "./ProductListing.module.css";

const ProductListing = () => {
  return (
    <div>
      <div className={styles.rowContainer}>
        <Filter />
      </div>
      <div className={styles.colContainer}>
        <Search />
        <Product />
      </div>
    </div>
  );
};

export default ProductListing;
