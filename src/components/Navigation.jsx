import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navigation = () => {
  const now = new Date();
  const targetDate = new Date("2026-02-03T00:00:00");
  const isAccessible = now >= targetDate;

  // Jika belum tanggal 3 Februari 2026, hanya tampilkan countdown
  const availableLinks = isAccessible 
    ? ['/', '/countdown', '/wishes', '/memories']
    : ['/countdown'];

  const getIcon = (path) => {
    switch(path) {
      case '/': return '🏠';
      case '/countdown': return '⏳';
      case '/wishes': return '💌';
      case '/memories': return '📸';
      default: return '🏠';
    }
  };

  return (
    <nav className="fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="flex bg-white bg-opacity-80 backdrop-blur-md rounded-full shadow-lg p-2 pointer-events-auto"
      >
        {availableLinks.map((path, i) => (
          <Link 
            key={i} 
            to={path}
            className="mx-2 p-2 rounded-full hover:bg-pink-100 transition-colors"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {getIcon(path)}
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </nav>
  )
}

export default Navigation
