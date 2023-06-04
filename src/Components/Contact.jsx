import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1 className="title">Contact Me</h1>
        <div>
          <div className="contact-left">
            <div className="text">Get in Touch</div>
            <p>
              If you are a fontend and backend developer and want to work with
              me on a project and you want help regarding developing websites
              then contact me via filling the Form
            </p>

            <div className="icon">
              <div className="info">
                <div className="head">Name</div>
                <div className="sub-title">Anup Kumar</div>
              </div>
            </div>

            <div className="icon">
              {/* <PersonIcon /> */}
              <div className="info">
                <div className="head">Address</div>
                <div className="sub-title">Bihar , India</div>
              </div>
            </div>

            <div className="icon">
              {/* <ImportContacts /> */}
              <div className="info">
                <div className="head">Email</div>
                <div className="sub-title">
                  <a href="mailto:anupk2622@gmail.com">anupk2622@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="icon">
              {/* <PersonIcon /> */}
              <div className="info">
                <div className="head">Number</div>
                <div className="sub-title">
                  <a href="tel:9470899107">(+91)-9470899107</a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <form action="">
              <div>
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="name"
                  // pattern="[A-Za-z]{3}"
                  title="Name can't be less then 3 letter"
                  required
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="">Number</label>
                <input
                  type="text"
                  name="number"
                  title=""
                  placeholder="987654321"
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="John@example.com"
                />
              </div>
              <div>
                <label htmlFor="">Message</label>
                <input
                  type="text"
                  name="message"
                  required
                  placeholder="Hii , Dev "
                />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
