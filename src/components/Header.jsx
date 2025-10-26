import { Shield, Calendar, Pill, Video } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 opacity-90" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 text-white">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Healthcare Automation Platform Specification
            </h1>
            <p className="mt-4 text-lg text-white/90 md:text-xl">
              A production-ready blueprint for appointment scheduling, prescription management, and telemedicine—
              designed for elderly patients, multi-clinic staff, and insurance administrators.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-blue-50/90">
            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur">
              <Calendar className="h-5 w-5" />
              <span className="text-sm font-medium">Appointments</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur">
              <Pill className="h-5 w-5" />
              <span className="text-sm font-medium">Prescriptions</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 backdrop-blur">
              <Video className="h-5 w-5" />
              <span className="text-sm font-medium">Telemedicine</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-3 text-sm text-blue-50/90">
          <Shield className="h-4 w-4" />
          <span>HIPAA-aligned • Role-based access • Offline-first</span>
        </div>
      </div>
    </header>
  );
}
