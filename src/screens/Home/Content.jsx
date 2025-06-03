import Image from "../../assets/images/agri.webp";

const Content = () => {
  return (
    <>
      <div className="py-10 px-6 md:px-14">
        <h1 className="text-center font-bold text-3xl">
          Welcome to Ganga Seeds – Growing the Future of Agriculture
        </h1>
        <div className="flex pt-10">
          <img
            src={Image}
            alt={Image}
            className="w-full md:w-1/2 h-80 py-6 object-cover"
          />

          <div className="py-6 w-full md:w-1/2 pl-10">
            <h2 className="font-semibold text-2xl">
              Nurturing Farms. Enriching Lives.
            </h2>
            <p className="pt-2 leading-relaxed text-justify">
              At <strong>Ganga Seeds</strong>, we are driven by a singular vision — to empower
              farmers and transform the agricultural landscape of India through
              cutting-edge innovation, uncompromising quality, and a steadfast
              commitment to sustainability. 
              <br/>
              <br/>
              For over 4 years, we
              have stood alongside the farming community, understanding their
              challenges, responding to their needs, and offering dependable
              solutions that work in the real world. Our journey is rooted in
              deep agricultural expertise, scientific research, and a passion
              for growth — not just of crops, but of livelihoods, communities,
              and the nation's food security.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
