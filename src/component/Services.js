import React from "react";
import Title from "./Title";
import { services } from "../data";
import { Service } from "./utility/ServiceMap";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <Title title="our" subTitle="services"></Title>
      </div>
      <div className="section-center services-center">
        {services.map((item) => {
          return <Service {...item} key={item.id}></Service>;
        })}
      </div>
    </section>
  );
};

export default Services;
