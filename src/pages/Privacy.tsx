import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
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
            Privacy Policy
          </h1>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <p className="text-sm">Effective date: [To be announced]</p>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Scope</h2>
              <p>This Privacy Policy describes how FormSpotter collects, receives, processes, stores, uses, and discloses information in connection with the FormSpotter service. At launch, FormSpotter operates through WhatsApp only. This policy also applies to the FormSpotter website, although the website does not use analytics, advertising trackers, or similar website-tracking tools at this time.</p>
              <p className="mt-2">FormSpotter is a software platform used by trainers and their clients. The trainer is the paying customer. Clients may interact with the service through their trainer's use of FormSpotter.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Receive Through WhatsApp</h2>
              <p>When you interact with FormSpotter through WhatsApp, FormSpotter may receive the following categories of information as needed to operate the service:</p>
              <div className="mt-4 rounded-xl border border-border/50 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50 bg-card/50">
                      <th className="text-left p-4 text-foreground font-medium">Category</th>
                      <th className="text-left p-4 text-foreground font-medium">What FormSpotter may receive</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/30">
                      <td className="p-4 align-top">Account and conversation identifiers</td>
                      <td className="p-4">WhatsApp ID, WhatsApp user phone number ID, message ID, and channel or conversation identifiers.</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="p-4 align-top">Profile information</td>
                      <td className="p-4">Your WhatsApp profile name or other profile label made available through WhatsApp.</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="p-4 align-top">Message data</td>
                      <td className="p-4">Message timestamp and message text.</td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top">Submitted media</td>
                      <td className="p-4">Media such as video that you choose to submit through the service for processing.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Information FormSpotter Stores</h2>
              <p>FormSpotter stores only limited account and relationship data on a persistent basis. At launch, FormSpotter stores the following:</p>
              <div className="mt-4 rounded-xl border border-border/50 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/50 bg-card/50">
                      <th className="text-left p-4 text-foreground font-medium">Stored data</th>
                      <th className="text-left p-4 text-foreground font-medium">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/30">
                      <td className="p-4 align-top">Email address</td>
                      <td className="p-4">Used to identify the user and support account administration, including correction requests and account deletion requests.</td>
                    </tr>
                    <tr className="border-b border-border/30">
                      <td className="p-4 align-top">Channel ID or comparable service identifier</td>
                      <td className="p-4">Used to link the user to the service within the WhatsApp-based workflow.</td>
                    </tr>
                    <tr>
                      <td className="p-4 align-top">Trainer-client relationship data</td>
                      <td className="p-4">Used to associate a client with a trainer and to allow a trainer to remove or disconnect a client from the service.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">At launch, FormSpotter does not store chat history, message metadata beyond the limited account and relationship data described above, or user video submissions.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Information Processed but Not Stored</h2>
              <p>If you submit video or similar media through the service, FormSpotter may process that media to provide the service. User video submissions are not stored by FormSpotter.</p>
              <p className="mt-2">FormSpotter processes user video submissions without human access. This means FormSpotter personnel do not review user video as part of the normal operation of the service.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. How We Use Information</h2>
              <p>FormSpotter uses the information described in this policy to operate, maintain, and support the service, including to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>provide the WhatsApp-based coaching platform;</li>
                <li>link trainers and clients within the service;</li>
                <li>process submitted inputs, including message text and user-submitted video, to provide service functionality;</li>
                <li>maintain account records and relationship records;</li>
                <li>respond to support requests, correction requests, and deletion requests; and</li>
                <li>comply with applicable law and enforce our terms.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. What We Do Not Do at Launch</h2>
              <p>At launch, FormSpotter does not:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>store user video submissions;</li>
                <li>store chat history;</li>
                <li>use user data for model training or model fine-tuning; or</li>
                <li>use website analytics, advertising pixels, or similar website-tracking tools on the FormSpotter website.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. How We Share Information</h2>
              <p>FormSpotter may share information with service providers that help us host, operate, secure, or support the service. At launch, this includes cloud infrastructure and related processing services provided through Google Cloud.</p>
              <p className="mt-2">FormSpotter may also disclose information if required to do so by law, regulation, legal process, or valid governmental request, or when disclosure is reasonably necessary to protect rights, safety, or the integrity of the service.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Data Retention</h2>
              <p>FormSpotter retains stored account and relationship data, including email address, channel ID, and trainer-client relationship data, until deletion is requested or the data is no longer needed to operate the service.</p>
              <p className="mt-2">If a trainer removes a client from the service, that action severs current access within the service. Unless a separate deletion request is submitted, removal by a trainer does not automatically delete all stored account-related information.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Your Choices</h2>
              <p>You may request deletion of stored account-related data and may request correction of your email address by contacting <a href="mailto:info@formspotter.ai" className="text-accent hover:underline">info@formspotter.ai</a>. Additional deletion instructions may be provided separately.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Children</h2>
              <p>FormSpotter is not intended for children under 13, and we do not knowingly design the service for use by children under 13.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Security</h2>
              <p>FormSpotter uses reasonable administrative, technical, and organizational measures designed to protect the limited information that FormSpotter stores. No method of transmission or storage is completely secure, and FormSpotter cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">12. Changes to This Policy</h2>
              <p>FormSpotter may update this Privacy Policy from time to time. If we make material changes, we will update the effective date above and post the revised version through an appropriate FormSpotter-controlled channel.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">13. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or want to submit a correction or deletion request, contact: <a href="mailto:info@formspotter.ai" className="text-accent hover:underline">info@formspotter.ai</a></p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
