const Services = () => {
    const services = ["Web Development", "UI/UX Design", "SEO Optimization"];
  
    return (
      <section id="services" className="p-8">
        <h2 className="text-3xl font-bold">Services</h2>
        <ul className="mt-4">
          {services.map((service, index) => (
            <li key={index} className="p-4 bg-gray-200 shadow-md my-2">
              {service}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Services;
  