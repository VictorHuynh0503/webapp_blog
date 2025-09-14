import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const location = useLocation();

  const primaryNavItems = [
    { path: '/homepage', label: 'Home', icon: 'Home' },
    { path: '/creator-studio', label: 'Create', icon: 'PenTool' },
    { path: '/topic-universes', label: 'Explore', icon: 'Compass' },
    { path: '/reader-dashboard', label: 'Dashboard', icon: 'BarChart3' },
  ];

  const secondaryNavItems = [
    { path: '/community-hub', label: 'Community', icon: 'Users' },
    { path: '/creator-profiles', label: 'Profiles', icon: 'User' },
  ];

  const isActiveRoute = (path) => location?.pathname === path;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleMoreMenu = () => setIsMoreMenuOpen(!isMoreMenuOpen);

  const Logo = () => (
    <Link to="/homepage" className="flex items-center space-x-3 group">
      <div className="relative">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          <circle
            cx="16"
            cy="16"
            r="14"
            fill="var(--color-primary)"
            className="transition-colors duration-300"
          />
          <path
            d="M12 10h8v2h-6v4h5v2h-5v4h6v2h-8V10z"
            fill="var(--color-primary-foreground)"
          />
          <circle
            cx="20"
            cy="12"
            r="2"
            fill="var(--color-accent)"
            className="animate-pulse"
          />
        </svg>
      </div>
      <span className="text-xl font-bold text-primary font-inter tracking-tight">
        BlogCraft
      </span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {primaryNavItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActiveRoute(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.label}</span>
              </Link>
            ))}

            {/* More Menu */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMoreMenu}
                className="flex items-center space-x-2"
              >
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
                <Icon 
                  name="ChevronDown" 
                  size={14} 
                  className={`transition-transform duration-200 ${
                    isMoreMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </Button>

              {isMoreMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-popover border border-border rounded-md shadow-intellectual z-50">
                  <div className="py-2">
                    {secondaryNavItems?.map((item) => (
                      <Link
                        key={item?.path}
                        to={item?.path}
                        onClick={() => setIsMoreMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 ${
                          isActiveRoute(item?.path)
                            ? 'bg-primary text-primary-foreground'
                            : 'text-popover-foreground hover:bg-muted'
                        }`}
                      >
                        <Icon name={item?.icon} size={16} />
                        <span>{item?.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Icon name="Search" size={16} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Bell" size={16} />
            </Button>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="py-4 space-y-2">
              {[...primaryNavItems, ...secondaryNavItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActiveRoute(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.label}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-border mt-4 space-y-2">
                <Button variant="outline" fullWidth className="justify-start">
                  <Icon name="LogIn" size={16} className="mr-2" />
                  Sign In
                </Button>
                <Button fullWidth className="justify-start">
                  <Icon name="UserPlus" size={16} className="mr-2" />
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      {/* Overlay for more menu */}
      {isMoreMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMoreMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;