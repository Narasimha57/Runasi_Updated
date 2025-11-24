import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, Check } from 'lucide-react';
import { services } from '../data/services.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const service = services.find(s => s.id === id);

  if (!service){
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            Return to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-[#F0EDF7] to-[#E8E3F3]">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#6E5B9A] font-medium mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </button>

          {/* Hero Image */}
          <div className="relative h-96 rounded-3xl overflow-hidden mb-12 shadow-2xl">
            <img 
              src={service.image} 
              alt={service.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="font-serif text-5xl font-bold text-white mb-4">
                {service.name}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                {service.shortDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-200 mb-8">
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                  About This Treatment
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {service.fullDescription}
                  </p>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg border border-purple-200">
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">
                  Key Benefits
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="shrink-0 w-6 h-6 bg-linear-to-br from-[#6E5B9A] to-[#B29CE4] rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-gray-700 text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
               

                {/* Info Card */}
                <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-lg border border-purple-200">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#6E5B9A] font-bold">•</span>
                      <span>Initial consultation and assessment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Personalized treatment plan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Experienced, certified practitioners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Comfortable, relaxing environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>Follow-up care and guidance</span>
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-200">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
                    Questions?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our team is here to help answer any questions about this treatment.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>📞 +91 9492970759</p>
                    <p>✉️ lerunaberino@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
