import Image from "../../assets/images/agri.webp";

const Content = () => {
  return (
    <section className="py-10 px-6 md:px-14">
      <h1 className="text-center font-bold text-2xl sm:text-3xl my-6">
        Welcome to Ganga Seeds – Growing the Future of Agriculture
      </h1>

      <div className="flex flex-col md:flex-row gap-8 my-2 items-center">
        {/* Image */}
        <img
          src={Image}
          alt="Ganga Seeds"
          className="w-full md:w-1/2 h-30 sm:h-50 md:h-65 object-cover rounded-md shadow"
          loading="lazy"
        />

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="font-semibold text-xl sm:text-2xl mb-2">
            Nurturing Farms. Enriching Lives.
          </h2>
          <p className="leading-relaxed text-justify text-gray-700">
            At <strong>Ganga Seeds</strong>, we are driven by a singular vision — to empower
            farmers and transform the agricultural landscape of India through
            cutting-edge innovation, uncompromising quality, and a steadfast
            commitment to sustainability.
            <br />
            <br />
            For over 4 years, we have stood alongside the farming community,
            understanding their challenges, responding to their needs, and
            offering dependable solutions that work in the real world. Our
            journey is rooted in deep agricultural expertise, scientific
            research, and a passion for growth — not just of crops, but of
            livelihoods, communities, and the nation's food security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
