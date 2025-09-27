import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu, User, ShoppingBag, Recycle } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isAuthenticated: boolean;
  onAuth: () => void;
  onLogout: () => void;
  userRole: 'user' | 'admin' | null;
}

export function Header({ currentPage, onNavigate, isAuthenticated, onAuth, onLogout, userRole }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'articles', label: 'Articles' },
    { id: 'about', label: 'Qui sommes-nous ?' },
    { id: 'how-it-works', label: 'Fonctionnement' },
    { id: 'impact', label: 'Impact écologique' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <Recycle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">EcoTextile</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                {userRole === 'admin' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onNavigate('admin')}
                    className={currentPage === 'admin' ? 'bg-green-100' : ''}
                  >
                    Admin
                  </Button>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onNavigate('reservations')}
                  className={`flex items-center gap-2 ${currentPage === 'reservations' ? 'bg-green-100' : ''}`}
                >
                  <ShoppingBag className="w-4 h-4" />
                  Mes réservations
                </Button>
                <Button variant="ghost" size="sm" onClick={onLogout}>
                  Déconnexion
                </Button>
              </div>
            ) : (
              <Button onClick={onAuth} size="sm" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Se connecter
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 mt-8">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`p-3 text-left rounded-md transition-colors ${
                        currentPage === item.id
                          ? 'bg-green-100 text-green-700'
                          : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <div className="border-t pt-4">
                  {isAuthenticated ? (
                    <div className="flex flex-col gap-2">
                      {userRole === 'admin' && (
                        <Button
                          variant="outline"
                          onClick={() => handleNavClick('admin')}
                          className={`justify-start ${currentPage === 'admin' ? 'bg-green-100' : ''}`}
                        >
                          Administration
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        onClick={() => handleNavClick('reservations')}
                        className={`justify-start flex items-center gap-2 ${currentPage === 'reservations' ? 'bg-green-100' : ''}`}
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Mes réservations
                      </Button>
                      <Button variant="ghost" onClick={onLogout} className="justify-start">
                        Déconnexion
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={onAuth} className="w-full flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Se connecter
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}