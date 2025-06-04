import { GiBullseye } from "react-icons/gi";
import { FaEye, FaHandsHelping } from "react-icons/fa";

const model = [
  {
    id: 1,
    icon: <GiBullseye className="text-green-600 text-4xl mb-4" />,
    title: "Our Mission",
    description:
      "To empower farmers with high-quality agricultural inputs and up-to-date guidance, enabling them to increase yields and improve livelihoods sustainably.",
  },
  {
    id: 2,
    icon: <FaEye className="text-green-600 text-4xl mb-4" />,
    title: "Our Vision",
    description:
      "A future where agriculture is profitable, sustainable, and innovative. Every farmer has the tools, knowledge, and support needed to grow and thrive.",
  },
  {
    id: 3,
    icon: <FaHandsHelping className="text-green-600 text-4xl mb-4" />,
    title: "Our Values",
    description:
      "We believe in integrity, always acting with honesty and strong ethics. Our commitment to sustainability drives us to promote eco-friendly practices that protect the land for future generations.",
  },
];

const OurMissionModel = () => {
  return (
    <section className="bg-green-100 px-6 py-10 md:px-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {model.map((item) => (
          <div key={item.id} className="text-center max-w-lg mx-auto">
            <div className="flex flex-col items-center">{item.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>

            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMissionModel;
