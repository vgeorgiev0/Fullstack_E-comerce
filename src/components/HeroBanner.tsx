/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { urlFor } from "lib/client";
import { BannerData } from "types";

interface HeroBannerProps {
  heroBanner: BannerData;
}
const HeroBanner: React.FC<HeroBannerProps> = ({ heroBanner }) => {
  const { smallText, midText, largeText1, image, product, buttonText, desc } =
    heroBanner;
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img
          src={urlFor(image).url()}
          alt="headphones"
          className="hero-banner-image"
        />

        <div>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
