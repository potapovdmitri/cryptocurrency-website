import React from "react";

const Contacts = () => {
  return (
    <div>
      <h1>Get in touch with us</h1>
      <dl>
        <dt>Call us</dt>
            <dd><a href="tel:000-000-00-00">000-000-00-00</a></dd>
            <dd><a href="tel:001-001-01-01">001-001-01-01</a></dd>
        <dt>Our socials</dt>
            <dd><a href="https://facebook.com/">Facebook</a></dd>
            <dd><a href="https://twitter.com/">Twitter</a></dd>
            <dd><a href="https://discord.com/">Discord</a></dd>
      </dl>
    </div>
  );
};

export default Contacts;
