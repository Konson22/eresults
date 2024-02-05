export default function TermsAndCondition() {
  return (
    <div className="md:mx-[25%] md:bg-white md:shadow-md md:p-8 p-4">
      <h3 className="text-xl">Terms & Conditions</h3>
      <p>
        By using our services, you agree to the following terms and conditions.
        Please read them carefully.
      </p>
      <div className="my-6">
        <ul className="list-disc px-3">
          {data.map((info) => (
            <li className="mb-2">
              <h4 className="font-semibold">{info.title}</h4>
              <p>{info.text}</p>
            </li>
          ))}
        </ul>
      </div>
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

const data = [
  {
    title: "Acceptance of Terms",
    text: `
    By accessing or using eResults, you agree to comply with and be bound by these terms and conditions.`,
  },
  {
    title: " Account Creation:",
    text: `In order to use certain features of the service, you may be required to create an account. You agree to provide accurate and complete information during the registration process.
    `,
  },
  {
    title: "Account Security:",
    text: `You are responsible for maintaining the security of your account credentials and for any activities that occur under your account. Notify us immediately of any unauthorized use or security breaches.`,
  },
  {
    title: "Permitted Use:",
    text: `You agree to use eResults for its intended purpose, including accessing educational content, checking exam results, and other related services.
    `,
  },
  {
    title: "Prohibited Conduct:",
    text: `You may not engage in any activity that interferes with or disrupts the functionality of the service or its servers. Prohibited conduct includes, but is not limited to, unauthorized access, distribution of malware, and any form of harassment.`,
  },
  {
    title: "Ownership:",
    text: `All content provided through eResults is either owned by us or licensed from third parties. You may not reproduce, distribute, or modify the content without our written permission.
    `,
  },
  {
    title: "User-Generated Content: ",
    text: `If the service allows users to submit content, you grant us a non-exclusive, transferable, royalty-free license to use, modify, and distribute your content for the purpose of providing and improving the service.`,
  },
  {
    title: "Ownership:",
    text: `Your use of eResults is also governed by our Privacy Policy, which can be found Our Privacy
    `,
  },
  {
    title: "Modification of Terms:",
    text: `We reserve the right to modify these terms and conditions at any time. The most current version will be available on our website. Continued use of the service after changes are made constitutes acceptance of the revised terms.`,
  },
  {
    title: "Termination",
    text: `We reserve the right to terminate or suspend your account and access to the service at our discretion, without prior notice, for any reason.`,
  },
  {
    title: "Limitation of Liability",
    text: `To the maximum extent permitted by law, eResults and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use the service.`,
  },
  {
    title: "Governing Law:",
    text: `These terms and conditions are governed by and construed in accordance with the laws of South Sudan Jurisdiction Act 2015. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in South Sudan Jurisdiction Act 2015.`,
  },
];
