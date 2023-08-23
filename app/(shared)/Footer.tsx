import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            reiciendis officia soluta cum odit esse odio assumenda eveniet, ea
            velit optio, unde est eligendi culpa nisi reprehenderit hic incidunt
            magnam.
          </p>
          <p>© Blog of the Future All Rights Reserved.</p>
        </div>
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Some random link again</p>
          <p>Ullamcorper vivamus</p>
        </div>
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Kebab00</p>
          <p className="my-5">im.kebab00@gmail.com</p>
          <p>(+82)10-5837-7010</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
