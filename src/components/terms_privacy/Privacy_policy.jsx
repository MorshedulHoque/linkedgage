import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white p-6 md:p-12 lg:px-48">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="mb-2 pt-6">Effective Date: [11/11/2024]</p>
      <p className="mb-6 pt-2">
        <strong>LinkedGage</strong> (“we”, “us”, “our”) respects your privacy and is committed to protecting your information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service. By using LinkedGage, you agree to the terms of this policy.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        <strong>Personal Information:</strong> When you sign up, we collect only essential personal information, such as your email address, to manage your account and enable core features.
      </p>
      <p className="mb-4">
        <strong>Usage Data:</strong> We collect non-personal, aggregated usage data such as the number of comments generated and tone preferences. This information helps us optimize LinkedGage and improve your experience.
      </p>
      <p className="mb-4">
        <strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar technologies to track usage patterns and enhance the user experience. You can choose to disable cookies in your browser, though this may limit certain features.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Operate and improve our services, ensuring smooth functionality and better user experience.</li>
        <li>Personalize your experience by storing your comment preferences and tone selections.</li>
        <li>Communicate essential service-related updates and notifications.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell, rent, or disclose your personal information to third parties for marketing purposes. We may share information with trusted third-party service providers solely to support our operations, such as data storage or technical support. All third parties follow strict data handling practices.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We implement industry-standard security measures to safeguard your information. However, please note that no system is entirely secure. While we strive to protect your data, we cannot guarantee its absolute security.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Retention</h2>
      <p className="mb-4">
        We retain your data only as long as necessary to fulfill the purposes outlined in this policy. You may request data deletion or account termination by contacting us at [Contact Email].
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        Depending on your jurisdiction, you may have the right to:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Access your data and receive a copy of it.</li>
        <li>Correct any inaccuracies.</li>
        <li>Request deletion of your data.</li>
        <li>Withdraw consent where applicable.</li>
      </ul>
      <p className="mb-4">To exercise any of these rights, please contact us at <strong>linkedgage@gmail.com</strong>.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Updates will be posted on this page, and the "Effective Date" will be modified accordingly. Continued use of LinkedGage indicates acceptance of these changes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="mb-4">
        For questions, concerns, or requests regarding this Privacy Policy, please reach out to us at <strong>linkedgage@gmail.com</strong>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
