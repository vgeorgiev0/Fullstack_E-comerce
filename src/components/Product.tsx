import React from "react";
import { ProductType } from "types";

interface ProductProps {
  product: ProductType;
  productID: string;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return <div>Product</div>;
};

export default Product;
