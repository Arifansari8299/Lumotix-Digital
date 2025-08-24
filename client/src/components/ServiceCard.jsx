export default function ServicesCard() {
  const services = [
    {
      title: "Web Development",
      desc: "Modern and responsive websites with React, Angular & Tailwind.",
      icon: "💻",
    },
    {
      title: "App Development",
      desc: "Cross-platform mobile applications using React Native.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful and intuitive interfaces for better user experience.",
      icon: "🎨",
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
