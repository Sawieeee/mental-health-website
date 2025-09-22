export default function ServicesPage() {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">📚 Educational Resources</h2>
            <p className="text-gray-600">
              Articles, videos, and infographics covering stress, anxiety, depression, 
              and self-care techniques.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">🤝 Support Groups</h2>
            <p className="text-gray-600">
              Safe, virtual forums where users can share experiences and provide 
              peer-to-peer support.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">📝 Self-Assessment Tools</h2>
            <p className="text-gray-600">
              Basic mental health self-assessment quizzes to help users reflect 
              on their emotional well-being.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">👩‍⚕️ Professional Directory</h2>
            <p className="text-gray-600">
              Access a list of mental health professionals, hotlines, and counseling 
              services to get the help you need.
            </p>
          </div>
        </div>
      </div>
    );
  }
  