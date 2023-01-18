/* eslint-disable @next/next/no-img-element */
import { urlFor } from "lib/client";
import Link from "next/link";
import React from "react";
import { ProductType } from "types";

interface ProductProps {
  product: ProductType;
  productID: string;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { slug, name, price, image } = product;

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0]).url()}
            width={250}
            height={250}
            alt={name}
            className="product-image"
          />
          <p className="product.name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
