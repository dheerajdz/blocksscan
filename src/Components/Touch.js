function Touch() {
    return (
      <section className="background">
        <div className="image">
          <img src="Group 133.svg" alt="world" className="globe-image" />
          <div className="form-container">
            <h1 className="touch">Get in Touch</h1>
            <p>A good design is not only aesthetically pleasing, but also functional.<br />
              It should be able to solve the problem.</p>
  
            <input type="text" placeholder="Email" className="input1" />
            <input type="text" placeholder="Name" className="input1" />
            <input type="text" placeholder="Message" className="input3" />
  
            <button className="submit-btn">Get in Touch</button>
          </div>
        </div>
      </section>
    );
  }
  
  export default Touch;