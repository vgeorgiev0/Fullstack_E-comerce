import React from "react";
import { Product, FooterBanner, HeroBanner } from "@/components";
import { client } from "../../lib/client";
import { BannerData, ProductType } from "types";
interface HomeProps {
  products: ProductType[];
  bannerData: BannerData[];
}

const Home: React.FC<HomeProps> = ({ bannerData, products }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData[0]} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product: ProductType) => (
          <Product
            product={product}
            productID={product._id}
            key={product._id}
          />
        ))}
      </div>

      <FooterBanner footerBannerData={bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == 'product']`;
  const products = await client.fetch(query);
  const bannerQuery = `*[_type == 'banner']`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
