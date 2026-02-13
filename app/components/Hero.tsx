import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Modern Software Solutions
            <span className="block text-primary-600 mt-2">For Your Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We build innovative, scalable, and user-friendly applications that drive growth and transform businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
            <a href="#portfolio" className="btn-secondary">
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="animate-slide-up">
              <div className="text-3xl md:text-4xl font-bold text-primary-600">500+</div>
              <div className="text-gray-600 mt-1">Projects Completed</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary-600">200+</div>
              <div className="text-gray-600 mt-1">Happy Clients</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary-600">50+</div>
              <div className="text-gray-600 mt-1">Team Members</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary-600">10+</div>
              <div className="text-gray-600 mt-1">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
