import React from "react";

const Terms = () => {
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
          <h1 className='text-4xl font-bold mb-4'>Terms of Service</h1>
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
              1. Agreement to Terms
            </h2>
            <p>
              By accessing and using this website, you accept and agree to be
              bound by the terms and provision of this agreement. If you do not
              agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              2. Use License
            </h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on the Axle website for
              personal, non-commercial transitory viewing only.
            </p>
            <p className='mt-4'>
              This is the grant of a license, not a transfer of title, and under
              this license you may not:
            </p>
            <ul className='list-disc list-inside mt-4 space-y-2'>
              <li>Modify or copy the materials</li>
              <li>
                Use the materials for any commercial purpose or for any public
                display
              </li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials
              </li>
              <li>
                Transfer the materials to another person or "mirror" the
                materials on any server
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              3. Disclaimer
            </h2>
            <p>
              The materials on the Axle website are provided on an 'as is'
              basis. Axle makes no warranties, expressed or implied, and hereby
              disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability,
              fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              4. Limitations
            </h2>
            <p>
              In no event shall Axle or its suppliers be liable for any damages
              (including, without limitation, damages for loss of data or
              profit, or due to business interruption) arising out of the use or
              inability to use the materials on the Axle website.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              5. Accuracy of Materials
            </h2>
            <p>
              The materials appearing on the Axle website could include
              technical, typographical, or photographic errors. Axle does not
              warrant that any of the materials on the website are accurate,
              complete, or current.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>6. Links</h2>
            <p>
              Axle has not reviewed all of the sites linked to its website and
              is not responsible for the contents of any such linked site. The
              inclusion of any link does not imply endorsement by Axle of the
              site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              7. Modifications
            </h2>
            <p>
              Axle may revise these Terms of Service for its website at any time
              without notice. By using this website, you are agreeing to be
              bound by the then current version of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-4'>
              8. Governing Law
            </h2>
            <p>
              These terms and conditions are governed by and construed in
              accordance with the laws of applicable jurisdiction, and you
              irrevocably submit to the exclusive jurisdiction of the courts in
              those locations.
            </p>
          </section>

          <section className='pt-8 border-t border-white/10'>
            <h2 className='text-2xl font-bold text-white mb-4'>
              Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <div className='mt-4 p-4 bg-white/5 rounded-lg'>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href='mailto:legal@axle.com'
                  className='text-blue hover:text-blue-hover'
                >
                  legal@axle.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
