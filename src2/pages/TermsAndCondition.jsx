import { Link } from "react-router-dom";

export default function TermsAndCondition() {
  return (
    <div className="px-4 py-2">
      <h3 className="text-xl">Terms & Conditions</h3>
      <span>Last updated: 16/012024</span>
      <p>
        Welcome to eResults! By using our services, you agree to the following
        terms and conditions. Please read them carefully.
      </p>
      <div className="mt-4">
        <h4 className="text-xl">Acceptance of Terms</h4>
        <p>
          By accessing or using eResults, you agree to comply with and be bound
          by these terms and conditions.
        </p>
      </div>
      <div className="">
        <h4 className="text-xl">User Accounts</h4>
        <ul className="list-disc">
          <li>
            <span className="text-gray-600 font-semibold">
              Account Creation:
            </span>
            In order to use certain features of the service, you may be required
            to create an account. You agree to provide accurate and complete
            information during the registration process.
          </li>
          <li>
            <span className="text-gray-600 font-semibold">
              Account Security:{" "}
            </span>
            You are responsible for maintaining the security of your account
            credentials and for any activities that occur under your account.
            Notify us immediately of any unauthorized use or security breaches.
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h4 className="text-xl">Use of Services</h4>
        <ul className="list-disc">
          <li>
            <span className="text-gray-600 font-semibold">Permitted Use:</span>
            You agree to use eResults for its intended purpose, including
            accessing educational content, checking exam results, and other
            related services.
          </li>
          <li>
            <span className="text-gray-600 font-semibold">
              Prohibited Conduct:
            </span>
            <p>
              You may not engage in any activity that interferes with or
              disrupts the functionality of the service or its servers.
              Prohibited conduct includes, but is not limited to, unauthorized
              access, distribution of malware, and any form of harassment.
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h4 className="text-xl">Content</h4>
        <ul className="list-disc">
          <li>
            <p>
              <span className="text-gray-600 font-semibold">Ownership: </span>
              All content provided through eResults is either owned by us or
              licensed from third parties. You may not reproduce, distribute, or
              modify the content without our written permission.
            </p>
          </li>
          <li>
            <p>
              <span className="text-gray-600 font-semibold">
                User-Generated Content:
              </span>{" "}
              If the service allows users to submit content, you grant us a
              non-exclusive, transferable, royalty-free license to use, modify,
              and distribute your content for the purpose of providing and
              improving the service.
            </p>
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h4 className="text-xl">Privacy</h4>
        <ul className="list-disc">
          <li>
            <p>
              <span className="text-gray-600 font-semibold">Ownership: </span>
              Your use of eResults is also governed by our Privacy Policy, which
              can be found{" "}
              <Link className="text-blue-400" to="privacy">
                Our Privacy
              </Link>
            </p>
          </li>
        </ul>
      </div>
      <ul className="list-disc">
        <li className="mb-3">
          <p>
            <span className="text-gray-600 font-semibold">
              Modification of Terms:{" "}
            </span>
            We reserve the right to modify these terms and conditions at any
            time. The most current version will be available on our website.
            Continued use of the service after changes are made constitutes
            acceptance of the revised terms.
          </p>
        </li>
        <li className="mb-3">
          <span className="text-gray-600 font-semibold">Termination</span>
          We reserve the right to terminate or suspend your account and access
          to the service at our discretion, without prior notice, for any
          reason.
        </li>
        <li className="mb-3">
          <span className="text-gray-600 font-semibold">
            Limitation of Liability
          </span>
          To the maximum extent permitted by law, eResults and its affiliates
          shall not be liable for any direct, indirect, incidental,
          consequential, or punitive damages arising out of your use or
          inability to use the service.
        </li>
        <li className="mb-3">
          <span className="text-gray-600 font-semibold">Governing Law</span>
          These terms and conditions are governed by and construed in accordance
          with the laws of [Your Jurisdiction]. Any disputes arising from these
          terms shall be subject to the exclusive jurisdiction of the courts in
          [Your Jurisdiction].
        </li>
      </ul>
      <p className="mb-3">
        If you have any questions or concerns about these terms and conditions,
        please contact us at{" "}
        <a href="to:info@eresults.com">info@eresults.com</a>
      </p>
      <p>
        By using eResults, you agree to abide by these terms and conditions.
      </p>
    </div>
  );
}
