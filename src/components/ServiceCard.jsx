import { useNavigate } from 'react-router';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service }) {
  const navigate = useNavigate();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 right-4 font-serif text-2xl font-bold text-white">
          {service.name}
        </h3>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-6 line-clamp-3">
          {service.shortDescription}
        </p>
        
        <button
          onClick={() => {
            navigate(`/service/${service.id}`);
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100); 
          }}
          className="inline-flex items-center gap-2 text-[#6E5B9A] font-semibold hover:gap-3 transition-all group/btn"
        >
          View More
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
