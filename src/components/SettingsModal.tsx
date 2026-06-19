import { motion, AnimatePresence } from "framer-motion";
import { X, User, Briefcase, Mail, Zap, ExternalLink } from "lucide-react";
import { TabId } from "./Sidebar";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab: (tab: TabId) => void;
}

export function SettingsModal({ isOpen, onClose, setActiveTab }: SettingsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-[600px] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[rgba(0,0,0,0.08)]"
            >
              {/* Sidebar of the Modal */}
              <div className="w-full md:w-[200px] bg-[#f9f9f9] border-r border-[rgba(0,0,0,0.06)] p-4 flex flex-col gap-1 shrink-0">
                <div className="text-xs font-semibold text-[#a3a3a3] uppercase tracking-wider mb-2 px-2">Account</div>
                <button className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-[#171717] bg-[rgba(0,0,0,0.04)] rounded-md">
                  <User className="w-4 h-4" />
                  My profile
                </button>
                <div className="mt-4 text-xs font-semibold text-[#a3a3a3] uppercase tracking-wider mb-2 px-2">Workspace</div>
                <button className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-[#525252] hover:bg-[rgba(0,0,0,0.04)] hover:text-[#171717] rounded-md transition-colors">
                  <Briefcase className="w-4 h-4" />
                  Settings
                </button>
                <button className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-[#525252] hover:bg-[rgba(0,0,0,0.04)] hover:text-[#171717] rounded-md transition-colors">
                  <Zap className="w-4 h-4" />
                  Plans
                </button>
              </div>

              {/* Content of the Modal */}
              <div className="flex-1 p-6 relative">
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 p-1.5 text-[#a3a3a3] hover:text-[#171717] hover:bg-[#f0f0f0] rounded-md transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <h2 className="text-xl font-bold text-[#171717] font-display mb-6 pb-2 border-b border-[rgba(0,0,0,0.06)]">
                  My profile
                </h2>

                <div className="space-y-6">
                  <div>
                    <div className="text-[13px] font-semibold text-[#737373] mb-1">Current Status</div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-[15px] font-medium text-[#171717]">Open to new opportunities</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[13px] font-semibold text-[#737373] mb-2">Members (1/1)</div>
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-[rgba(0,0,0,0.06)] bg-[#fafafa]">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold overflow-hidden shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/someshsaini/images/somesh saini headshot.jpg" alt="Somesh" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[14px] font-semibold text-[#171717] truncate">Somesh Saini</div>
                      </div>
                      <div className="text-[11px] font-medium px-2 py-0.5 rounded bg-[rgba(0,0,0,0.06)] text-[#525252]">Admin</div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[rgba(0,0,0,0.06)]">
                    <button 
                      onClick={() => {
                        onClose();
                        setActiveTab('Contact');
                      }}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#171717] text-white rounded-[6px] hover:bg-[#333] transition-colors font-medium shadow-sm active:scale-[0.98]"
                    >
                      <Mail className="w-4 h-4" />
                      Invite to your workspace
                    </button>
                    <p className="text-center text-[12px] text-[#737373] mt-3">
                      This will take you to the Contact tab to get in touch!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
