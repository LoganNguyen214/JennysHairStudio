import React from "react";

export default function HairSalonHomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 shadow-md">
        <div className="text-2xl font-bold">Glow Hair Studio</div>
        <ul className="flex gap-6">
          <li><a href="#services" className="hover:text-pink-500">Services</a></li>
          <li><a href="#gallery" className="hover:text-pink-500">Gallery</a></li>
          <li><a href="#stylists" className="hover:text-pink-500">Stylists</a></li>
          <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>
          <li><a href="#book" className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">Book Now</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600891963935-c9e8f0d7fd0b')" }}>
        <div className="bg-black bg-opacity-50 p-10 rounded-xl text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Where Style Meets Confidence</h1>
          <p className="text-lg md:text-xl mb-6">Book your next look with our expert stylists</p>
          <a href="#book" className="bg-pink-500 px-6 py-3 rounded-full text-white hover:bg-pink-600">Book an Appointment</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Haircuts', 'Color & Highlights', 'Keratin Treatments'].map(service => (
            <div key={service} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600">Professional {service.toLowerCase()} tailored to your unique style.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-2">123 Main St, Hometown, USA</p>
        <p className="text-lg mb-2">(123) 456-7890</p>
        <p className="text-lg">glowhairstudio@example.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Glow Hair Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}
