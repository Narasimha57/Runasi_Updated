import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-b from-[#DDD5EC] to-[#E8E3F3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
            Get in{" "}
            <span className="bg-linear-to-r from-[#6E5B9A] to-[#B29CE4] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to begin your wellness journey? Contact us to schedule your consultation
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Phone */}
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border border-purple-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-[#6E5B9A] to-[#B29CE4] rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base mb-1 pb-4">Phone</h3>
                <p className="text-gray-600 text-lg font-semibold wrap-break-word">+91 94929 70759</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border border-purple-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-[#6E5B9A] to-[#B29CE4] rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base mb-1 pb-4">Email</h3>
                <p className="text-gray-600 text-lg font-semibold wrap-break-word">lerunaberino@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border border-purple-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-[#6E5B9A] to-[#B29CE4] rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base mb-1">Location</h3>

                <p className="text-gray-900 text-sm font-bold">Runasi Holistic Wellness Center</p>
                <p className="text-gray-600 text-sm font-medium">Nagarjuna Diagnostic Center</p>
                <p className="text-gray-600 text-sm font-medium">Opp. St. Patrick's High School, Sebastian Road</p>
                <p className="text-gray-600 text-sm font-medium">Secunderabad – 500003</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
