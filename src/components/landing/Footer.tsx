
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="py-12 bg-black text-white border-t border-zinc-800">
      <div className="skribh-container">
        <div className="skribh-grid">
          <div className="col-span-12 md:col-span-4">
            <div className="text-3xl font-bold mb-4 text-red-600">Skribh</div>
            <p className="mb-4 text-zinc-400">Revolutionizing prehospital care with AI-driven documentation</p>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 text-right">
            <div className="mb-4 text-zinc-400">© 2023 Skribh. All rights reserved.</div>
            <div className="flex justify-end space-x-4">
              <Link to="#" className="text-zinc-400 hover:text-red-500">Privacy</Link>
              <Link to="#" className="text-zinc-400 hover:text-red-500">Terms</Link>
              <Link to="#" className="text-zinc-400 hover:text-red-500">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
