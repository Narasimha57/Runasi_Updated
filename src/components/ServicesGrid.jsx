import { services } from '../data/services.js';
import ServiceCard from '../components/ServiceCard.jsx';

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-linear-to-b from-[#E8E3F3] to-[#DDD5EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold  bg-linear-to-r from-[#6E5B9A] to-[#B29CE4] bg-clip-text text-transparent mb-4">
            Our <span className="bg-linear-to-r from-[#6E5B9A] to-[#B29CE4] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of holistic healing therapies designed to restore balance and vitality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
