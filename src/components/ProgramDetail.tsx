import {
  ArrowLeft,
  Award,
  BookOpen,
  Calendar,
  Clock,
  DollarSign,
  Users,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'

interface ProgramDetailProps {
  programId: string
  onBack: () => void
}

const ProgramDetail: React.FC<ProgramDetailProps> = ({ programId, onBack }) => {
  const [program, setProgram] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    fetch(
      `http://localhost:1111/api/collections/programs/${programId}?relations=widget`
    )
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch program')
        return res.json()
      })
      .then((data) => {
        setProgram(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [programId])

  if (loading)
    return (
      <div className="p-8 text-center text-gray-500">Loading program...</div>
    )
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>
  if (!program) return null

  const widget = program.widget || {}

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className={`bg-gradient-to-br from-blue-50 to-indigo-50 py-12`}>
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
              <Award size={48} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {program.title}
              </h1>
              <p className={`text-xl font-medium mb-6 text-blue-600`}>
                {widget.title || ''}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                {program.description}
              </p>
            </div>
          </div>
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Calendar size={24} className="mb-3 text-gray-600" />
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {widget.nextEventDate || '-'}
              </div>
              <div className="text-gray-600">Next Event Date</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <DollarSign size={24} className="mb-3 text-gray-600" />
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {widget.applicationTime || '-'}
              </div>
              <div className="text-gray-600">Application Time</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Users size={24} className="mb-3 text-gray-600" />
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {widget.buttonText || '-'}
              </div>
              <div className="text-gray-600">Button Text</div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Description Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <BookOpen size={24} className="text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Program Description
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            </section>
            {/* (Removed: Widget Section) */}
          </div>
          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Application Card */}
            <div className="bg-gray-50 rounded-3xl p-8 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <Award size={24} className="text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  {widget.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {widget.description}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-600">
                    Application takes ~{widget.applicationTime || '-'} minutes
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-gray-500" />
                  <span className="text-sm text-gray-600">
                    Next event: {widget.nextEventDate || '-'}
                  </span>
                </div>
              </div>
              {widget.buttonLink && (
                <a
                  href={widget.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-medium transition-all duration-200 hover:shadow-lg mb-4 text-center"
                >
                  {widget.buttonText || 'Start Application'}
                </a>
              )}
              {widget.callLink && (
                <a
                  href={widget.callLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block border border-gray-300 text-gray-700 px-6 py-4 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200 text-center"
                >
                  Schedule a Call
                </a>
              )}
            </div>
            {/* Program Features */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                What's Included
              </h3>
              <div className="space-y-4">
                {/* If you have features, map and display them here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramDetail
