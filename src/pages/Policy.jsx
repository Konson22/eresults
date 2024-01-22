export default function Policy() {
  return (
    <div className="md:mx-[25%] md:bg-white md:shadow-md md:p-8 p-4">
      <h3 className="text-xl text-gray-600">User Conduct Policy</h3>
      <span className="text-sm">Last updated:20/01/2024</span>
      <p className="mt-3">
        Welcome to eResults! We are committed to providing a positive and
        inclusive learning environment. By using our services, you agree to
        adhere to the following User Conduct Policy.
      </p>
      <div className="my-6">
        <ul className="list-disc px-3">
          <li className="mb-2">
            <span className="text-gray-600">Respectful Behavior: </span>
            Treat Others With Respect: Interact with fellow users, instructors,
            and administrators with courtesy and respect. Refrain from engaging
            in any form of harassment, discrimination, or offensive behavior.
          </li>
          <li className="mb-2">
            <span className="text-gray-600">Civility: </span>
            Communicate in a constructive and civil manner. Avoid using language
            that is threatening, abusive, or disrespectful.
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="font-bold mb-2">Prohibited Content and Activities</h4>
        <ul className="list-disc px-3">
          <li className="mb-2">
            <span className="text-gray-600">Illegal Activities: </span>
            Do not engage in any activities that violate local, national, or
            international laws.
          </li>
          <li className="mb-2">
            <span className="text-gray-600">Inappropriate Content: </span>
            Do not post or share content that is offensive, sexually explicit,
            discriminatory, or otherwise inappropriate.
          </li>
          <li className="mb-2">
            <span className="text-gray-600">Spam: </span>
            Do not engage in spamming, including the unauthorized promotion of
            products, services, or other web apps.
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="font-bold mb-2">Intellectual Property</h4>
        <ul className="list-disc px-3">
          <li className="mb-2">
            <span className="text-gray-600">Respect Copyright: </span>
            Do not upload, share, or distribute content that infringes on the
            intellectual property rights of others. Only upload content for
            which you own the necessary rights or have obtained proper
            permission.
          </li>
          <li className="mb-2">
            <span className="text-gray-600">Plagiarism: </span>
            Do not engage in plagiarism. Properly attribute and cite sources
            when using external content.
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="font-bold mb-2">Security</h4>
        <ul className="list-disc px-3">
          <li className="mb-2">
            <span className="text-gray-600">Unauthorized Access: </span>
            Do not attempt to gain unauthorized access to accounts, systems, or
            data.
          </li>
          <li className="mb-2">
            <span className="text-gray-600">Malicious Activities: </span>
            Do not engage in any form of hacking, phishing, or other malicious
            activities that compromise the security of the platform or its
            users.
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="font-bold mb-2">Reporting Violations</h4>
        <ul className="list-disc px-3">
          <li className="mb-2">
            <span className="text-gray-600">Reporting: </span>
            If you encounter any user conduct that violates this policy, please
            report it to{" "}
            <a className="text-blue-400" href="mailto:info@eresults.ss.com.">
              info@eresults.ss.com.
            </a>{" "}
            or via <span className="text-blue-400">Our Reporting system</span>
          </li>
          <li className="mb-2">
            <span className="text-gray-600">False Reports: </span>
            Do not submit false reports. Misuse of the reporting system may
            result in disciplinary action.
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="font-bold mb-2">Disciplinary Actions</h4>
        <ul className="list-disc px-3">
          <li className="mb-2">
            <span className="text-gray-600">Violation Consequences: </span>
            Violation of this User Conduct Policy may result in temporary or
            permanent suspension of your account, removal of content, and other
            appropriate actions.
          </li>
          <li className="mb-2">
            <span className="text-gray-600">Appeals: </span>
            Users have the right to appeal disciplinary actions. Contact{" "}
            <a className="text-blue-400" href="mailto:info@eresults.ss.com.">
              info@eresults.ss.com.
            </a>{" "}
            to initiate an appeal.
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h4 className="font-bold mb-2">Changes to the Policy</h4>
        <p className="">
          We reserve the right to update and modify this User Conduct Policy.
          Users will be notified of any significant changes.
        </p>
      </div>
      <div className="">
        <h4 className="font-bold mb-2">Contact Us</h4>
        If you have any questions or concerns about this User Conduct Policy,
        please contact us at info@eresults.ss.com
        <p className="mt-6">
          By using eResults, you agree to abide by this User Conduct Policy.
        </p>
      </div>
    </div>
  );
}
