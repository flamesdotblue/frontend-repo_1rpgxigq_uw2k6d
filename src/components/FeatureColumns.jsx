import { Calendar, Pill, Video, Bell, Users } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, desc, benefit }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600/10 text-blue-700">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="font-semibold text-slate-900">{title}</h4>
    </div>
    <p className="mt-2 text-sm text-slate-600">{desc}</p>
    <p className="mt-2 text-xs font-medium text-slate-500">Benefit: {benefit}</p>
  </div>
);

export default function FeatureColumns() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <h2 className="text-2xl font-bold text-slate-900">Core Feature Set by Role</h2>
      <p className="mt-1 text-slate-600">
        Focused on appointment scheduling with reminders, prescription management and refills, and telemedicine booking.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {/* Patients */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-slate-900">Patients (65+)</h3>
          </div>
          <div className="grid gap-3">
            <FeatureItem
              icon={Calendar}
              title="One-tap Appointment Scheduling"
              desc="Guided flow with large buttons, voice prompts, and automatic clinic matching by location."
              benefit="Reduces steps and errors for elderly users."
            />
            <FeatureItem
              icon={Bell}
              title="Smart Reminders"
              desc="Push, SMS, and voice call reminders with easy confirm/reschedule actions."
              benefit="Decreases no-shows and improves adherence."
            />
            <FeatureItem
              icon={Pill}
              title="Prescription Management & Refills"
              desc="Medication list with large text labels, refill eligibility check, and one-tap refill request."
              benefit="Improves medication adherence with minimal effort."
            />
            <FeatureItem
              icon={Video}
              title="Telemedicine Booking"
              desc="Simple step-by-step booking with device test and automatic link delivery."
              benefit="Reduces friction to access care remotely."
            />
          </div>
        </div>

        {/* Staff */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Users className="h-5 w-5 text-emerald-600" />
            <h3 className="text-lg font-semibold text-slate-900">Healthcare Staff</h3>
          </div>
          <div className="grid gap-3">
            <FeatureItem
              icon={Calendar}
              title="Multi-Clinic Scheduling"
              desc="Centralized calendar, provider availability, and overbooking prevention."
              benefit="Improves throughput and reduces manual coordination."
            />
            <FeatureItem
              icon={Pill}
              title="Rx Queue & E-Prescribe"
              desc="Approve refills, e-prescribe, and track pharmacy fulfillment status."
              benefit="Speeds up medication workflows and decreases callbacks."
            />
            <FeatureItem
              icon={Video}
              title="Televisit Management"
              desc="Start sessions, verify identity, capture consent, and document notes."
              benefit="Ensures compliant, efficient remote care."
            />
            <FeatureItem
              icon={Bell}
              title="Broadcast Notifications"
              desc="Send clinic-wide updates and urgent advisories to patients."
              benefit="Faster communication with targeted cohorts."
            />
          </div>
        </div>

        {/* Insurance */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Users className="h-5 w-5 text-violet-600" />
            <h3 className="text-lg font-semibold text-slate-900">Insurance Admins</h3>
          </div>
          <div className="grid gap-3">
            <FeatureItem
              icon={Users}
              title="Eligibility & Prior Auth"
              desc="Verify coverage, capture prior auth requirements, and track approvals."
              benefit="Reduces denials and accelerates reimbursement."
            />
            <FeatureItem
              icon={Calendar}
              title="Claims Attachments"
              desc="Attach visit summaries, eRx records, and telehealth logs securely."
              benefit="Improves claim completeness and first-pass yield."
            />
            <FeatureItem
              icon={Bell}
              title="Status Alerts"
              desc="Real-time claim status updates and missing information prompts."
              benefit="Shortens claim cycles and prevents resubmissions."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
