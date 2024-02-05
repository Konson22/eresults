export default function Privacy() {
  return (
    <div className="md:mx-[25%] md:bg-white md:shadow-md md:p-8 p-4">
      <h3 className="text-xl text-gray-600">Privacy Policy</h3>
      <span className="text-sm">Last updated:20/01/2024</span>
      <p>
        Thank you for using eResults! This Privacy Policy is designed to help
        you understand how we collect, use, and safeguard your personal
        information.
      </p>
      <div className="my-6">
        <h4 className="font-bold mb-2">Information We Collect</h4>
        <ul className="list-disc px-3">
          <li className="mb-2">
            <span className="text-gray-600">Account Information:</span>
            <p>
              When you create an account, we collect personal information such
              as your name, email address, and password.
            </p>
          </li>
          <li className="mb-2">
            <span className="text-gray-600">Learning Data:</span>
            <p>
              We may collect information about your learning activities on the
              platform, such as courses accessed, progress, and performance.
            </p>
          </li>
          <li className="mb-2">
            <span className="text-gray-600">Exam Results:</span>
            <p>
              If applicable, we collect and store your exam results securely.
            </p>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="font-bold mb-2">How We Use Your Information</h4>
        <ul className="list-disc px-3">
          <li className="mb-2">
            <span className="text-gray-600">Personalization:</span>
            <p>
              We use your account information to personalize your learning
              experience and provide relevant content.
            </p>
          </li>
          <li className="mb-2">
            <span className="text-gray-600">Communication:</span>
            <p>
              We may use your email address to send important updates,
              notifications, and information related to your account.
            </p>
          </li>
          <li className="mb-2">
            <span className="text-gray-600">Analytics:</span>
            <p>
              We use aggregated and anonymized data for analytics purposes to
              improve our services and understand user behavior.
            </p>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="font-bold mb-2">Data Security</h4>
        <ul className="list-disc px-3">
          <li className="mb-2">
            <span className="text-gray-600">Encryption:</span>
            <p>Your data is transmitted securely using encryption protocols.</p>
          </li>
          <li className="mb-2">
            <span className="text-gray-600">Access Controls:</span>
            <p>
              We have implemented strict access controls to limit access to your
              personal information to authorized personnel only.
            </p>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="font-bold mb-2">Sharing Your Information</h4>
        <ul className="list-disc px-3">
          <li className="mb-2">
            <span className="text-gray-600">Third-Party Services: </span>
            We may use third-party services to facilitate our services. These
            services may have their own privacy policies, and we encourage you
            to review them.
          </li>
          <li className="mb-2">
            <span className="text-gray-600">Legal Compliance: </span>
            We may disclose your information if required by law or in response
            to a valid legal request.
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="font-bold mb-2">Your Choices</h4>
        <ul className="list-disc px-3">
          <li className="mb-2">
            <span className="text-gray-600">Account Settings: </span>
            You can review and update your account information through the
            account settings page.
          </li>
          <li className="mb-2">
            <span className="text-gray-600">Communication Preferences: </span>
            You can choose to opt-out of certain communications through your
            account settings.
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <ul className="list-disc px-3">
          <li className="mb-2">
            <span className="text-gray-600">Children's Privacy: </span>
            Our services are not directed to individuals under the age of 13. If
            you are a parent or guardian and believe that your child has
            provided personal information, please contact us, and we will take
            steps to remove such information.
          </li>
          <li className="">
            <span className="text-gray-600">
              Changes to This Privacy Policy:{" "}
            </span>
            We may update this Privacy Policy periodically. We will notify you
            of any significant changes by email or by prominently posting a
            notice on our website.
          </li>
        </ul>
      </div>
      <div className="">
        <h4 className="font-bold mb-2">Contact Us</h4>
        Contact Us If you have any questions or concerns about this Privacy
        Policy, please contact us at info@eresults.ss.com.
        <p className="mt-6">
          By using eResults, you agree to the terms outlined in this Privacy
          Policy.
        </p>
      </div>
    </div>
  );
}
