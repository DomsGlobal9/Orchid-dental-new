import React from 'react';
import { 
  FileText, 
  Calendar, 
  CreditCard, 
  User, 
  Stethoscope, 
  AlertCircle,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

const TermsConditionsHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#ffffff]  py-16 px-4 font-sans text-white">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full border border-purple-500/30 bg-purple-500/10">
            <FileText className="text-purple-400 w-8 h-8" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl text-[#020617] font-bold mb-4 tracking-tight">Terms & Conditions</h1>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Please read these terms and conditions carefully before using our services or visiting Orchid Dental Care.
        </p>
        <p className="text-sm text-gray-500 mt-2 italic">Last updated: March 10, 2026</p>
      </div>

      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-16 text-gray-800">
        <p className="mb-10 text-gray-600 leading-relaxed italic">
          These Terms and Conditions govern your use of the services provided by Orchid Dental Care. By booking an appointment or using our services, you agree to be bound by these terms. If you do not agree with any part of these Terms, please do not use our services.
        </p>

        <div className="space-y-12">
          {/* Section 1: Appointments */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="text-purple-600 w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Appointments</h2>
            </div>
            <div className="space-y-4 ml-2">
              <h3 className="font-semibold text-gray-900">Booking:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Appointments can be booked online, by phone, or in person.</li>
                <li>A valid ID may be required for registration.</li>
                <li>Please provide accurate medical history and contact information.</li>
                <li>First-time patients should arrive 15 minutes early for registration.</li>
              </ul>
              <h3 className="font-semibold text-gray-900 mt-4">Cancellation and Rescheduling:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>At least 24 hours notice is required for cancellations or rescheduling.</li>
                <li>Missed appointments or late cancellations may incur a nominal fee.</li>
                <li>Repeated cancellations may require a deposit for future appointments.</li>
                <li>Our priority is to provide timely care to all our patients.</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Payment Terms */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <CreditCard className="text-purple-600 w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Payment Terms</h2>
            </div>
            <div className="space-y-4 ml-2 text-gray-600">
              <h3 className="font-semibold text-gray-900">Fees and Checkout:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All fees are payable at the time of service.</li>
                <li>We accept cash, credit/debit cards, and digital payments.</li>
                <li>An itemized statement and invoice will be provided for every visit.</li>
                <li>Prices are subject to change without prior notice.</li>
              </ul>
              <h3 className="font-semibold text-gray-900 mt-4">Payment Methods:</h3>
              <p>We accept all major credit/debit cards, UPI, and bank transfers. Payment for lab-intensive treatments may require a partial advance payment.</p>
              <h3 className="font-semibold text-gray-900 mt-4">Insurance:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>We assist with multiple insurance providers.</li>
                <li>Insurance claims will be processed upon evaluation.</li>
                <li>Patients are responsible for any part not covered by insurance.</li>
                <li>Verification of coverage is the patient's responsibility.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Patient Responsibilities */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <User className="text-purple-600 w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Patient Responsibilities</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Provide accurate medical information and dental history.</li>
              <li>Inform us of any changes to your health or medications.</li>
              <li>Follow post-treatment care instructions as provided.</li>
              <li>Attend scheduled follow-up appointments.</li>
              <li>Behave respectfully towards our staff and other patients.</li>
              <li>Notify us immediately of any issues regarding your treatment.</li>
              <li>Maintain punctuality for appointments to ensure smooth clinic operations.</li>
            </ul>
          </section>

          {/* Section 4: Treatment and Care */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Stethoscope className="text-purple-600 w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Treatment and Care</h2>
            </div>
            <div className="space-y-4 ml-2 text-gray-600">
              <h3 className="font-semibold text-gray-900">Consent:</h3>
              <p>We ensure you understand every procedure before beginning. Your signature on consent forms or verbal agreement for minor procedures constitutes permission to proceed.</p>
              <h3 className="font-semibold text-gray-900 mt-4">Treatment Outcomes:</h3>
              <p>While we commit to excellence, individual results may vary based on dental health, age, and adherence to post-care instructions. Follow-up visits are essential for long-term success.</p>
              <h3 className="font-semibold text-gray-900 mt-4">Emergencies:</h3>
              <p>Emergency procedures are prioritized on a case-by-case basis. After-hours emergency contact information will be provided. In case of severe emergency, please proceed to the nearest emergency room.</p>
            </div>
          </section>

          {/* Section 5: Limitation of Liability */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <AlertCircle className="text-purple-600 w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Limitation of Liability</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">Orchid Dental Care and its staff are dedicated to the highest standard of care; however:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>We are not liable for issues arising from undisclosed medical conditions.</li>
              <li>Liability is limited to the value of the treatment provided.</li>
              <li>We are not responsible for any issues resulting from missed follow-up care.</li>
              <li>Orchid Dental Care is not responsible for any indirect or consequential damages.</li>
            </ul>
          </section>

          {/* Final Text Sections */}
          <div className="space-y-8 pt-6 border-t border-gray-100 text-gray-600">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Medical Records</h3>
              <p>All medical records are strictly confidential and protected by our privacy policy. Patients have the right to request copies of their records, subject to nominal administrative fees as per clinic regulations.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Photography and Marketing</h3>
              <p>Before and after photos may be used for treatment planning and records. Clinical photos will only be used for marketing with your explicit written consent. Patient names are never used in marketing materials without permission.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Code of Conduct</h3>
              <p>We maintain a safe and respectful environment. Orchid Dental Care reserves the right to refuse service to individuals displaying abusive behavior towards staff or other patients.</p>
            </div>
          </div>

          {/* Bottom Contact Box */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center md:text-left">Contact Us</h2>
            <p className="text-gray-600 mb-6 text-center md:text-left">If you have any questions about these Terms and Conditions, please contact us:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="p-2 bg-white rounded-full shadow-sm"><FileText className="w-4 h-4 text-purple-600"/></div>
                  <span className="font-semibold">Orchid Dental Care</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="p-2 bg-white rounded-full shadow-sm"><MapPin className="w-4 h-4 text-purple-600"/></div>
                  <span>123 Dental Street, Kochi, Kerala, India</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="p-2 bg-white rounded-full shadow-sm"><Phone className="w-4 h-4 text-purple-600"/></div>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <div className="p-2 bg-white rounded-full shadow-sm"><Mail className="w-4 h-4 text-purple-600"/></div>
                  <span>hello@orchiddentalcare.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs mt-12 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest font-medium">
        Orchid Dental Care is committed to providing exceptional care while maintaining professional standards and patient rights.
      </p>
    </div>
  );
};

export default TermsConditionsHome;