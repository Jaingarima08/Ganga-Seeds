import React from "react";

const Contact = () => {
  return (
    <div className=" pt-[80px] sm:pt-[100px] md:pt-[111px]">
      <h2 className="bg-green-100 text-3xl font-bold text-green-600 text-center py-12">
        Reach Us – Because Every Harvest Matters.
      </h2>

       <div className="bg-green-50 px-6 md:px-14 py-10">
      <p className=" text-gray-700 mx-auto mb-10">
       Whether you're a farmer aiming for a better yield, a distributor seeking reliable supply, or an agriculture enthusiast passionate about innovation—
  <strong> GangaSeeds is here to support your journey</strong>.<br /><br />
  With decades of experience in seed research, development, and distribution, we provide more than just certified, high-yielding seeds—we deliver trust, expertise, and timely service across India.<br /><br />
  <strong>From field to future</strong>, our team is dedicated to helping you grow smarter, faster, and more sustainably.<br /><br />
  <strong>Reach out today</strong> and discover how GangaSeeds can become your partner in transforming agriculture for the better.
</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">📍 Our Office Address</h3>
          <p className="text-gray-700 mb-4">
            <strong>GangaSeeds Pvt. Ltd.</strong><br />
            Plot No. 12, Green Agri Park,<br />
            Nagpur Highway, Wardha – 442001,<br />
            Maharashtra, India
          </p>

          <h3 className="text-2xl font-semibold text-green-700 mb-2">📞 Call Us</h3>
          <p className="text-gray-700 mb-4">
            Phone: +91 9876543210<br />
            Alternate: +91 9123456789
          </p>                                  
  
          <h3 className="text-2xl font-semibold text-green-700 mb-2">📧 Email Us</h3>
          <p className="text-gray-700">
            General Inquiries: info@gangaseeds.com<br />
            Support: support@gangaseeds.com
          </p>
        
        </div>

        {/* Google Map */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            title="GangaSeeds Location"
            src="https://www.google.com/maps?q=Green%20Agri%20Park,%20Nagpur%20Highway,%20Wardha&output=embed"
            width="100%"
            height="100%"
            className="w-full h-96 border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
