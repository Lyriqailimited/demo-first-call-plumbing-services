'use client'

const SERVICES = ["Emergency plumbing repairs", "Leak detection", "Burst pipes", "Boiler servicing", "Bathroom installations", "Drain unblocking"];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="relative py-24 px-6 text-white text-center" style={{background: 'linear-gradient(135deg, #1e40af 0%, #2563ebcc 100%)'}}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">First Call Plumbing Services</h1>
          <p className="text-xl mb-8 opacity-90">Professional plumbing services in Edinburgh - available 24/7</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#widget" className="bg-white font-semibold px-8 py-3 rounded-full shadow hover:shadow-lg transition-shadow" style={{color: '#2563eb'}}>
              Try AI Receptionist
            </a>
            <a href="tel:+441316691007" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-colors">
              Call +44 131 669 1007
            </a>
          </div>
        </div>
      </section>
      <section id="widget" className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Speak to Our AI Receptionist</h2>
          <iframe src="/widget.html" title="AI Voice Receptionist" width="100%" height="600" style={{border: 'none', borderRadius: '12px'}} />
        </div>
      </section>
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full mb-4 flex items-center justify-center" style={{backgroundColor: '#2563eb22'}}>
                  <span className="text-lg">🔧</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{service}</h3>
                <p className="text-sm text-gray-500">Professional service in Edinburgh</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Why an AI Receptionist?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🕐', title: '24/7 Availability', desc: 'Never miss a call - your AI receptionist answers day and night, even on weekends and holidays.' },
              { icon: '📅', title: 'Instant Booking', desc: 'Customers can book appointments instantly without waiting on hold or leaving a voicemail.' },
              { icon: '📞', title: 'Never Miss a Call', desc: 'Every enquiry is captured and handled professionally, growing your business while you work.' },
            ].map((f, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 text-white text-center" style={{backgroundColor: '#2563eb'}}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Never Miss a Call?</h2>
          <p className="mb-8 opacity-90">Book a free demo and see how AI can transform your Edinburgh plumbing business.</p>
          <a href={process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_LINK || '#book'}
            className="bg-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow inline-block"
            style={{color: '#2563eb'}}>
            Book a Demo Call
          </a>
        </div>
      </section>
      <footer className="py-8 px-6 bg-gray-900 text-gray-400 text-center text-sm">
        <p>&copy; 2026 First Call Plumbing Services &middot; Edinburgh &middot; +44 131 669 1007</p>
        <p className="mt-1 text-xs">Powered by <span className="text-white">Lyriq AI</span></p>
      </footer>
    </main>
  )
}
