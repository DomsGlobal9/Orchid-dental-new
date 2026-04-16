import React from 'react';
import { 
  User, 
  Settings, 
  ShieldCheck, 
  Share2, 
  UserCheck, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const PrivacyHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#ffffff]  py-16 px-4 font-sans text-white">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full border border-purple-500/30 bg-purple-500/10">
            <ShieldCheck className="text-purple-400 w-8 h-8" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl text-[#0f172a] font-bold mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Your privacy is important to us. This policy outlines how Orchid Dental Care collects, uses, and protects your personal information.
        </p>
        <p className="text-sm text-gray-500 mt-2 italic">Last updated: March 10, 2026</p>
      </div>

      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-16 text-gray-800">
        <p className="mb-10 text-gray-600 leading-relaxed">
          At Orchid Dental Care, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our dental practice or use our services.
        </p>

        <div className="space-y-12">
          {/* Section 1: Information We Collect */}
          <section className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <User className="text-purple-600 w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <p className="text-gray-600 mb-4">We may collect the following types of information:</p>
            <ul className="space-y-3 pl-4 border-l-2 border-purple-100">
              <li><strong className="text-gray-900">Personal Information:</strong> Name, date of birth, contact details (email, phone number, address).</li>
              <li><strong className="text-gray-900">Medical Information:</strong> Dental history, treatment records, X-rays, photographs, insurance information.</li>
              <li><strong className="text-gray-900">Financial Information:</strong> Payment details, billing information, insurance claims.</li>
              <li><strong className="text-gray-900">Usage Data:</strong> Website browsing behavior, IP address, device information.</li>
            </ul>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Settings className="text-purple-600 w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <p className="text-gray-600 mb-4">We use your information for the following purposes:</p>
            <ul className="space-y-2 list-disc pl-6 text-gray-600">
              <li>Providing dental care services and treatment.</li>
              <li>Scheduling appointments and sending reminders.</li>
              <li>Processing payments and insurance claims.</li>
              <li>Maintaining accurate medical and dental records.</li>
              <li>Communicating about your treatment and oral health.</li>
              <li>Improving our services and patient experience.</li>
              <li>Complying with legal and regulatory requirements.</li>
            </ul>
          </section>

          {/* Section 3: Information Security */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <ShieldCheck className="text-purple-600 w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Information Security</h2>
            </div>
            <p className="text-gray-600 mb-4">We implement appropriate technical and organizational measures to protect your personal information:</p>
            <ul className="space-y-2 list-disc pl-6 text-gray-600">
              <li>Secure storage of physical and electronic records.</li>
              <li>Encryption of sensitive data during transmission.</li>
              <li>Access controls and authentication measures.</li>
              <li>Regular security audits and reviews.</li>
              <li>Staff training on data protection and confidentiality.</li>
              <li>Secure backup and disaster recovery procedures.</li>
            </ul>
          </section>

          {/* Section 4: Information Sharing */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Share2 className="text-purple-600 w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Information Sharing</h2>
            </div>
            <p className="text-gray-600 mb-4">We may share your information with the following circumstances:</p>
            <div className="space-y-4 pl-4 border-l-2 border-purple-100">
              <p><strong className="text-gray-900">Healthcare Providers:</strong> With other dental specialists or healthcare professionals involved in your care.</p>
              <p><strong className="text-gray-900">Insurance Companies:</strong> For processing claims and verifying coverage.</p>
              <p><strong className="text-gray-900">Legal Requirements:</strong> When required by law, court order, or regulatory authority.</p>
              <p><strong className="text-gray-900">Service Providers:</strong> With trusted third-party service providers who assist in our operations (under strict confidentiality agreements).</p>
            </div>
            <p className="mt-4 italic text-gray-500">We will never sell your personal information to third parties.</p>
          </section>

          {/* Section 5: Your Rights */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <UserCheck className="text-purple-600 w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Your Rights</h2>
            </div>
            <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
            <ul className="space-y-3 pl-4">
              <li><strong className="text-gray-900">Access:</strong> Request access to your personal and medical records.</li>
              <li><strong className="text-gray-900">Correction:</strong> Request correction of inaccurate or incomplete information.</li>
              <li><strong className="text-gray-900">Deletion:</strong> Request deletion of your information (subject to legal requirements).</li>
              <li><strong className="text-gray-900">Restriction:</strong> Request restriction of processing in certain circumstances.</li>
              <li><strong className="text-gray-900">Objection:</strong> Object to processing of your information for certain purposes.</li>
              <li><strong className="text-gray-900">Portability:</strong> Request the transfer of your information to another provider.</li>
            </ul>
          </section>

          {/* Additional Sections */}
          <div className="space-y-8 pt-6 border-t border-gray-100">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cookies and Tracking</h3>
              <p className="text-gray-600 leading-relaxed">Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us:</p>
              <ul className="list-disc pl-6 mt-2 text-gray-600">
                <li>Remember your preferences and settings.</li>
                <li>Understand how you use our website.</li>
                <li>Improve website functionality and performance.</li>
                <li>Provide personalized content and advertisements.</li>
              </ul>
              <p className="mt-2 text-gray-500 italic">You can control cookies through your browser settings.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Data Retention</h3>
              <p className="text-gray-600 leading-relaxed">We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Dental records are typically retained for a minimum period as required by local healthcare regulations and professional standards.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Children's Privacy</h3>
              <p className="text-gray-600 leading-relaxed">When treating patients under 18 years of age, we require parental or guardian consent. Parents or guardians have the right to access and control the information of their children.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Changes to This Policy</h3>
              <p className="text-gray-600 leading-relaxed">We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date. We encourage you to review this policy periodically.</p>
            </div>
          </div>

          {/* Bottom Contact Box */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-6">If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us:</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-700">
                <div className="p-2 bg-white rounded-full shadow-sm"><Mail className="w-4 h-4 text-purple-600"/></div>
                <span>Orchid Dental Care</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="p-2 bg-white rounded-full shadow-sm"><MapPin className="w-4 h-4 text-purple-600"/></div>
                <span>123 Dental Street, Kochi, Kerala, India</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="p-2 bg-white rounded-full shadow-sm"><Phone className="w-4 h-4 text-purple-600"/></div>
                <span>Phone: +91 98765 43210</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="p-2 bg-white rounded-full shadow-sm"><Mail className="w-4 h-4 text-purple-600"/></div>
                <span>Email: hello@orchiddentalcare.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs mt-12 max-w-2xl mx-auto leading-relaxed">
        This Privacy Policy ensures transparency in our data protection practices and complies with legal requirements. Orchid Dental Care is committed to maintaining the highest standards of patient confidentiality and data protection.
      </p>
    </div>
  );
};

export default PrivacyHome;