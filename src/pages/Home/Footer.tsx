export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-center text-sm py-4 mt-8">
      <div className="container mx-auto px-4">
        <p className="text-gray-600 mb-2">
          © {currentYear} Proxy-Pilot. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/privacy" className="text-gray-600 hover:text-gray-800">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-600 hover:text-gray-800">
            Terms of Service
          </a>
          <a href="/support" className="text-gray-600 hover:text-gray-800">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
