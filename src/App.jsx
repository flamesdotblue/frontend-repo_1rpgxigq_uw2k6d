import Header from './components/Header.jsx';
import FeatureColumns from './components/FeatureColumns.jsx';
import ComplianceList from './components/ComplianceList.jsx';
import Roadmap from './components/Roadmap.jsx';
import { Server, Database, Cloud, CreditCard, Phone, Accessibility, Mic, Bell } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      {/* Core Feature Set */}
      <div className="py-10">
        <FeatureColumns />
      </div>

      {/* Technical Architecture */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-bold">Technical Architecture</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="mb-2 flex items-center gap-2 text-blue-700">
              <Server className="h-5 w-5" />
              <h3 className="font-semibold">Mobile + Backend</h3>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Mobile: React Native or Flutter with offline-first data store.</li>
              <li>Backend: FastAPI / Node.js with REST + FHIR APIs.</li>
              <li>Realtime: WebSockets for reminders and status updates.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="mb-2 flex items-center gap-2 text-emerald-700">
              <Database className="h-5 w-5" />
              <h3 className="font-semibold">Data Layer</h3>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Primary: PostgreSQL for relational PHI and audit logs.</li>
              <li>Document: MongoDB for encounters, meds, notes.</li>
              <li>Secure object storage for attachments (eRx, claims, media).</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="mb-2 flex items-center gap-2 text-violet-700">
              <Cloud className="h-5 w-5" />
              <h3 className="font-semibold">Deployment & Scale</h3>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Kubernetes with regional clusters and geofencing.</li>
              <li>Blue/green releases, feature flags, and canary testing.</li>
              <li>Autoscaling API pods; CDN for assets and updates.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <div className="py-10">
        <ComplianceList />
      </div>

      {/* UI Priorities */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-bold">User Interface Priorities</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="mb-1 flex items-center gap-2 text-sky-700">
              <Accessibility className="h-5 w-5" />
              <h3 className="font-semibold">Accessibility-first</h3>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Large text sizes, high contrast mode, and clear language.</li>
              <li>Voice guidance and screen-reader optimized labels.</li>
              <li>Big, spaced touch targets and linear flows.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="mb-1 flex items-center gap-2 text-rose-700">
              <Mic className="h-5 w-5" />
              <h3 className="font-semibold">Minimal Steps</h3>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>One-tap refills, one-tap confirm/reschedule.</li>
              <li>Clear primary actions and de-emphasized secondary options.</li>
              <li>Guided booking with progress and back/exit safety.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="mb-1 flex items-center gap-2 text-amber-700">
              <Bell className="h-5 w-5" />
              <h3 className="font-semibold">Helpful Notifications</h3>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Plain-language reminders with simple response actions.</li>
              <li>Fallback to SMS/voice for poor connectivity regions.</li>
              <li>Respect quiet hours and consent preferences.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="mb-1 flex items-center gap-2 text-teal-700">
              <Phone className="h-5 w-5" />
              <h3 className="font-semibold">Mobile-first for Staff</h3>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Quick patient lookup, slot management, and eRx approval.</li>
              <li>Works across clinics with fast context switching.</li>
              <li>Offline cache for schedules and recent records.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <div className="py-10">
        <Roadmap />
      </div>

      {/* Integration Points */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold">Integration Points</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[{
            name: 'EHR Systems (FHIR/HL7)',
            detail: 'Read/write appointments, meds, encounters; SMART on FHIR launch for context.'
          }, {
            name: 'Telemedicine Platforms',
            detail: 'SDK or WebRTC: session scheduling, consent, device checks, recording storage.'
          }, {
            name: 'Insurance & Claims (X12/EDI)',
            detail: 'Eligibility (270/271), claims (837/835), prior auth APIs.'
          }, {
            name: 'Payments',
            detail: 'HIPAA-eligible processors for copays; PCI-compliant tokenization.'
          }, {
            name: 'Messaging & Notifications',
            detail: 'Push, SMS, and voice APIs with templates and localization.'
          }, {
            name: 'Identity & SSO',
            detail: 'OIDC/SAML for staff; passkeys/magic links for patients.'
          }].map((intg) => (
            <div key={intg.name} className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900">{intg.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{intg.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/70">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-600">
          Built for elderly-friendly, HIPAA-aligned healthcare automation.
        </div>
      </footer>
    </div>
  );
}

export default App;
