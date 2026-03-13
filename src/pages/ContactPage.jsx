import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_lj4cfcn',
        'template_0iibvrz',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          company: formData.company,
          project_type: formData.projectType,
          timeline: formData.timeline,
          message: formData.message,
        },
        '7qfCq4Od_Z7I6W_Fb'
      );
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', projectType: '', message: '', timeline: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  const projectTypes = [
    'Networking & Routing',
    'Surveillance & Security',
    'Industrial Equipment',
    'Custom Sourcing',
    'System Integration Support',
    'Other'
  ];

  const timelines = [
    'Urgent (Within 1 week)',
    'Soon (1-2 weeks)',
    'Flexible (2-4 weeks)',
    'Planning Stage'
  ];

  const contactMethods = [
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      detail: 'max@1252.technology.com',
      link: 'mailto:max@1252.technology.com',
      description: 'For detailed enquiries'
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      detail: '+65 80771252',
      link: 'tel:+6580771252',
      description: 'Call during business hours'
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      title: 'WhatsApp',
      detail: '+65 80771252',
      link: 'https://wa.me/6580771252',
      description: 'Quick messages & updates'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  const inputClass = "w-full px-3 py-2.5 sm:px-4 sm:py-3 bg-slate-900/50 border border-blue-500/30 rounded-xl text-white text-sm sm:text-base placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -top-10 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contactGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(34, 211, 238, 0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactGrid)" />
          </svg>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-float"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${6 + i * 0.5}s`,
                backgroundColor: i % 2 === 0 ? 'rgba(34, 211, 238, 0.6)' : 'rgba(59, 130, 246, 0.6)',
                boxShadow: i % 2 === 0 ? '0 0 10px rgba(34, 211, 238, 0.5)' : '0 0 10px rgba(59, 130, 246, 0.5)'
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 mb-5 sm:mb-6 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full animate-fadeIn">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              <span className="text-xs sm:text-sm font-semibold text-cyan-400 tracking-wide">Get In Touch</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 animate-fadeIn animation-delay-200 leading-tight">
              <span className="gold-border-text">Let's Discuss Your</span>
              <span className="block mt-1 sm:mt-2">
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                    Hardware Requirements
                  </span>
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-blue-600 to-cyan-500 blur-lg opacity-50"></span>
                </span>
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fadeIn animation-delay-400 px-2">
              Have a project, requirement, or quotation request? We're here to help with reliable,
              project-ready IT hardware solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Contact Form */}
            <div className="animate-fadeIn animation-delay-600">
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-5 sm:p-8 lg:p-10 rounded-2xl border-2 border-blue-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-1.5 sm:mb-2">Request Solution Review</h2>
                  <p className="text-sm sm:text-base text-slate-400 mb-6 sm:mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                  {submitStatus === 'success' && (
                    <div className="mb-5 sm:mb-6 p-3 sm:p-4 bg-green-500/10 border border-green-500/30 rounded-xl flex items-start gap-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-green-400 font-semibold text-sm sm:text-base">Message sent successfully!</p>
                        <p className="text-green-300/80 text-xs sm:text-sm mt-1">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-5 sm:mb-6 p-3 sm:p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-red-400 font-semibold text-sm sm:text-base">Something went wrong!</p>
                        <p className="text-red-300/80 text-xs sm:text-sm mt-1">Please try again or contact us directly.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Name & Email row on sm+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5 sm:mb-2">Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required
                          className={inputClass} placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5 sm:mb-2">Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required
                          className={inputClass} placeholder="your.email@company.com" />
                      </div>
                    </div>

                    {/* Phone & Company row on sm+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5 sm:mb-2">Phone Number *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                          className={inputClass} placeholder="+65 1234 5678" />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5 sm:mb-2">Company</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange}
                          className={inputClass} placeholder="Your company name" />
                      </div>
                    </div>

                    {/* Project Type & Timeline row on sm+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5 sm:mb-2">Project Type *</label>
                        <select name="projectType" value={formData.projectType} onChange={handleChange} required
                          className={inputClass}>
                          <option value="">Select project type</option>
                          {projectTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5 sm:mb-2">Timeline *</label>
                        <select name="timeline" value={formData.timeline} onChange={handleChange} required
                          className={inputClass}>
                          <option value="">Select timeline</option>
                          {timelines.map((timeline, index) => (
                            <option key={index} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-300 mb-1.5 sm:mb-2">Project Details *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} required rows="4"
                        className={`${inputClass} resize-none`}
                        placeholder="Tell us about your requirements, environment, and what you're looking to achieve..."></textarea>
                    </div>

                    <button type="submit" disabled={isSubmitting}
                      className="group relative w-full px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg font-bold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(34,211,238,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-[length:200%_100%] animate-gradient"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                      <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-all duration-300"></div>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-5 sm:space-y-6 lg:space-y-8 animate-fadeIn animation-delay-800">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6">Get In Touch Directly</h2>
                <div className="space-y-3 sm:space-y-4">
                  {contactMethods.map((method, index) => (
                    <a key={index} href={method.link}
                      className="group relative flex items-start gap-3 sm:gap-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-blue-500/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-500 rounded-xl"></div>
                      <div className="relative z-10 flex items-start gap-3 sm:gap-4 w-full">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          {method.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs sm:text-sm font-semibold text-slate-400 mb-0.5 sm:mb-1">{method.title}</h3>
                          <p className="text-white font-bold text-sm sm:text-lg mb-0.5 sm:mb-1 group-hover:text-cyan-400 transition-colors duration-300 truncate">{method.detail}</p>
                          <p className="text-slate-400 text-xs sm:text-sm">{method.description}</p>
                        </div>
                        <svg className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-blue-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Business Hours</h3>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-1.5 sm:py-2 border-b border-slate-700/50 last:border-0">
                        <span className="text-slate-300 font-medium text-sm sm:text-base">{schedule.day}</span>
                        <span className="text-cyan-400 font-semibold text-sm sm:text-base">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-blue-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Our Location</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    <strong className="text-white">60 Paya Lebar Road, #06-28</strong><br />
                    Paya Lebar Square<br />
                    Singapore 409051
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 sm:mt-3">
                    Serving businesses across Singapore and the region with fast, reliable support.
                  </p>
                </div>
              </div>

              {/* Fast Response */}
              <div className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_100%] animate-gradient p-4 sm:p-6 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></div>
                <div className="absolute inset-0 rounded-xl border-2 border-cyan-400/50"></div>
                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1.5 sm:mb-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse-slow" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-xl sm:text-2xl font-black text-white">Fast Response</h3>
                  </div>
                  <p className="text-white/90 font-medium text-sm sm:text-base">
                    We typically respond within <strong className="text-cyan-300">24 hours</strong> on business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 sm:p-8 lg:p-12 rounded-2xl border-2 border-cyan-400/30">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">Ready to Get Started?</h2>
            <p className="text-base sm:text-xl text-slate-300 mb-5 sm:mb-6">
              Let's discuss how we can support your hardware requirements with reliable, long-term solutions.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-cyan-400/10 border border-cyan-400/30 rounded-full">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-slow"></div>
              <span className="text-xs sm:text-sm font-semibold text-cyan-400">Powered by Lifecycle Assurance™</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .gold-border-text {
          text-shadow:
             1px  1px 0px rgba(212, 175, 55, 0.75),
            -1px -1px 0px rgba(212, 175, 55, 0.75),
             1px -1px 0px rgba(212, 175, 55, 0.6),
            -1px  1px 0px rgba(212, 175, 55, 0.6),
             3px  3px 0px rgba(170, 130, 10, 0.35),
             4px  4px 3px rgba(0, 0, 0, 0.45);
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.6; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
        .animate-gradient { animation: gradient 3s ease infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-shine { animation: shine 3s infinite; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
};

export default ContactPage;