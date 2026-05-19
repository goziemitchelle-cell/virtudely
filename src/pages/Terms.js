import React from "react";

const Terms = () => {
  return (
    <div className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto text-black">

        <h1 className="text-4xl font-bold mb-6 text-green-600">
          Terms & Conditions
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <p className="mb-6 leading-relaxed">
          Welcome to <strong>VirtuDely</strong>. By accessing or using our
          platform, you agree to comply with and be bound by these Terms &
          Conditions. Please read them carefully.
        </p>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          1. Use of Our Platform
        </h2>
        <p className="mb-4">
          VirtuDely provides a platform that connects businesses with skilled
          professionals. You agree to use the platform only for lawful purposes
          and in accordance with these terms.
        </p>

        <ul className="list-disc ml-6 space-y-2">
          <li>You must provide accurate and complete information</li>
          <li>You must not misuse or attempt to disrupt the platform</li>
          <li>You are responsible for your interactions with other users</li>
        </ul>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. Accounts & Responsibilities
        </h2>
        <p className="mb-6 leading-relaxed">
          You are responsible for maintaining the confidentiality of your account
          and any activities that occur under it. VirtuDely is not liable for
          unauthorized access resulting from your actions.
        </p>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Talent & Hiring Disclaimer
        </h2>
        <p className="mb-4">
          VirtuDely acts as a connection platform and does not guarantee:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>The performance or reliability of any talent</li>
          <li>Successful hiring outcomes</li>
          <li>Continuous availability of candidates</li>
        </ul>

        <p className="mt-4">
          All hiring decisions and engagements are the responsibility of the user.
        </p>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          4. Payments & Services
        </h2>
        <p className="mb-6 leading-relaxed">
          Certain services may require payment. By purchasing, you agree to the
          pricing and billing terms presented at the time of transaction.
          Payments are non-refundable unless stated otherwise.
        </p>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          5. Intellectual Property
        </h2>
        <p className="mb-6 leading-relaxed">
          All content, branding, and materials on VirtuDely are the property
          of the platform and may not be copied, distributed, or used without
          permission.
        </p>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          6. Limitation of Liability
        </h2>
        <p className="mb-6 leading-relaxed">
          VirtuDely is not liable for any indirect, incidental, or
          consequential damages resulting from your use of the platform.
        </p>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          7. Termination
        </h2>
        <p className="mb-6 leading-relaxed">
          We reserve the right to suspend or terminate access to the platform at
          any time if these terms are violated.
        </p>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          8. Changes to Terms
        </h2>
        <p className="mb-6 leading-relaxed">
          We may update these Terms & Conditions from time to time. Continued use
          of the platform means you accept any changes.
        </p>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          9. Contact Information
        </h2>
        <p className="leading-relaxed">
          For any questions regarding these terms, please contact us:
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p>Email: contact@virtudely.com</p>
          <p>Phone: +234 800 000 0000</p>
        </div>

      </div>
    </div>
  );
};

export default Terms;