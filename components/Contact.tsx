'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolio-data';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Code2, 
  Send, 
  Copy, 
  Check, 
  Sparkles,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { useToast } from './Toast';

export function Contact() {
  const { showToast } = useToast();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    showToast(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please complete all required fields.', 'error');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSent(true);
        showToast('Message sent successfully! I will reply soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        showToast('Message sent via fallback mailer!');
        window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Pappu,\n\n${formData.message}\n\nBest,\n${formData.name} (${formData.email})`)}`;
      }
    } catch (err) {
      window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Pappu,\n\n${formData.message}\n\nBest,\n${formData.name} (${formData.email})`)}`;
      showToast('Opened email composer!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title matching Saurabh screenshot #6 */}
        <div className="mb-12 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Let&apos;s build something amazing together<span className="text-cyan-400">.</span>
          </h2>
          <p className="text-sm font-mono text-slate-400 mt-2">
            Open for full-time software engineering roles, backend API projects, and technical collaborations.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
          {/* Quick Info Column (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 space-y-4"
          >
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 glass-card space-y-4">
              <div className="text-xs font-mono text-cyan-400 font-bold tracking-wider uppercase">
                DIRECT CONTACT
              </div>

              {/* Email */}
              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.email, 'Email')}
                className="w-full p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-white/5 hover:border-cyan-500/30 text-left transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">EMAIL</div>
                    <div className="text-xs font-mono text-slate-200">{PORTFOLIO_DATA.personal.email}</div>
                  </div>
                </div>
                {copiedField === 'Email' ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />}
              </button>

              {/* Phone */}
              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.personal.phone, 'Phone')}
                className="w-full p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-white/5 hover:border-cyan-500/30 text-left transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">PHONE</div>
                    <div className="text-xs font-mono text-slate-200">{PORTFOLIO_DATA.personal.phone}</div>
                  </div>
                </div>
                {copiedField === 'Phone' ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />}
              </button>

              {/* Location */}
              <div className="p-3 rounded-xl bg-slate-800/30 border border-white/5 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <div>
                  <div className="text-[10px] font-mono text-slate-400">LOCATION</div>
                  <div className="text-xs font-mono text-slate-200">{PORTFOLIO_DATA.personal.location}</div>
                </div>
              </div>
            </div>

            {/* Social Toolbar matching Saurabh footer */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center justify-around text-slate-400">
              <a href={PORTFOLIO_DATA.personal.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-cyan-400 transition-colors" title="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-cyan-400 transition-colors" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={PORTFOLIO_DATA.personal.leetcode} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-amber-400 transition-colors" title="LeetCode">
                <Code2 className="w-5 h-5" />
              </a>
              <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="p-2 hover:text-cyan-400 transition-colors" title="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </motion.div>

          {/* Contact Form Column (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-3"
          >
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 glass-card">
              <div className="text-xs font-mono text-cyan-400 font-bold tracking-wider uppercase mb-4">
                SEND DIRECT MESSAGE
              </div>

              {sent ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-sans">Message Delivered!</h3>
                  <p className="text-xs font-mono text-slate-400 max-w-xs mx-auto">
                    Thank you for reaching out. I will respond to your email as soon as possible.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 text-xs font-mono text-cyan-400 underline hover:text-cyan-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-1">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Pappu, I'd like to talk about..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all duration-200 active:scale-98 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
