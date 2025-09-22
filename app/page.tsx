export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-600 text-white">
        <h1 className="text-5xl font-bold mb-4"style={{ color: "white" }}>Welcome to 4U</h1>
        <p className="text-lg max-w-2xl">
          A Companion Web-based Application for Mental Health Awareness. 
          Learn, connect, and take care of your mental well-being.
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="/resources"
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Explore Resources
          </a>
          <a
            href="/(auth)/login"
            className="bg-transparent border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          We are dedicated to improving mental health awareness by providing 
          education, support, and resources for those in need. Our goal is to 
          reduce stigma, promote self-care, and empower individuals to seek help.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-10" >What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2" style={{ color: "black" }}>📚 Resources</h3>
            <p className="text-gray-600">Educational articles, videos, and infographics on mental health topics.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2" style={{ color: "black" }}>🤝 Support Groups</h3>
            <p className="text-gray-600">Join safe, virtual spaces to share and connect with others.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2" style={{ color: "black" }}>📝 Assessments</h3>
            <p className="text-gray-600">Take self-assessment quizzes to reflect on your mental well-being.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2" style={{ color: "black" }}>👩‍⚕️ Directory</h3>
            <p className="text-gray-600">Find professional help with our list of counselors and hotlines.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Take the First Step Today</h2>
        <p className="mb-6">
          Your mental health matters. Join us in breaking the stigma and promoting well-being.
        </p>
        <a
          href="/(auth)/login"
          className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Join Now
        </a>
      </section>
    </div>
  );
}
