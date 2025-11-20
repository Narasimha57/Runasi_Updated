import { Users, Award, Clock, Heart } from 'lucide-react';

export default function About() {

  return (
    <section id="about" className="py-24 bg-linear-to-b from-[#F0EDF7] to-[#E8E3F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE — TEXT */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold bg-linear-to-r from-[#6E5B9A] to-[#B29CE4] bg-clip-text text-transparent mb-6">
              About <span className="bg-linear-to-r from-[#6E5B9A] to-[#B29CE4] bg-clip-text text-transparent">Runasi Wellness</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Runasi Wellness Center, we believe in the power of holistic healing that addresses the root causes of health concerns rather than just treating symptoms. Our center combines ancient wisdom from traditional healing systems with modern wellness practices to provide comprehensive care for your body, mind, and spirit.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our team of certified practitioners brings together expertise in Ayurveda, Traditional Chinese Medicine, and various complementary therapies. We are committed to providing personalized treatment plans tailored to each individual's unique constitution and health goals.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're seeking relief from chronic pain, stress management, weight loss support, or overall wellness enhancement, we're here to guide you on your healing journey with compassion, expertise, and dedication.
            </p>
          </div>

          {/* RIGHT SIDE — SINGLE SPECIALIZED CARD */}
          <div>
            <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-purple-200">

              {/* Icon */}
              <div className="w-14 h-14 bg-linear-to-br from-[#6E5B9A] to-[#B29CE4] rounded-full flex items-center justify-center mx-auto mb-5">
                <Heart className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <div className="font-serif text-2xl font-bold text-gray-900 mb-3">
                Specialized In
              </div>

              {/* Items */}
              <ul className="text-gray-700 text-base space-y-2 font-medium">
                <li>Diploma in Ayurvedic Cosmetics  Mastery Program </li>
                {/* <li>✓ Weight Loss Management</li>
                <li>✓ Hair care Treatment</li>
                <li>✓ Detox & Rejuvenation Treatments</li> */}
              </ul>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
