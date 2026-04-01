"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Eye, Clock, BarChart3, Activity } from "lucide-react";

function AnimatedNumber({ target, duration = 2000, inView, suffix = "" }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span>
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}

const metrics = [
  {
    icon: Users,
    label: "Total Subscribers",
    value: 300000,
    display: "300K+",
    suffix: "+",
    color: "#D4AF37",
    progress: 75,
  },
  {
    icon: Eye,
    label: "Monthly Views",
    value: 5000000,
    display: "5M+",
    suffix: "+",
    color: "#6A1BA5",
    progress: 85,
  },
  {
    icon: Clock,
    label: "Watch Hours (Monthly)",
    value: 150000,
    display: "150K+",
    suffix: "+",
    color: "#D4AF37",
    progress: 60,
  },
  {
    icon: BarChart3,
    label: "Total Videos",
    value: 5000,
    display: "5000+",
    suffix: "+",
    color: "#6A1BA5",
    progress: 90,
  },
];

const growthData = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 45 },
  { month: "Mar", value: 52 },
  { month: "Apr", value: 58 },
  { month: "May", value: 63 },
  { month: "Jun", value: 70 },
  { month: "Jul", value: 72 },
  { month: "Aug", value: 78 },
  { month: "Sep", value: 82 },
  { month: "Oct", value: 88 },
  { month: "Nov", value: 92 },
  { month: "Dec", value: 100 },
];

export default function Analytics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="analytics" className="relative overflow-hidden py-24 lg:py-32">
      <div className="section-divider w-full absolute top-0" />

      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/8 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#4B0082]/10 blur-[100px]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-medium">
            Growth & Reach
          </span>
          <h2 className="font-[var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Our <span className="gold-gradient">Analytics</span>
          </h2>
          <p className="text-[#A0A0B0] max-w-2xl mx-auto text-lg">
            Real numbers, real impact — our platform&apos;s reach speaks for
            itself.
          </p>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            <span className="h-px w-16 bg-gradient-to-r from-[#4B0082] to-[#D4AF37]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#4B0082]" />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#4B0082]/50" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Metrics Cards */}
          <div className="lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 gap-4">
            {metrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="glass-card glass-card-elevated p-5 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${metric.color}15`,
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: metric.color }} />
                    </div>
                    <span className="text-xs text-[#A0A0B0] font-medium">
                      {metric.label}
                    </span>
                  </div>
                  <p
                    className="font-[var(--font-outfit)] text-2xl font-bold mb-3"
                    style={{ color: metric.color }}
                  >
                    {metric.display}
                  </p>
                  {/* Progress bar */}
                  <div className="w-full h-1.5 rounded-full bg-[rgba(255,255,255,0.05)]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${metric.progress}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.15 }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${metric.color}, ${metric.color}80)`,
                        boxShadow: `0 0 10px ${metric.color}40`,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Growth Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 glass-card glass-card-elevated p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-[var(--font-outfit)] text-lg font-bold text-white flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#D4AF37]" />
                  Growth Trajectory
                </h3>
                <p className="text-sm text-[#A0A0B0] mt-1">
                  Subscriber growth over 12 months
                </p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.2)]">
                <TrendingUp className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-medium text-[#D4AF37]">
                  +150% YoY
                </span>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="flex justify-between gap-2 h-48 sm:h-64">
              {growthData.map((item, i) => (
                <div key={item.month} className="flex-1 flex flex-col h-full">
                  {/* Chart Bar Container */}
                  <div className="flex-1 flex items-end">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={inView ? { height: `${item.value}%` } : {}}
                      transition={{
                        duration: 0.8,
                        delay: 0.5 + i * 0.08,
                        ease: "easeOut",
                      }}
                      className="w-full rounded-t-md relative group cursor-pointer min-h-[4px]"
                      style={{
                        background: `linear-gradient(180deg, #D4AF37, #4B0082)`,
                        opacity: 0.6 + (item.value / 100) * 0.4,
                      }}
                    >
                      {/* Tooltip */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-[#D4AF37] text-[#0B0B0F] text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {item.value}%
                      </div>
                    </motion.div>
                  </div>
                  {/* Label */}
                  <span className="text-[10px] text-[#A0A0B0] hidden sm:block text-center mt-2 h-4">
                    {item.month}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[rgba(212,175,55,0.1)]">
              <div className="text-center">
                <p className="font-[var(--font-outfit)] text-xl font-bold text-[#D4AF37]">
                  92%
                </p>
                <p className="text-xs text-[#A0A0B0]">Tamil Nadu Audience</p>
              </div>
              <div className="text-center">
                <p className="font-[var(--font-outfit)] text-xl font-bold text-[#6A1BA5]">
                  8min
                </p>
                <p className="text-xs text-[#A0A0B0]">Avg. Watch Time</p>
              </div>
              <div className="text-center">
                <p className="font-[var(--font-outfit)] text-xl font-bold text-[#D4AF37]">
                  High
                </p>
                <p className="text-xs text-[#A0A0B0]">Engagement Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
