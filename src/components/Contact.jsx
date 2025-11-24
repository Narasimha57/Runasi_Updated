import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-linear-to-b from-[#EAE4F8] to-[#DCD2F0]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold text-gray-900 mb-4">
            Let’s{" "}
            <span className="bg-linear-to-r from-[#6E5B9A] to-[#B29CE4] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you have questions or you're ready to begin your healing
            journey — we’re here to help.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Phone */}
          <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl shadow-xl p-8 hover:scale-[1.02] transition-all duration-300">
            <div className="w-10 h-10 bg-linear-to-br from-[#6E5B9A] to-[#B29CE4] rounded-2xl flex items-center justify-center mb-5 shadow-md">
              <Phone className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
            <p className="text-[#6E5B9A] font-bold text-lg">+91 94929 70759</p>
          </div>

          {/* Email */}
          <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl shadow-xl p-8 hover:scale-[1.02] transition-all duration-300">
            <div className="w-10 h-10 bg-linear-to-br from-[#6E5B9A] to-[#B29CE4] rounded-2xl flex items-center justify-center mb-5 shadow-md">
              <Mail className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-[#6E5B9A] font-bold text-lg">
              lerunaberino@gmail.com
            </p>
            <p className="text-gray-500 text-sm mt-2">We respond within 24 hrs</p>
          </div>

          {/* Location */}
          <div className="backdrop-blur-xl bg-white/50 border border-white/60 rounded-3xl shadow-xl p-8 hover:scale-[1.02] transition-all duration-300">
            <div className="w-10 h-10 bg-linear-to-br from-[#6E5B9A] to-[#B29CE4] rounded-2xl flex items-center justify-center mb-5 shadow-md">
              <MapPin className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-[#6E5B9A] font-semibold">Runasi Holistic Wellness Center</p>
            <p className="text-gray-700 text-sm">
              Nagarjuna Diagnostic Center, Opp. St. Patrick's High School
            </p>
            <p className="text-gray-600 text-sm">Sebastian Road, Secunderabad – 500003</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="tel:+919492970759"
            className="inline-flex items-center gap-3 text-lg px-10 py-4 rounded-full font-semibold text-white shadow-xl transition-all duration-300 bg-linear-to-r from-[#6E5B9A] to-[#B29CE4] hover:opacity-90 hover:scale-105"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
