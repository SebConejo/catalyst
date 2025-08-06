import React from 'react';
import { ArrowLeft, Calendar, DollarSign, Users, CheckCircle, Clock, Target, Award, BookOpen, MessageSquare } from 'lucide-react';

interface ProgramDetailProps {
  program: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ComponentType<any>;
    duration: string;
    funding: string;
    cohortSize: string;
    features: string[];
    gradient: string;
    accentColor: string;
    buttonColor: string;
  };
  onBack: () => void;
}

const ProgramDetail: React.FC<ProgramDetailProps> = ({ program, onBack }) => {
  const IconComponent = program.icon;

  const programDetails = {
    'early-stage': {
      overview: 'Our Early Stage Program is designed for visionary entrepreneurs who have a compelling idea but need guidance to transform it into a viable business. Over 12 intensive weeks, you\'ll work closely with experienced mentors to validate your concept, develop your product, and prepare for your first funding round.',
      curriculum: [
        { week: 'Weeks 1-2', title: 'Foundation & Validation', description: 'Market research, customer discovery, and idea validation' },
        { week: 'Weeks 3-5', title: 'Product Development', description: 'MVP creation, user testing, and product-market fit' },
        { week: 'Weeks 6-8', title: 'Business Model', description: 'Revenue streams, pricing strategy, and financial planning' },
        { week: 'Weeks 9-10', title: 'Go-to-Market', description: 'Marketing strategy, sales process, and customer acquisition' },
        { week: 'Weeks 11-12', title: 'Fundraising Prep', description: 'Pitch deck creation, investor meetings, and demo day' }
      ],
      mentors: [
        { name: 'Sarah Chen', role: 'Former VP Product at Stripe', expertise: 'Product Strategy' },
        { name: 'Marcus Rodriguez', role: 'Serial Entrepreneur', expertise: 'Business Development' },
        { name: 'Dr. Emily Watson', role: 'Former CTO at Airbnb', expertise: 'Technical Leadership' }
      ],
      outcomes: [
        '95% of graduates successfully launch their MVP',
        'Average of $150K raised within 6 months',
        '80% achieve product-market fit indicators',
        'Access to our exclusive investor network'
      ]
    },
    'growth': {
      overview: 'The Growth Program is tailored for startups that have achieved initial traction and are ready to scale rapidly. This intensive 16-week program focuses on optimizing growth strategies, building high-performing teams, and preparing for Series A funding.',
      curriculum: [
        { week: 'Weeks 1-3', title: 'Growth Strategy', description: 'Data-driven growth planning and KPI optimization' },
        { week: 'Weeks 4-6', title: 'Sales & Marketing', description: 'Advanced acquisition strategies and conversion optimization' },
        { week: 'Weeks 7-9', title: 'Operations & Scale', description: 'Process optimization and operational excellence' },
        { week: 'Weeks 10-12', title: 'Team Building', description: 'Hiring strategies, culture building, and leadership development' },
        { week: 'Weeks 13-14', title: 'International Expansion', description: 'Global market entry and localization strategies' },
        { week: 'Weeks 15-16', title: 'Series A Preparation', description: 'Advanced fundraising and investor relations' }
      ],
      mentors: [
        { name: 'David Kim', role: 'Former Head of Growth at Uber', expertise: 'Growth Strategy' },
        { name: 'Lisa Thompson', role: 'Managing Partner at Sequoia', expertise: 'Venture Capital' },
        { name: 'Alex Johnson', role: 'Former COO at Spotify', expertise: 'Operations & Scale' }
      ],
      outcomes: [
        'Average 300% revenue growth during program',
        '$2M+ average Series A funding raised',
        '90% successfully expand to new markets',
        'Direct access to top-tier VCs and angels'
      ]
    },
    'impact': {
      overview: 'The Impact Program is designed for entrepreneurs building solutions that create positive social or environmental change while maintaining strong business fundamentals. This 14-week program combines traditional business acceleration with impact measurement and sustainable growth strategies.',
      curriculum: [
        { week: 'Weeks 1-2', title: 'Impact Framework', description: 'Theory of change, impact measurement, and ESG principles' },
        { week: 'Weeks 3-5', title: 'Sustainable Business Models', description: 'Balancing profit with purpose and stakeholder capitalism' },
        { week: 'Weeks 6-8', title: 'Impact Measurement', description: 'KPIs, reporting frameworks, and third-party validation' },
        { week: 'Weeks 9-10', title: 'Stakeholder Engagement', description: 'Community building, partnerships, and advocacy' },
        { week: 'Weeks 11-12', title: 'Impact Investment', description: 'ESG compliance, impact investor relations, and blended finance' },
        { week: 'Weeks 13-14', title: 'Scale for Good', description: 'Sustainable growth strategies and global impact expansion' }
      ],
      mentors: [
        { name: 'Dr. Maria Santos', role: 'Former Director at Gates Foundation', expertise: 'Social Impact' },
        { name: 'James Wilson', role: 'Partner at TPG Rise', expertise: 'Impact Investing' },
        { name: 'Priya Patel', role: 'Sustainability Expert', expertise: 'Environmental Impact' }
      ],
      outcomes: [
        'Measurable social/environmental impact achieved',
        'Average $300K in impact funding secured',
        '85% achieve B-Corp certification readiness',
        'Connection to global impact investor network'
      ]
    }
  };

  const details = programDetails[program.id as keyof typeof programDetails];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className={`bg-gradient-to-br ${program.gradient} py-12`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            Back to Programs
          </button>
          
          <div className="flex items-start gap-8">
            <div className="inline-flex p-6 rounded-3xl bg-white shadow-sm">
              <IconComponent size={48} className={program.accentColor} />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {program.title}
              </h1>
              <p className={`text-xl font-medium mb-6 ${program.accentColor}`}>
                {program.subtitle}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                {details.overview}
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Calendar size={24} className="mb-3 text-gray-600" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{program.duration}</div>
              <div className="text-gray-600">Program Duration</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <DollarSign size={24} className="mb-3 text-gray-600" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{program.funding}</div>
              <div className="text-gray-600">Investment Range</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Users size={24} className="mb-3 text-gray-600" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{program.cohortSize}</div>
              <div className="text-gray-600">Cohort Size</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Curriculum */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <BookOpen size={24} className={program.accentColor} />
                <h2 className="text-3xl font-bold text-gray-900">Curriculum</h2>
              </div>
              <div className="space-y-6">
                {details.curriculum.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-sm font-bold ${program.accentColor}`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                          <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                            {item.week}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Mentors */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare size={24} className={program.accentColor} />
                <h2 className="text-3xl font-bold text-gray-900">Expert Mentors</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {details.mentors.map((mentor, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{mentor.name}</h3>
                    <p className="text-gray-600 mb-3">{mentor.role}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-white ${program.accentColor}`}>
                      {mentor.expertise}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Outcomes */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Target size={24} className={program.accentColor} />
                <h2 className="text-3xl font-bold text-gray-900">Program Outcomes</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle size={20} className={`${program.accentColor} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Application Card */}
            <div className="bg-gray-50 rounded-3xl p-8 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <Award size={24} className={program.accentColor} />
                <h3 className="text-2xl font-bold text-gray-900">Apply Now</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ready to join our next cohort? Applications are reviewed on a rolling basis.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-600">Application takes ~30 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-600">Next cohort starts in 6 weeks</span>
                </div>
              </div>
              <button className={`w-full ${program.buttonColor} text-white px-6 py-4 rounded-xl font-medium transition-all duration-200 hover:shadow-lg mb-4`}>
                Start Application
              </button>
              <button className="w-full border border-gray-300 text-gray-700 px-6 py-4 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200">
                Schedule a Call
              </button>
            </div>

            {/* Program Features */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What's Included</h3>
              <div className="space-y-4">
                {program.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={16} className={`${program.accentColor} flex-shrink-0 mt-1`} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;