export default function Footer() {
    return (
      <footer className="bg-blue-600 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          
          {/* Left side - Branding */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-lg font-bold">4U Mental Health Platform</h2>
            <p className="text-sm text-blue-100">
              Supporting awareness, education, and well-being.
            </p>
          </div>
  
          {/* Middle - Navigation */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
  
          {/* Right side - Copyright */}
          <div className="text-sm text-blue-100 text-center md:text-right">
            © {new Date().getFullYear()} 4U. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  