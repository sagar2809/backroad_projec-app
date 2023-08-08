import React from "react";

import Title from "./Title";
import { tourData } from "../data";
import Tour from "./utility/Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <Title title="featured" subTitle="tours"></Title>
      </div>

      <div className="section-center featured-center">
        {tourData.map((item) => {
          return <Tour {...item} key={item.id}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
