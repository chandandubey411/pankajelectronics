import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-10 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* ================= LEFT: CONTACT INFO ================= */}
        <div>
          <h1 className="text-3xl font-semibold mb-4">
            Contact <span className="text-[#12DAAA]">Us</span>
          </h1>

          <p className="text-gray-300 mb-4">
            <strong>New Pankaj Electronics</strong><br />
            Appliance store in Noida, Uttar Pradesh
          </p>

          <div className="space-y-3 text-gray-300">
            <p>
              <strong>📍 Address:</strong><br />
              SH 23, 1st Floor, Reet Square,<br />
              Shahdara, Sector 141,<br />
              Noida, Uttar Pradesh 201304
            </p>

            <p>
              <strong>📞 Phone:</strong><br />
              +91 98219 00257
            </p>

            <p>
              <strong>🛠 Service Options:</strong><br />
              Assembly Service · Same-day Delivery
            </p>

            <p>
              <strong>⏰ Store Hours:</strong><br />
              Monday – Sunday: 11:00 AM – 9:00 PM
            </p>
          </div>

        </div>

        {/* ================= RIGHT: CONTACT FORM ================= */}
        <div className="bg-zinc-900 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">
            Send us a message
          </h2>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-4"
          >
            {/* 🔑 WEB3FORMS ACCESS KEY */}
            <input
              type="hidden"
              name="access_key"
              value="YOUR_WEB3FORMS_ACCESS_KEY"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 bg-black border border-zinc-700 rounded outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              required
              className="w-full px-4 py-2 bg-black border border-zinc-700 rounded outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 bg-black border border-zinc-700 rounded outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-4 py-2 bg-black border border-zinc-700 rounded outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#12DAAA] text-black py-2 rounded font-semibold hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-6 rounded-lg overflow-hidden border border-zinc-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1777787.3298280255!2d75.6885215938205!3d29.509337265927215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce99cd86c39bb%3A0x80954fcaf3872b99!2sNew%20Pankaj%20Electronics%2C%20Shahdara%2C%20Sector%20141!5e0!3m2!1sen!2sin!4v1770096814741!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
    </div>
  );
};

export default ContactUs;
