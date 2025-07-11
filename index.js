import React, { useState, useEffect, useRef } from 'react';
import { Headset, Mic, Music, Mail, User, MessageSquare, Instagram, Twitter, Youtube, Sound, Settings, Zap } from 'lucide-react';

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef({});

  // Smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const section = sectionsRef.current[sectionId];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Observe sections for active navigation link
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      Object.values(sectionsRef.current).forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-90 backdrop-blur-sm z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-teal-400">HBT</div>
          <ul className="flex space-x-6">
            {['home', 'about', 'services', 'portfolio', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`relative text-lg font-medium transition-colors duration-300
                    ${activeSection === section ? 'text-teal-400' : 'text-gray-300 hover:text-teal-300'}
                    after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-teal-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                    ${activeSection === section ? 'after:scale-x-100' : 'hover:after:scale-x-100'}
                  `}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={(el) => (sectionsRef.current.home = el)}
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080/1a202c/e2e8f0?text=HBT+Studio')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="text-center z-10 p-6 rounded-lg bg-gray-800 bg-opacity-80 shadow-2xl max-w-3xl mx-auto">
          <h1 className="text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
            HBT
          </h1>
          <p className="text-3xl text-teal-400 font-semibold mb-6 animate-pulse">
            Audio Engineer • Producer • Rapper
          </p>
          <p className="text-xl text-gray-300 mb-8">
            Crafting sonic masterpieces and delivering impactful narratives.
          </p>
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 bg-teal-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50"
          >
            Explore Services
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={(el) => (sectionsRef.current.about = el)}
        className="py-20 px-4 bg-gray-800"
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-teal-400 text-center mb-12">About HBT</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://placehold.co/600x400/2d3748/a0aec0?text=HBT+Profile"
                alt="HBT Profile"
                className="rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Inspired by the meticulous sonic sculpting of <span className="font-semibold text-teal-300">Mike Bozzi</span>, the innovative production of <span className="font-semibold text-teal-300">Nick Mira</span>, the creative genius of <span className="font-semibold text-teal-300">Cheese Goldberg</span>, and the impactful mixing of <span className="font-semibold text-teal-300">Cameran Cartee</span>, HBT brings a unique blend of technical precision and artistic vision to every project.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Drawing further influence from the mastering mastery of <span className="font-semibold text-teal-300">Alex Tumay</span>, the groundbreaking mixes of <span className="font-semibold text-teal-300">Mixedbyali</span>, and the raw energy of <span className="font-semibold text-teal-300">BBG Baby Joe</span>, HBT is dedicated to pushing boundaries in audio engineering, crafting beats that resonate, and delivering compelling lyrical performances.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether it's mixing, mastering, beat-making, or vocal recording, HBT is committed to transforming your artistic vision into a polished, powerful auditory experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        ref={(el) => (sectionsRef.current.services = el)}
        className="py-20 px-4 bg-gray-900"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-teal-400 text-center mb-16">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Service Card 1: Audio Engineering */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300 group">
              <div className="text-teal-400 mb-6 flex justify-center">
                <Sound size={64} strokeWidth={1.5} className="group-hover:animate-bounce" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 text-center">Audio Engineering</h3>
              <p className="text-gray-300 text-lg text-center leading-relaxed">
                Professional mixing and mastering services to ensure your tracks sound crisp, clear, and impactful across all platforms. From vocal tuning to dynamic processing, I bring your sound to life.
              </p>
              <ul className="mt-6 text-gray-400 text-center space-y-2">
                <li><span className="text-teal-400 text-xl mr-2">&bull;</span> Mixing & Mastering</li>
                <li><span className="text-teal-400 text-xl mr-2">&bull;</span> Vocal Processing</li>
                <li><span className="text-teal-400 text-xl mr-2">&bull;</span> Sound Design</li>
                <li><span className="text-teal-400 text-xl mr-2">&bull;</span> Audio Restoration</li>
              </ul>
            </div>

            {/* Service Card 2: Music Production */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300 group">
              <div className="text-teal-400 mb-6 flex justify-center">
                <Settings size={64} strokeWidth={1.5} className="group-hover:animate-spin" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 text-center">Music Production</h3>
              <p className="text-gray-300 text-lg text-center leading-relaxed">
                From concept to completion, I produce custom beats and full instrumental tracks tailored to your unique style and vision. Genre-spanning production with a focus on innovation.
              </p>
              <ul className="mt-6 text-gray-400 text-center space-y-2">
                <li><span className="text-teal-400 text-xl mr-2">&bull;</span> Custom Beat Production</li>
                <li><span className="text-teal-400 text-xl mr-2">&bull;</span> Instrumental Composition</li>
                <li><span className="text-teal-400 text-xl mr-2">&bull;</span> Arrangement & Structuring</li>
                <li><span className="text-teal-400 text-xl mr-2">&bull;</span> Session Recording</li>
              </ul>
            </div>

            {/* Service Card 3: Rapping & Songwriting */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300 group">
              <div className="text-teal-400 mb-6 flex justify-center">
                <Zap size={64} strokeWidth={1.5} className="group-hover:animate-pulse" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 text-center">Rapping & Songwriting</h3>
              <p className="text-gray-300 text-lg text-center leading-relaxed">
                Lyrical prowess and captivating delivery for your tracks. Offering ghostwriting, feature verses, and full song collaborations to elevate your project's narrative and impact.
              </p>
              <ul className="mt-6 text-gray-400 text-center space-y-2">
                <li><span className="text-teal-400 text-xl mr-2">&bull;</span> Feature Verses</li>
                <li><span className="text-teal-400 text-xl mr-2">&bull;</span> Ghostwriting</li>
                <li><span className="text-teal-400 text-xl mr-2">&bull;</span> Song Structure & Hooks</li>
                <li><span className="text-teal-400 text-xl mr-2">&bull;</span> Vocal Performance Coaching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        ref={(el) => (sectionsRef.current.portfolio = el)}
        className="py-20 px-4 bg-gray-800"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-teal-400 text-center mb-16">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden group">
              <img
                src="https://placehold.co/600x400/2d3748/a0aec0?text=Project+1"
                alt="Project 1"
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">"Urban Pulse" - Mixing & Mastering</h3>
                <p className="text-gray-400 mb-4">
                  A high-energy hip-hop track, mixed and mastered to perfection, showcasing dynamic range and clarity.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300 font-semibold"
                >
                  Listen Now <Music size={20} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden group">
              <img
                src="https://placehold.co/600x400/2d3748/a0aec0?text=Project+2"
                alt="Project 2"
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">"Midnight Groove" - Beat Production</h3>
                <p className="text-gray-400 mb-4">
                  An atmospheric R&B instrumental featuring lush synths and a smooth, driving rhythm.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300 font-semibold"
                >
                  Listen Now <Music size={20} className="ml-2" />
                </a>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden group">
              <img
                src="https://placehold.co/600x400/2d3748/a0aec0?text=Project+3"
                alt="Project 3"
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">"Rhyme & Reason" - Feature Verse</h3>
                <p className="text-gray-400 mb-4">
                  A powerful guest verse delivered on a collaborative track, showcasing lyrical depth and flow.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300 font-semibold"
                >
                  Listen Now <Music size={20} className="ml-2" />
                </a>
              </div>
            </div>
            {/* Add more portfolio items as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={(el) => (sectionsRef.current.contact = el)}
        className="py-20 px-4 bg-gray-900"
      >
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-teal-400 text-center mb-12">Get In Touch</h2>
          <p className="text-lg text-gray-300 text-center mb-10">
            Ready to elevate your sound? Fill out the form below or reach out directly.
          </p>
          <form className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 text-lg font-semibold mb-2">
                <User className="inline-block mr-2 text-teal-400" size={20} /> Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all duration-200"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 text-lg font-semibold mb-2">
                <Mail className="inline-block mr-2 text-teal-400" size={20} /> Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all duration-200"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-300 text-lg font-semibold mb-2">
                <MessageSquare className="inline-block mr-2 text-teal-400" size={20} /> Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all duration-200"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-4 bg-teal-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg mb-4">
              You can also find me on social media:
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Instagram size={32} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Twitter size={32} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <Youtube size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 px-4 text-center text-gray-400 text-sm">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} HBT. All rights reserved.</p>
          <p className="mt-2">Inspired by the masters of sound.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
