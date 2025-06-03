import React from "react";
import aboutImage from "../assets/images/About.png";

const About = () => {
  return (
    <div className="text-gray-800 pt-[111px]">
      {/* Hero Section */}
      <div
        className="h-[20vh] sm:h-[30vh] lg:h-[60vh] relative shadow-md bg-contain bg-center flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <h1 className="text-md sm:text-2xl md:text-4xl font-bold bg-opacity-50 px-6 py-2 rounded">
          Growing Together with Nature
        </h1>
      </div>

      {/* Our Story */}
      <section className="px-6 py-10 md:px-14">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg leading-relaxed">
          Founded with a deep respect for farmers and their contribution to
          society, our mission is to make quality seeds, tools, and knowledge
          accessible to every cultivator. We aim to revolutionize agriculture
          through sustainable practices, innovation, and a commitment to
          excellence.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-green-100 px-6 py-10 md:px-14">
        <div className="grid md:grid-cols-2 gap-8 px-4">
          <div className="text-center max-w-xl">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="max-w-lg">
              To empower farmers with high-quality agricultural inputs and
              up-to-date guidance, enabling them to increase yields and improve
              livelihoods sustainably.
            </p>
          </div>
          <div className="text-center max-w-xl">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="max-w-lg">
              A future where agriculture is both profitable and sustainable, and
              where every farmer has the resources they need to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>
            Provide premium-quality seeds for vegetables, legumes, and cereals
          </li>
          <li>Offer seasonal guidance and best farming practices</li>
          <li>Support sustainable and organic farming techniques</li>
          <li>Deliver products across India to farmers’ doorsteps</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-6 text-lg">
            <p>✔ Trusted by 10,000+ farmers across India</p>
            <p>✔ Scientifically tested and certified seeds</p>
            <p>✔ Excellent customer support and farming tips</p>
            <p>✔ Transparent pricing and guaranteed quality</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center bg-green-500 text-white py-8">
        <h3 className="text-2xl font-bold mb-2">Ready to Grow?</h3>
        <p className="mb-4">
          Explore our range of products tailored for every season and crop.
        </p>
        <a
          href="/product"
          className="bg-white text-green-600 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition"
        >
          Browse Products
        </a>
      </div>
    </div>
  );
};

export default About;
