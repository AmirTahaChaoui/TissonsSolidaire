import React from 'react';
import { Recycle, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Recycle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold">EcoTextile</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Votre recyclerie textile locale, engagée pour l'environnement et l'économie circulaire. 
              Donnez une seconde vie à vos vêtements et trouvez des pièces uniques à prix abordables.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Nos articles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Comment ça marche</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Notre impact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Qui sommes-nous</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@ecotextile.fr</span>
              </div>
              <p>123 Rue de la Recyclerie<br />75000 Paris</p>
              <p>Du lundi au samedi<br />9h - 18h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EcoTextile. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}