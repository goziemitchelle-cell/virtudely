import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto text-black">

        <h1 className="text-4xl font-bold mb-6 text-green-600">
          Privacy Policy
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <p className="mb-6 leading-relaxed">
          At <strong>VirtuDely</strong>, your privacy is important to us.
          This Privacy Policy explains how we collect, use, and protect your
          information when you use our platform.
        </p>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          1. Information We Collect
        </h2>
        <p className="mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Personal information (name, email address, phone number)</li>
          <li>Business and hiring requirements</li>
          <li>Usage data (how you interact with our platform)</li>
          <li>Communication data (messages, inquiries, support requests)</li>
        </ul>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>To connect businesses with qualified talent</li>
          <li>To improve our platform and services</li>
          <li>To communicate updates, offers, or support</li>
          <li>To ensure platform security and prevent misuse</li>
        </ul>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Sharing of Information
        </h2>
        <p className="mb-4">
          We do not sell your personal data. We may share information:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>With trusted partners involved in delivering our services</li>
          <li>When required by law or legal processes</li>
          <li>To protect our rights, users, and platform integrity</li>
        </ul>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          4. Data Security
        </h2>
        <p className="mb-6 leading-relaxed">
          We implement industry-standard security measures to protect your
          information. However, no system is completely secure, and we cannot
          guarantee absolute protection.
        </p>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          5. Your Rights
        </h2>
        <p className="mb-4">
          You have the right to:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Access the data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Opt out of marketing communications</li>
        </ul>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          6. Cookies & Tracking
        </h2>
        <p className="mb-6 leading-relaxed">
          We may use cookies and similar technologies to improve user experience,
          analyze traffic, and personalize content.
        </p>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          7. Changes to This Policy
        </h2>
        <p className="mb-6 leading-relaxed">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated revision date.
        </p>

        {/* SECTION */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          8. Contact Us
        </h2>
        <p className="leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <p>Email: contact@virtudely.com</p>
          <p>Phone: +234 800 000 0000</p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;