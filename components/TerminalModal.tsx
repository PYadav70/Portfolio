'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, X, CornerDownLeft, Sparkles, Code2, Copy } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio-data';
import { useToast } from './Toast';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export function TerminalModal({ isOpen, onClose, onOpenResume }: TerminalModalProps) {
  const { showToast } = useToast();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-cyan-400 font-bold">Welcome to Pappu Kumar Yadav Terminal CLI v1.0.0</p>
          <p className="text-slate-400">Type <span className="text-amber-400 font-bold">help</span> to list available commands or click quick prompts below.</p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-amber-400 font-semibold">Available Commands:</p>
            <div className="grid grid-cols-2 gap-1 text-slate-300">
              <div><span className="text-cyan-400">whoami</span> - About Pappu</div>
              <div><span className="text-cyan-400">projects</span> - View production apps</div>
              <div><span className="text-cyan-400">skills</span> - Tech stack breakdown</div>
              <div><span className="text-cyan-400">cat resume</span> - Open resume modal</div>
              <div><span className="text-cyan-400">contact</span> - Get contact info</div>
              <div><span className="text-cyan-400">leetcode</span> - DSA problem stats</div>
              <div><span className="text-cyan-400">sudo hire</span> - Direct hire trigger</div>
              <div><span className="text-cyan-400">clear</span> - Clear screen</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="text-xs font-mono space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold">{PORTFOLIO_DATA.personal.name} ({PORTFOLIO_DATA.personal.handle})</p>
            <p>{PORTFOLIO_DATA.personal.title} studying B.Tech IT at G.L. Bajaj Institute.</p>
            <p className="text-slate-400">{PORTFOLIO_DATA.personal.bio}</p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs font-mono">
            {PORTFOLIO_DATA.projects.map((p) => (
              <div key={p.id} className="p-2 rounded bg-slate-800/60 border border-white/5">
                <div className="text-cyan-400 font-bold">{p.title}</div>
                <div className="text-slate-300">{p.description}</div>
                <div className="text-[10px] text-amber-400 mt-1">Live: {p.liveUrl}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="text-xs font-mono space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold">Core Tech Stack:</p>
            <p>• Frontend: React.js, Next.js, TypeScript, Tailwind CSS</p>
            <p>• Backend: Node.js, Express.js, REST APIs, Prisma ORM, Zod</p>
            <p>• Databases: PostgreSQL, MongoDB, MySQL</p>
            <p>• Cloud/DevOps: AWS EC2, S3, Docker, Nginx</p>
          </div>
        );
        break;

      case 'cat resume':
      case 'resume':
        onOpenResume();
        outputNode = <p className="text-xs text-cyan-400">Opening formal PDF resume modal...</p>;
        break;

      case 'contact':
        outputNode = (
          <div className="text-xs font-mono space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold">Contact Details:</p>
            <p>Email: {PORTFOLIO_DATA.personal.email}</p>
            <p>Phone: {PORTFOLIO_DATA.personal.phone}</p>
            <p>LinkedIn: {PORTFOLIO_DATA.personal.linkedin}</p>
            <p>GitHub: {PORTFOLIO_DATA.personal.github}</p>
          </div>
        );
        break;

      case 'leetcode':
        outputNode = (
          <div className="text-xs font-mono space-y-1 text-slate-300">
            <p className="text-amber-400 font-bold">LeetCode @{PORTFOLIO_DATA.codingStats.leetcode.username}</p>
            <p>• Solved: {PORTFOLIO_DATA.codingStats.leetcode.totalSolved}+ problems</p>
            <p>• Contest Max Rating: {PORTFOLIO_DATA.codingStats.leetcode.maxRating} ({PORTFOLIO_DATA.codingStats.leetcode.globalRank})</p>
          </div>
        );
        break;

      case 'sudo hire':
      case 'hire':
        outputNode = (
          <div className="p-3 rounded bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono text-cyan-200 space-y-1">
            <p className="font-bold text-cyan-400">🚀 ACCESS GRANTED! Let&apos;s build awesome software together.</p>
            <p>Triggering email composer to {PORTFOLIO_DATA.personal.email}...</p>
          </div>
        );
        setTimeout(() => {
          window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=Hiring%20Opportunity%20-%20Pappu%20Kumar%20Yadav`;
        }, 1200);
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        outputNode = (
          <p className="text-xs text-rose-400 font-mono">
            Command not recognized: &quot;{trimmed}&quot;. Type <span className="text-amber-400 font-bold">help</span> for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: outputNode }]);
    setInput('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#090d12] border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col h-[520px]"
        >
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-cyan-500" />
              <span className="ml-2 font-mono text-xs text-slate-400 font-semibold">
                pappu@terminal:~ (zsh)
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal History Container */}
          <div className="flex-1 p-4 overflow-y-auto font-mono space-y-4">
            {history.map((item, index) => (
              <div key={index} className="space-y-1">
                {item.command !== 'welcome' && (
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-cyan-400">pappu@dev:~$</span>
                    <span className="text-white font-semibold">{item.command}</span>
                  </div>
                )}
                <div>{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick Command Suggestions */}
          <div className="px-4 py-2 border-t border-white/5 bg-slate-950/60 flex flex-wrap gap-1.5 text-[10px] font-mono">
            <span className="text-slate-500">Quick:</span>
            {['whoami', 'projects', 'skills', 'cat resume', 'contact', 'sudo hire'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Command Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(input);
            }}
            className="p-3 bg-slate-950 border-t border-white/10 flex items-center gap-2"
          >
            <span className="text-cyan-400 font-mono text-sm font-bold">pappu@dev:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command (e.g. 'help', 'projects')..."
              className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-white placeholder:text-slate-600"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
