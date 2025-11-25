export default function About() {
  return (
    <section id="about" className="py-24 bg-linear-to-b from-[#F0EDF7] to-[#E8E3F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">

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
            <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-purple-200">

              {/* Title */}
              <div className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Specialized In
              </div>

              {/* Specialization */}
              <div className="text-gray-900 text-lg font-semibold mb-4 text-center">
                Diploma in Ayurvedic Cosmetics Mastery Program
              </div>

              {/* Practitioner Name */}
              <h3 className="text-3xl font-semibold font-serif text-gray-900 mb-0 mt-8">
                Hr. Sravanthi
              </h3>

              {/* Education Section */}
              <div className="text-2xl font-semibold text-gray-900 mb-3">
                Education & Qualifications
              </div>

              {/* Qualifications List - Grid Format */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-white/50 rounded-lg p-3 text-gray-700 text-sm font-medium">
                  MBA, M.Phil.
                </div>
                <div className="bg-white/50 rounded-lg p-3 text-gray-700 text-sm font-medium">
                  D.Acu (Diploma in Acupuncture)
                </div>
                <div className="bg-white/50 rounded-lg p-3 text-gray-700 text-sm font-medium">
                  Ad.D.Acu (Advanced Diploma in Acupuncture)
                </div>
                <div className="bg-white/50 rounded-lg p-3 text-gray-700 text-sm font-medium">
                  D.Sj (Diploma in Sujok Therapy)
                </div>
                <div className="bg-white/50 rounded-lg p-3 text-gray-700 text-sm font-medium">
                  Ad.pT (Advanced Diploma in Paschagavya Therapy)
                </div>
                <div className="bg-white/50 rounded-lg p-3 text-gray-700 text-sm font-medium">
                  NDDY (Diploma in Naturopathy)
                </div>
                <div className="bg-white/50 rounded-lg p-3 text-gray-700 text-sm font-medium">
                  Diploma in Yoga & Yogic Science
                </div>
                <div className="bg-white/50 rounded-lg p-3 text-gray-700 text-sm font-medium">
                  Color Therapy & Chromotherapy
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
