import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "../Sidebar";
import { FiX } from "react-icons/fi";

interface SidebarMobileProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}

export default function SidebarMobile({
  isSidebarOpen,
  closeSidebar,
}: SidebarMobileProps) {
  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
          />
          {/* Sidebar */}
          <motion.div
            className="absolute right-0 top-0 h-full"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <Sidebar onNavigate={closeSidebar} />
            {/* Close Button */}
            <button
              onClick={closeSidebar}
              className="absolute top-4 left-4 z-10 text-white hover:bg-white/10 rounded-lg p-2 transition-colors"
            >
              <FiX size={20} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
