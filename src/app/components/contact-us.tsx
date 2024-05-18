'use client';

import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white p-10">
      <div id="contact-us" className="anchor" />
      <div className="container mx-auto text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-4xl mb-3 sm:mb-6 text-black">
          Get in touch
        </h2>
<button onClick={() => window.location.href = 'mailto:sales@cloudprox.co.za'} className="rounded-full inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Contact us
      </button>
      </div>
    </div>
  );
};

export default ContactUs;
