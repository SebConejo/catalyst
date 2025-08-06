import React, { useState, useEffect } from 'react';
import { ArrowRight, Rocket, TrendingUp, Heart, Menu, X, CheckCircle, Users, Calendar, DollarSign } from 'lucide-react';
import ProgramDetail from './components/ProgramDetail';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const programs = [
    {
      id: 'early-stage',
      title: 'Early Stage Program',
      subtitle: 'For visionaries with big ideas',
      description: 'Transform your innovative concept into a viable business with our comprehensive 12-week program designed for pre-seed startups.',
      icon: Rocket,
      duration: '12 weeks',
      funding: 'Up to $100K',
      cohortSize: '15 startups',
      features: [
        'Idea validation and market research',
        'Product development guidance',
        'Business model design',
        'Pitch deck creation',
        'Investor introductions'
      ],
      gradient: 'from-blue-50 to-indigo-50',
      accentColor: 'text-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      id: 'growth',
      title: 'Growth Program',
      subtitle: 'Scale your proven business',
      description: 'Accelerate your growth trajectory with our intensive 16-week program tailored for startups ready to scale and expand their market reach.',
      icon: TrendingUp,
      duration: '16 weeks',
      funding: 'Up to $500K',
      cohortSize: '12 startups',
      features: [
        'Growth strategy optimization',
        'Sales and marketing acceleration',
        'Team building and hiring',
        'International expansion support',
        'Series A preparation'
      ],
      gradient: 'from-green-50 to-emerald-50',
      accentColor: 'text-green-600',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    },
    {
      id: 'impact',
      title: 'Impact Program',
      subtitle: 'Build solutions that matter',
      description: 'Create meaningful change while building a sustainable business through our specialized 14-week program for social and environmental impact startups.',
      icon: Heart,
      duration: '14 weeks',
      funding: 'Up to $250K',
      cohortSize: '10 startups',
      features: [
        'Impact measurement frameworks',
        'Sustainable business models',
        'ESG compliance guidance',
        'Impact investor network',
        'Social enterprise mentorship'
      ],
      gradient: 'from-purple-50 to-pink-50',
      accentColor: 'text-purple-600',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  const selectedProgramData = programs.find(p => p.id === selectedProgram);

  if (selectedProgram && selectedProgramData) {
    return (
      <ProgramDetail 
        program={selectedProgramData} 
        onBack={() => setSelectedProgram(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">
                Catalyst
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <div 
                className="relative"
                onMouseEnter={() => setIsProgramsDropdownOpen(true)}
                onMouseLeave={() => setIsProgramsDropdownOpen(false)}
              >
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-1"
                >
                  Programs
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isProgramsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isProgramsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    {programs.map((program) => {
                      const IconComponent = program.icon;
                      return (
                        <button
                          key={program.id}
                          onClick={() => {
                            setSelectedProgram(program.id);
                            setIsProgramsDropdownOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-3"
                        >
                          <div className={`p-2 rounded-lg bg-gray-50`}>
                            <IconComponent size={16} className={program.accentColor} />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{program.title}</div>
                            <div className="text-xs text-gray-500">{program.subtitle}</div>
                          </div>
                        </button>
                      );
                    })}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <button
                        onClick={() => {
                          scrollToSection('programs');
                          setIsProgramsDropdownOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left text-sm text-gray-600 hover:bg-gray-50 transition-colors duration-200"
                      >
                        View All Programs
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                About
              </button>
              <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-6 space-y-4">
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="block w-full text-left text-gray-600 hover:text-gray-900 py-2 font-medium"
                >
                  Programs
                </button>
                <div className="pl-4 space-y-2">
                  {programs.map((program) => (
                    <button
                      key={program.id}
                      onClick={() => {
                        setSelectedProgram(program.id);
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left text-gray-500 hover:text-gray-700 py-1 text-sm"
                    >
                      {program.title}
                    </button>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-600 hover:text-gray-900 py-2"
              >
                About
              </button>
              <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 w-full">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Accelerate Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
                Startup Journey
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join the next generation of entrepreneurs building revolutionary companies. 
              Our world-class accelerator programs provide the mentorship, funding, and network you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => scrollToSection('programs')}
                className="group bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-200 flex items-center gap-3"
              >
                Explore Programs
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors duration-200">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Choose the accelerator program that matches your startup's stage and ambitions. 
              Each program is designed to maximize your potential for success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={program.id}
                  className={`group relative bg-gradient-to-br ${program.gradient} rounded-3xl p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-white shadow-sm mb-6`}>
                      <IconComponent size={32} className={program.accentColor} />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                      {program.title}
                    </h3>
                    <p className={`text-lg font-medium mb-4 ${program.accentColor}`}>
                      {program.subtitle}
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {program.description}
                    </p>
                  </div>

                  {/* Program Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <Calendar size={20} className="mx-auto mb-2 text-gray-600" />
                      <div className="text-sm font-medium text-gray-900">{program.duration}</div>
                    </div>
                    <div className="text-center">
                      <DollarSign size={20} className="mx-auto mb-2 text-gray-600" />
                      <div className="text-sm font-medium text-gray-900">{program.funding}</div>
                    </div>
                    <div className="text-center">
                      <Users size={20} className="mx-auto mb-2 text-gray-600" />
                      <div className="text-sm font-medium text-gray-900">{program.cohortSize}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle size={16} className={program.accentColor} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedProgram(program.id)}
                    className={`w-full ${program.buttonColor} text-white px-6 py-4 rounded-xl font-medium transition-all duration-200 group-hover:shadow-lg`}
                  >
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Empowering the next generation of innovators
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Since 2018, we've helped over 200 startups raise more than $500M in funding. 
                Our network of world-class mentors, investors, and alumni creates an ecosystem 
                where ambitious entrepreneurs thrive.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
                  <div className="text-gray-600">Startups Accelerated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">$500M+</div>
                  <div className="text-gray-600">Capital Raised</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                <div className="text-6xl text-gray-400">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Ready to transform your startup?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join hundreds of entrepreneurs who have accelerated their growth with Catalyst. 
            Applications for our next cohort are now open.
          </p>
          <button className="group bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-200 flex items-center gap-3 mx-auto">
            Apply Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
              Catalyst
            </div>
            <div className="flex space-x-8 text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;