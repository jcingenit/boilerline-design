import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "./ui/use-mobile";

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = React.useState(false);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);
  
  const navItems = [
    { name: "About", path: "/about" },
    { 
      name: "Projects", 
      path: "/projects/production",
      hasDropdown: true,
      dropdownItems: [
        { name: "Custom Projects", path: "/projects/custom" },
        { name: "Production Projects", path: "/projects/production" }
      ]
    },
    { name: "Competition", path: "/competition" },
    { name: "Contact", path: "/contact" }
  ];
  
  return (
    <header className="border-b-2 border-accent/30 bg-primary sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="bg-primary rounded-lg w-10 h-10 flex items-center justify-center border-2 border-accent">
              <Home className="w-5 h-5 text-accent" />
            </div>
            <span className="text-2xl text-primary-foreground">
              BoilerLine Design
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setIsProjectsDropdownOpen(true)}
                  onMouseLeave={() => setIsProjectsDropdownOpen(false)}
                >
                  <button className={`text-base transition-colors relative flex items-center gap-1 ${
                    location.pathname.startsWith('/projects') 
                      ? 'text-accent' 
                      : 'text-primary-foreground hover:text-accent'
                  }`}>
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    location.pathname.startsWith('/projects') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                  
                  {/* Dropdown Menu */}
                  {isProjectsDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 w-48 z-50">
                      <div className="bg-white border border-gray-200 rounded-md shadow-lg">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.path}
                            to={dropdownItem.path}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              location.pathname === dropdownItem.path
                                ? 'bg-accent text-accent-foreground'
                                : 'text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`text-base transition-colors relative group ${
                    location.pathname === item.path 
                      ? 'text-accent' 
                      : 'text-primary-foreground hover:text-accent'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              )
            ))}
          </nav>
          


          {/* Mobile menu */}
          {isMobile && (
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="outline"
                className="border-accent text-primary hover:bg-accent hover:text-primary"
                aria-label="Open menu"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
      {/* Mobile slide-out drawer */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60]" aria-modal="true" role="dialog">
          <div
            className="absolute inset-0 bg-black/50 transition-opacity z-[60] opacity-100"
            onClick={() => setIsMenuOpen(false)}
          />
          <div
            className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white border-l shadow-lg transition-transform duration-300 ease-in-out will-change-transform z-[70] translate-x-0"
            role="document"
          >
            <div className="flex items-center justify-between p-4 border-b bg-white">
              <span className="text-base font-semibold text-foreground">Menu</span>
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-accent"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <nav className="flex flex-col p-4 gap-2 bg-white">
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.name} className="w-full">
                    <div className="text-sm font-medium text-gray-500 px-3 py-2">{item.name}</div>
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link key={dropdownItem.path} to={dropdownItem.path} className="w-full" onClick={() => setIsMenuOpen(false)}>
                        <Button
                          variant={location.pathname === dropdownItem.path ? 'default' : 'ghost'}
                          className={`${location.pathname === dropdownItem.path ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-accent'} justify-start w-full ml-4`}
                        >
                          {dropdownItem.name}
                        </Button>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link key={item.name} to={item.path} className="w-full" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant={location.pathname === item.path ? 'default' : 'ghost'}
                      className={`${location.pathname === item.path ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-accent'} justify-start w-full`}
                    >
                      {item.name}
                    </Button>
                  </Link>
                )
              ))}
              <div className="h-px bg-border my-2" />
              <Link to="/contact" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground">Join Us</Button>
              </Link>
              <Button variant="ghost" className="justify-start text-muted-foreground hover:text-accent w-full">Login</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}