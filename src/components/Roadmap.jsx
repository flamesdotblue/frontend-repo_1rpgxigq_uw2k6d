export default function Roadmap() {
  const phases = [
    {
      name: 'Phase 1 – MVP (0-8 weeks)',
      points: [
        'Patient onboarding with passwordless auth (magic link/passkey) and profile.',
        'Appointment scheduling with reminders (push/SMS/voice).',
        'Prescription list, refill requests, and basic eRx queue for staff.',
        'Foundational HIPAA controls, audit logging, and encrypted storage.',
        'Offline-ready for viewing appointments and medication list.'
      ]
    },
    {
      name: 'Phase 2 – Telemedicine & Staff Ops (8-16 weeks)',
      points: [
        'Televisit booking with device pre-checks and consent capture.',
        'Provider calendar management and multi-clinic support.',
        'Claims attachments and eligibility checks for insurance admins.',
        'Role-based dashboards with analytics and queue views.'
      ]
    },
    {
      name: 'Phase 3 – Integrations & Scalability (16-24 weeks)',
      points: [
        'EHR integrations (FHIR/HL7) for scheduling, meds, and encounters.',
        'SSO (OIDC/SAML) for enterprise staff; MDM support.',
        'Advanced monitoring, anomaly detection, and cost optimization.'
      ]
    },
    {
      name: 'Phase 4 – Enhancements (24+ weeks)',
      points: [
        'Care plans, caregiver access, and in-app chat with clinical teams.',
        'Localization, accessibility refinements, and A/B UX improvements.'
      ]
    }
  ];

  return (
    <section className="mx-auto max-w-6xl px-6">
      <h2 className="text-2xl font-bold text-slate-900">Development Roadmap</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {phases.map((phase) => (
          <div key={phase.name} className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-slate-900">{phase.name}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {phase.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
