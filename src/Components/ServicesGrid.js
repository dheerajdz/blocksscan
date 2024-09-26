const services = [
    { id: 1, icon: '/images/agile.png',heading:'Devops', text: 'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem' },
    { id: 2, icon: '/images/fullstack.png', heading:'Full Stack Products',text: 'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem' },
    { id: 3, icon: '/images/settings.png',heading:'Tooling' ,text: 'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem' },
    { id: 4, icon: '/images/seo.png', heading:'Research',text: 'A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem' }
  ];
  
  // Services Grid Component
  const ServicesGrid = () => {
    return (
      <div className="grid-container">
        {services.map(service => (
          <div key={service.id} className="card">
            <div className="service-icon-container">
            <div className="service-icon-background">
              <img src={service.icon} alt={`${service.heading} icon`} />
            </div>
          </div>
            <div className="text">{service.heading}</div>
            <div className="desc"> {service.text} </div> 
            </div>
        ))}
      </div>
    );
  };


  export default ServicesGrid