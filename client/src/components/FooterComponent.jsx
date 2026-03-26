import { NavLink } from "react-router-dom";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#F3F5F8] border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {/* COL 1 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8FA7BB] mb-4">
              Collection
            </h4>
            <ul className="space-y-2">
              <li><NavLink to="/browse" className="footer-link">All Books</NavLink></li>
              <li><NavLink to="/new-arrivals" className="footer-link">New Arrivals</NavLink></li>
              <li><NavLink to="/best-sellers" className="footer-link">Best Sellers</NavLink></li>
            </ul>
          </div>

          {/* COL 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8FA7BB] mb-4">
              Authors
            </h4>
            <ul className="space-y-2">
              <li><NavLink to="/authors" className="footer-link">Browse Authors</NavLink></li>
              <li><NavLink to="/author-interviews" className="footer-link">Interviews</NavLink></li>
              <li><NavLink to="/submit-work" className="footer-link">Submit Manuscript</NavLink></li>
            </ul>
          </div>

          {/* COL 3 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8FA7BB] mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li><NavLink to="/about" className="footer-link">Our Story</NavLink></li>
              <li><NavLink to="/careers" className="footer-link">Careers</NavLink></li>
              <li><NavLink to="/contact" className="footer-link">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* COL 4 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8FA7BB] mb-4">
              Connect
            </h4>

            {/* Social Icons (no PrimeReact) */}
            <div className="flex gap-4 mb-4">
              <span className="footer-icon">IG</span>
              <span className="footer-icon">TW</span>
              <span className="footer-icon">FB</span>
            </div>

            <p className="text-sm text-slate-400 cursor-pointer hover:text-[#7D9AB3] transition">
              hello@bookshelf.io
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-slate-200" />

        {/* BOTTOM */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl font-serif font-bold text-slate-800">
            Bookshelf
          </h2>

          <p className="text-xs text-slate-400 tracking-widest uppercase">
            &copy; {currentYear} — Est. 2026
          </p>
        </div>

      </div>
    </footer>
  );
};

export default FooterComponent;