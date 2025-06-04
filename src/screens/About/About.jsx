
import aboutImage from "../../assets/images/About.png";
import { Player } from "@lottiefiles/react-lottie-player";
import farmAnimation from "../../assets/animations/Animation - 1749016395698.json";
import OurMissionModel from "./OurMissionModel";

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
      <section className="px-6 py-12 md:px-14 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 py-4">
          {/* Lottie Animation */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="bg-green-100 p-6 rounded-xl shadow-md">
              <Player
                src={farmAnimation}
                autoplay
                loop
                style={{ height: "250px", width: "250px" }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
              Our Story
            </h2>
            <p className="leading-relaxed text-justify text-base px-1">
              With deep respect for the agricultural community, our mission is
              to empower cultivators by delivering premium seeds, advanced
              tools, and expert knowledge. We are committed to driving
              agricultural transformation through sustainability, innovation,
              and service excellence.
              <br />
              <br />
              Our goal is to foster resilient farming practices that protect the
              environment while maximizing yield and profitability. By embracing
              cutting-edge technology and traditional wisdom, we strive to build
              a future where every farmer thrives and rural communities flourish
              with opportunity and dignity.
            </p>
          </div>
        </div>
      </section>

     <OurMissionModel/>

      {/* What We Do */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>
            Provide premium-quality seeds for vegetables, legumes, and cereals
          </li>
          <li>Offer seasonal guidance and best farming practices</li>
          <li>Support sustainable and organic farming techniques</li>
          <li>Deliver products across India to farmers' doorsteps</li>
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
