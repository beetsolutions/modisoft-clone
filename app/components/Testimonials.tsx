export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc',
      content: 'Modisoft transformed our vision into a stunning reality. Their attention to detail and technical expertise exceeded our expectations. The team was professional, responsive, and delivered on time.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataFlow Solutions',
      content: 'Working with Modisoft was a game-changer for our business. They built a scalable platform that has helped us grow 300% year over year. Highly recommend their services!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, HealthTech Co',
      content: 'The mobile app Modisoft developed for us has received outstanding feedback from our users. Their expertise in healthcare technology and user experience design is unmatched.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Founder, E-Commerce Plus',
      content: 'Exceptional work! Modisoft delivered a robust e-commerce platform that handles our high traffic seamlessly. Their post-launch support has been equally impressive.',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      role: 'Director of IT, Finance Corp',
      content: 'The financial dashboard they created has revolutionized how we analyze data. The real-time insights have been invaluable for our decision-making process.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'VP of Innovation, Smart Living',
      content: 'Modisoft&apos;s IoT expertise helped us launch our smart home product ahead of schedule. Their innovative approach and problem-solving skills are top-notch.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
