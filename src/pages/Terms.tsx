import { Layout } from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        <div className="container-tight mx-auto relative">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-12">
            Terms of Service
          </h1>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <p className="text-sm">Effective date: [To be announced] | Version: v1</p>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of These Terms</h2>
              <p>These Terms of Service govern access to and use of the FormSpotter service by trainers and clients. By accessing or using FormSpotter, you agree to these Terms. If you do not agree, do not use the service.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of the Service</h2>
              <p>FormSpotter is an AI-assisted coaching platform that helps trainers interact with clients through WhatsApp. FormSpotter provides software functionality that supports trainer-client communication and related service workflows.</p>
              <p className="mt-2">FormSpotter is a software platform. FormSpotter does not itself provide coaching, medical care, diagnosis, treatment, physical therapy, emergency services, or similar professional healthcare services.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Customer Relationship</h2>
              <p>The trainer is the paying customer of FormSpotter. Clients may interact with the service because their trainer uses FormSpotter. Trainers and clients are both subject to these Terms when they access or use the service.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Eligibility</h2>
              <p>You must be at least 13 years old to use FormSpotter. By using the service, you represent that you meet this requirement and that you have the authority to agree to these Terms.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Accounts and Service Identifiers</h2>
              <p>FormSpotter may use identifiers such as email address, channel ID, and related service identifiers to operate the service, associate clients with trainers, and administer account access. You are responsible for providing accurate information where requested.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Trainer Responsibility</h2>
              <p>Trainers are independent users of the platform. Trainers are solely responsible for their coaching, recommendations, communications, and decisions, including any instruction or guidance they provide to clients through or in connection with FormSpotter.</p>
              <p className="mt-2">FormSpotter is not responsible for a trainer's exercise programming, coaching judgment, supervision, client suitability determinations, or safety decisions.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. No Medical, Clinical, or Emergency Services</h2>
              <p>FormSpotter does not provide medical advice, diagnosis, treatment, physical therapy, rehabilitation services, or emergency services. Information generated, transmitted, or displayed through the service is not a substitute for licensed medical or clinical care.</p>
              <p className="mt-2">If you have pain, injury, a medical condition, or a medical emergency, seek help from a qualified healthcare professional or emergency services, as appropriate.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Client Responsibility</h2>
              <p>Clients are responsible for using their own judgment when participating in exercise or following trainer guidance delivered through the service. Clients should stop activity and seek qualified professional advice when appropriate, including if they experience pain, dizziness, or injury concerns.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Fees, Billing, and No-Refund Policy</h2>
              <p>Trainer subscriptions are billed monthly. Unless FormSpotter expressly agrees otherwise in writing, all fees are non-refundable. FormSpotter may suspend or terminate access for nonpayment.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Acceptable Use</h2>
              <p>You may not use FormSpotter to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>violate any applicable law or regulation;</li>
                <li>harass, abuse, or threaten others;</li>
                <li>attempt unauthorized access to the service or its related systems;</li>
                <li>interfere with the operation or security of the service;</li>
                <li>reverse engineer or attempt to extract source code or underlying models except where prohibited by law from restricting such rights; or</li>
                <li>submit content you do not have the right to provide or use.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. User Content and Limited License</h2>
              <p>You retain ownership of content you provide to FormSpotter. By using the service, you grant FormSpotter a limited, non-exclusive license to receive, process, transmit, and use your content solely as needed to operate, secure, support, and maintain the service in accordance with these Terms and the Privacy Policy.</p>
              <p className="mt-2">This license does not give FormSpotter a general right to sell your content or use it for unrelated commercial purposes.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">12. Privacy</h2>
              <p>Use of FormSpotter is also governed by the <a href="/privacy" className="text-accent hover:underline">FormSpotter Privacy Policy</a>, which describes how information is received, processed, stored, used, and disclosed.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">13. Suspension, Termination, and Trainer Removal of Clients</h2>
              <p>FormSpotter may suspend or terminate access to the service if you violate these Terms, fail to pay applicable fees, misuse the service, or create security, legal, or operational risk.</p>
              <p className="mt-2">A trainer may remove a client from the trainer's use of the service. Removal severs the client's current access within the service.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">14. Disclaimers</h2>
              <p>FormSpotter is provided on an "as is" and "as available" basis. To the maximum extent permitted by law, FormSpotter disclaims all warranties, whether express, implied, statutory, or otherwise, including implied warranties of merchantability, fitness for a particular purpose, non-infringement, and any warranty that the service will be uninterrupted, error-free, or achieve any particular performance or training outcome.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">15. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, FormSpotter and its affiliates, officers, directors, employees, and service providers will not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages, or for any loss of profits, revenues, goodwill, data, or business opportunities, arising out of or related to the service or these Terms.</p>
              <p className="mt-2">To the maximum extent permitted by law, the total aggregate liability of FormSpotter for all claims arising out of or related to the service or these Terms will not exceed the greater of: (a) the amount paid by the trainer to FormSpotter for the service during the three months before the event giving rise to the claim; or (b) US$100.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">16. Indemnification</h2>
              <p>You agree to defend, indemnify, and hold harmless FormSpotter and its affiliates, officers, directors, employees, and service providers from and against claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or related to your use of the service, your content, your violation of these Terms, or, in the case of trainers, your coaching, recommendations, or conduct toward clients.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">17. Changes to the Service or These Terms</h2>
              <p>FormSpotter may modify, suspend, or discontinue all or part of the service at any time. FormSpotter may also update these Terms from time to time. Continued use of the service after updated Terms become effective constitutes acceptance of the updated Terms.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">18. Governing Law and Venue</h2>
              <p>These Terms are governed by the laws of the State of New York, without regard to conflict of laws principles. Any dispute arising out of or relating to these Terms or the service must be brought exclusively in the state or federal courts located in New York, NY, and you consent to those courts' jurisdiction.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">19. Contact Information</h2>
              <p>Questions about these Terms should be sent to: <a href="mailto:info@formspotter.ai" className="text-accent hover:underline">info@formspotter.ai</a></p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
