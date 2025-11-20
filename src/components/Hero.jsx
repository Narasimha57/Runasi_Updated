import { Sparkles, Heart, Leaf } from 'lucide-react';
import runasalogo from '../assets/runasilogo.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-[#E8E3F3] via-[#F0EDF7] to-[#E8E3F3]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6E5B9A]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#B29CE4]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#6E5B9A]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-purple-200">
            <Sparkles className="w-4 h-4 text-[#6E5B9A]" />
            <span className="text-sm font-medium text-[#6E5B9A]">Holistic Healing & Wellness</span>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <img 
            src={runasalogo} 
            alt="Runasa Wellness Logo" 
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-4xl"
          />
        </div>
        
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
          <span className="block bg-linear-to-r from-[#6E5B9A] to-[#B29CE4] bg-clip-text text-transparent">
            Runasi Wellness Center
          </span>
        </h1>
        
        <p className="font-serif text-2xl sm:text-3xl text-[#6E5B9A] mb-8 font-semibold italic">
          Reconnect with Nature. Reclaim your health
        </p>

        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience the perfect harmony of ancient healing wisdom and modern wellness practices.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a 
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-linear-to-r from-[#6E5B9A] to-[#B29CE4] text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Explore Our Services
          </a>
          
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-200">
            <div className="w-12 h-12 bg-linear-to-br from-[#6E5B9A] to-[#B29CE4] rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">Traditional Therapies</h3>
            <p className="text-gray-600">Time-tested healing practices from Ayurveda, Chinese Medicine, and more</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-200">
            <div className="w-12 h-12 bg-linear-to-br from-[#6E5B9A] to-[#B29CE4] rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">Natural Healing</h3>
            <p className="text-gray-600">Drug-free treatments that work with your body's natural healing abilities</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-200">
            <div className="w-12 h-12 bg-linear-to-br from-[#6E5B9A] to-[#B29CE4] rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">Personalized Care</h3>
            <p className="text-gray-600">Customized treatment plans tailored to your unique health needs</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
