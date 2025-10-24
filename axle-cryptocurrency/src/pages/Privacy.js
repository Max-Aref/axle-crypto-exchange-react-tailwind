import React from "react";

const Privacy = () => {
  return (
    <div className='min-h-screen bg-darkblue text-white py-16'>
      <div className='container mx-auto max-w-3xl px-4'>
        {/* Header */}
        <div className='mb-12'>
          <a
            href='/'
            className='text-blue hover:text-blue-hover transition mb-4 inline-block'
          >
            ← Back to Home
          </a>
          <h1 className='text-4xl font-bold mb-4'>Privacy Policy</h1>
          <p className='text-gray-400'>
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Content */}
        <div className='space-y-8 text-gray-300 leading-relaxed'>
          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              1. Introduction
            </h2>
            <p>
              Axle Cryptocurrency ("we", "us", "our" or "Company") operates the
              axle-crypto.com website (the "Service").
            </p>
            <p>
              This page informs you of our policies regarding the collection,
              use, and disclosure of personal data when you use our Service and
              the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              2. Information Collection and Use
            </h2>
            <p>
              We collect several different types of information for various
              purposes to provide and improve our Service to you.
            </p>
            <ul className='list-disc list-inside mt-4 space-y-2'>
              <li>
                <strong>Email Address:</strong> For newsletter subscriptions and
                account communications
              </li>
              <li>
                <strong>Usage Data:</strong> Device information, browser type,
                pages visited via cookies
              </li>
              <li>
                <strong>Form Data:</strong> Information provided in contact or
                trading forms
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              3. Security of Data
            </h2>
            <p>
              The security of your data is important to us, but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Data, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              4. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <div className='mt-4 p-4 bg-white/5 rounded-lg'>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href='mailto:privacy@axle.com'
                  className='text-blue hover:text-blue-hover'
                >
                  privacy@axle.com
                </a>
              </p>
              <p>
                <strong>Address:</strong> Axle Crypto HQ, Digital District
              </p>
            </div>
          </section>

          <section className='pt-8 border-t border-white/10'>
            <p className='text-xs text-gray-500'>
              This Privacy Policy is subject to change without notice. Your
              continued use of our Service following the posting of revised
              Privacy Policy means that you accept and agree to the changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
