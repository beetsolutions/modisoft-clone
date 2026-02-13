export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'A full-featured e-commerce solution with real-time inventory management and payment processing.',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description: 'HIPAA-compliant mobile application for patient management and telemedicine consultations.',
      tags: ['React Native', 'Firebase', 'Healthcare'],
    },
    {
      title: 'Financial Dashboard',
      category: 'Web Application',
      description: 'Real-time analytics dashboard for financial data visualization and reporting.',
      tags: ['Next.js', 'TypeScript', 'D3.js'],
    },
    {
      title: 'AI Content Generator',
      category: 'AI/ML',
      description: 'AI-powered content creation tool using advanced language models for marketing teams.',
      tags: ['Python', 'OpenAI', 'FastAPI'],
    },
    {
      title: 'Project Management Tool',
      category: 'SaaS',
      description: 'Collaborative project management platform with real-time updates and team collaboration.',
      tags: ['Vue.js', 'GraphQL', 'PostgreSQL'],
    },
    {
      title: 'IoT Smart Home System',
      category: 'IoT',
      description: 'Integrated smart home automation system with mobile control and AI-driven optimization.',
      tags: ['IoT', 'AWS', 'React'],
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our recent projects and successful client collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl overflow-hidden bg-white border border-gray-200 hover:border-primary-300 hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-400 to-secondary-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <div className="text-sm text-primary-600 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
