import { Shield, Calendar, Pill, Video, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-100 via-white to-white" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: Headline & value props */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
            >
              Healthcare Automation, designed for humans
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600"
            >
              A production-ready blueprint for scheduling, prescriptions, and telemedicine—crafted for elderly
              patients, streamlined for staff, and compliant for insurers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/30"
              >
                Explore Features <ArrowRight className="h-4 w-4" />
              </a>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-slate-700 shadow backdrop-blur">
                <Shield className="h-4 w-4 text-emerald-600" />
                <span className="text-sm">HIPAA-aligned • RBAC • Audit-ready</span>
              </div>
            </motion.div>

            {/* Mini chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 grid max-w-xl grid-cols-3 gap-3"
            >
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-slate-700 shadow-sm backdrop-blur">
                <Calendar className="h-5 w-5 text-violet-600" />
                <span className="text-sm font-medium">Appointments</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-slate-700 shadow-sm backdrop-blur">
                <Pill className="h-5 w-5 text-rose-600" />
                <span className="text-sm font-medium">Prescriptions</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-slate-700 shadow-sm backdrop-blur">
                <Video className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium">Telemedicine</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Spline scene */}
          <div className="relative h-[380px] w-full md:h-[480px]">
            <div className="absolute inset-0 rounded-3xl border border-violet-200/30 bg-gradient-to-br from-violet-100/40 via-white to-white shadow-inner" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl">
              <Spline
                scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              {/* Subtle gradient veil to blend edges; allow interactions */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
