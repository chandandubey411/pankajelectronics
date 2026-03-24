import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-10 py-10">
      <div className="max-w-6xl mx-auto">

        {/* ================= HEADING ================= */}
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">
          About <span className="text-[#12DAAA]">New Pankaj Electronics</span>
        </h1>

        {/* ================= INTRO ================= */}
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          <strong>New Pankaj Electronics</strong> is a trusted electronics and home
          appliance store located in <strong>Shahdara, Sector 141, Noida</strong>.
          We specialize in providing high-quality electronics, home appliances,
          and smart devices at competitive prices with reliable after-sales
          support.
        </p>

        {/* ================= OUR MISSION ================= */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to make the latest technology easily accessible to
            every household. We focus on honest pricing, genuine products,
            professional guidance, and long-term customer relationships.
          </p>
        </div>

        {/* ================= WHAT WE OFFER ================= */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            What We Offer
          </h2>

          <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
            <li>✔ Televisions & Accessories</li>
            <li>✔ Home Appliances</li>
            <li>✔ Mobile Phones & Wearables</li>
            <li>✔ Laptops, Tablets & Computers</li>
            <li>✔ Audio & Video Products</li>
            <li>✔ Cameras & Smart Devices</li>
            <li>✔ Gaming Consoles & Accessories</li>
          </ul>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="bg-zinc-900 p-4 rounded-lg">
              ✔ Assembly & Installation Service
            </div>
            <div className="bg-zinc-900 p-4 rounded-lg">
              ✔ Same-Day Delivery Available
            </div>
            <div className="bg-zinc-900 p-4 rounded-lg">
              ✔ Genuine Brand Warranty Products
            </div>
            <div className="bg-zinc-900 p-4 rounded-lg">
              ✔ Expert Buying Assistance
            </div>
          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Us
          </h2>

          <ul className="space-y-2 text-gray-300">
            <li>✔ Trusted local store with loyal customers</li>
            <li>✔ Competitive pricing with transparent deals</li>
            <li>✔ Friendly and knowledgeable staff</li>
            <li>✔ Quick service and reliable support</li>
            <li>✔ Convenient location in Noida</li>
          </ul>
        </div>

        {/* ================= CTA ================= */}
        <div className="bg-zinc-900 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <p className="text-lg mb-4 md:mb-0">
            Visit our store or contact us for the best deals on electronics.
          </p>
          <a
            href="/contact"
            className="bg-[#12DAAA] text-black px-6 py-2 rounded font-semibold hover:opacity-90"
          >
            Contact Us
          </a>
        </div>

      </div>
    </div>
  );
};

export default About;
