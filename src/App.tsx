import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/pages/HomePage';
import { ArticlesPage } from './components/pages/ArticlesPage';
import { AboutPage } from './components/pages/AboutPage';
import { HowItWorksPage } from './components/pages/HowItWorksPage';
import { ImpactPage } from './components/pages/ImpactPage';
import { ContactPage } from './components/pages/ContactPage';
import { AdminPage } from './components/admin/AdminPage';
import { AuthModal } from './components/auth/AuthModal';
import { Toaster } from './components/ui/sonner';

type UserRole = 'user' | 'admin' | null;

interface User {
  email: string;
  name: string;
  role: UserRole;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (email: string, password: string, role: UserRole = 'user') => {
    // Simulation de connexion
    const userData: User = {
      email,
      name: email === 'admin@ecotextile.fr' ? 'Administrateur' : 'Utilisateur',
      role
    };
    setUser(userData);
    setIsAuthModalOpen(false);
  };

  const handleRegister = (email: string, password: string, name: string) => {
    // Simulation d'inscription
    const userData: User = {
      email,
      name,
      role: 'user'
    };
    setUser(userData);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    if (currentPage === 'admin' || currentPage === 'reservations') {
      setCurrentPage('home');
    }
  };

  const handleNavigate = (page: string) => {
    // Vérifier l'accès aux pages protégées
    if (page === 'admin' && (!user || user.role !== 'admin')) {
      setIsAuthModalOpen(true);
      return;
    }
    if (page === 'reservations' && !user) {
      setIsAuthModalOpen(true);
      return;
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'articles':
        return <ArticlesPage isAuthenticated={!!user} onAuth={() => setIsAuthModalOpen(true)} />;
      case 'about':
        return <AboutPage />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={handleNavigate} />;
      case 'impact':
        return <ImpactPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return user?.role === 'admin' ? <AdminPage /> : <HomePage onNavigate={handleNavigate} />;
      case 'reservations':
        return user ? (
          <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl mb-8 text-gray-900">Mes Réservations</h1>
              <div className="bg-white rounded-lg p-8 text-center">
                <p className="text-gray-600 mb-4">Vous n'avez aucune réservation en cours.</p>
                <button 
                  onClick={() => handleNavigate('articles')}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                >
                  Découvrir nos articles
                </button>
              </div>
            </div>
          </div>
        ) : <HomePage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isAuthenticated={!!user}
        onAuth={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
        userRole={user?.role || null}
      />
      
      <main className="flex-1">
        {renderPage()}
      </main>
      
      <Footer />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />

      <Toaster />
    </div>
  );
}