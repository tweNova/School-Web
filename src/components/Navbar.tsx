import { useState } from "react";
import { Menu, X, Search, GraduationCap, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#courses" },
  { label: "Academics", href: "#about" },
  { label: "Teachers", href: "#teachers" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          <GraduationCap className="w-8 h-8 text-primary" />
          <span className="text-xl font-heading font-bold">
            Rose Merry Model <span className="text-secondary">Public School</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground font-medium text-sm hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="p-2 hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            <GraduationCap className="w-4 h-4" />
            APPLY NOW
          </a>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t">
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
