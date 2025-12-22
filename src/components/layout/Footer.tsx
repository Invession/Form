import { Link } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-card/30 border-t border-border/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="orb orb-2 -bottom-[300px] right-0 opacity-20" />
      </div>

      <div className="container-wide mx-auto px-6 py-12 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-accent-gradient flex items-center justify-center shadow-accent group-hover:shadow-glow transition-shadow duration-300">
              <span className="text-accent-foreground font-bold text-lg">F</span>
            </div>
            <span className="font-semibold text-xl text-foreground">Form Spotter</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Form Spotter. All rights reserved. Product and Service of Kimetra.
          </p>
        </div>
      </div>
    </footer>
  );
}
