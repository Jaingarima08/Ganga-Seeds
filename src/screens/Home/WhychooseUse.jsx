import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faTruck, faFlask } from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    id: 1,
    icon: faSeedling,
    title: "High-Quality Certified Seeds",
    description:
      "We offer a wide range of scientifically tested and government-certified seeds tailored to diverse climates and soil conditions.",
  },
  {
    id: 2,
    icon: faTruck,
    title: "Timely Delivery Across India",
    description:
      "Our logistics network ensures prompt delivery, helping farmers receive seeds exactly when needed for optimal cultivation.",
  },
  {
    id: 3,
    icon: faFlask,
    title: "Research-Backed Products",
    description:
      "Our seeds are developed through rigorous research and trials to ensure higher yield and resilience against pests and diseases.",
  },
];

const WhychooseUse = () => {
  return (
    <div className="px-6 ">
      <h1 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className=" p-6 text-center"
          >
            <div className="text-green-600 text-4xl mb-4">
              <FontAwesomeIcon icon={feature.icon} />
            </div>
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhychooseUse;
