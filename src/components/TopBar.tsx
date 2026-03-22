import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-dark text-dark-foreground py-2">
      <div className="container flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground hidden sm:inline">Follow Us:</span>
          <div className="flex gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            Islampur, uttar dinajpur , westbengal, india
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-primary" />
            rosemerrymodelpublicschool@gmail.com
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-primary" />
            +919932239526
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
