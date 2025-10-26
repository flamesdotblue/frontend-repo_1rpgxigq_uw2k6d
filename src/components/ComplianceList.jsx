import { Shield, Lock, Database, Server, Bell } from 'lucide-react';

export default function ComplianceList() {
  const items = [
    {
      icon: Shield,
      title: 'HIPAA Administrative Safeguards',
      desc:
        'Role-based access control (RBAC), minimum necessary access, BAAs with vendors, workforce training, incident response plans.'
    },
    {
      icon: Lock,
      title: 'Encryption & Transport Security',
      desc:
        'TLS 1.2+ in transit, AES-256 at rest, hardware-backed key storage, per-tenant keys, certificate pinning on mobile.'
    },
    {
      icon: Database,
      title: 'Data Governance & Retention',
      desc:
        'PHI segregation, data minimization, retention by state/federal rules, export/delete on request, immutable backups.'
    },
    {
      icon: Server,
      title: 'Audit & Monitoring',
      desc:
        'Immutable audit logs for access and changes, anomaly detection, breach notifications, geofenced hosting.'
    },
    {
      icon: Bell,
      title: 'Authentication & MFA',
      desc:
        'Passwordless magic links or passkeys for patients; TOTP/SMS + SSO (OIDC/SAML) for staff; session timeouts with re-auth for sensitive actions.'
    }
  ];

  return (
    <section className="mx-auto max-w-6xl px-6">
      <h2 className="text-2xl font-bold text-slate-900">Security & Compliance Requirements</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-emerald-600/10 text-emerald-700">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
