import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Search, Filter, Heart, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticlesPageProps {
  isAuthenticated: boolean;
  onAuth: () => void;
}

export function ArticlesPage({ isAuthenticated, onAuth }: ArticlesPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sizeFilter, setSizeFilter] = useState('all');

  // Mock data pour les articles
  const articles = [
    {
      id: 1,
      name: 'Veste en jean vintage',
      category: 'Vestes',
      size: 'M',
      price: 25,
      condition: 'Très bon état',
      image: 'https://images.unsplash.com/photo-1606055059939-7e0386191381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2xvdGhpbmclMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4ODg3NDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      reserved: false,
    },
    {
      id: 2,
      name: 'Robe d\'été fleurie',
      category: 'Robes',
      size: 'S',
      price: 18,
      condition: 'Bon état',
      image: 'https://images.unsplash.com/photo-1606055059939-7e0386191381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2xvdGhpbmclMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4ODg3NDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      reserved: false,
    },
    {
      id: 3,
      name: 'Pull en laine mérinos',
      category: 'Pulls',
      size: 'L',
      price: 30,
      condition: 'Excellent état',
      image: 'https://images.unsplash.com/photo-1606055059939-7e0386191381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2xvdGhpbmclMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4ODg3NDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      reserved: true,
    },
    {
      id: 4,
      name: 'Pantalon chino beige',
      category: 'Pantalons',
      size: 'M',
      price: 22,
      condition: 'Bon état',
      image: 'https://images.unsplash.com/photo-1606055059939-7e0386191381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2xvdGhpbmclMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4ODg3NDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      reserved: false,
    },
    {
      id: 5,
      name: 'Chemise à carreaux',
      category: 'Chemises',
      size: 'L',
      price: 15,
      condition: 'Très bon état',
      image: 'https://images.unsplash.com/photo-1606055059939-7e0386191381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2xvdGhpbmclMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4ODg3NDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      reserved: false,
    },
    {
      id: 6,
      name: 'Manteau d\'hiver noir',
      category: 'Manteaux',
      size: 'M',
      price: 45,
      condition: 'Excellent état',
      image: 'https://images.unsplash.com/photo-1606055059939-7e0386191381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2xvdGhpbmclMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4ODg3NDg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      reserved: false,
    },
  ];

  const categories = ['all', 'Vestes', 'Robes', 'Pulls', 'Pantalons', 'Chemises', 'Manteaux'];
  const sizes = ['all', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || article.category === categoryFilter;
    const matchesSize = sizeFilter === 'all' || article.size === sizeFilter;
    
    return matchesSearch && matchesCategory && matchesSize;
  });

  const handleReserve = (articleId: number) => {
    if (!isAuthenticated) {
      onAuth();
      return;
    }
    // Logique de réservation (sera implémentée avec Supabase)
    alert('Article réservé ! Vous pouvez venir le récupérer dans notre local.');
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Excellent état': return 'bg-green-100 text-green-800';
      case 'Très bon état': return 'bg-blue-100 text-blue-800';
      case 'Bon état': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-4 text-gray-900">Nos Articles</h1>
          <p className="text-gray-600">
            Découvrez notre sélection de vêtements de seconde main, soigneusement triés et à prix abordables
          </p>
        </div>

        {/* Filtres */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'Toutes les catégories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sizeFilter} onValueChange={setSizeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Taille" />
              </SelectTrigger>
              <SelectContent>
                {sizes.map(size => (
                  <SelectItem key={size} value={size}>
                    {size === 'all' ? 'Toutes les tailles' : size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4">
            <div className="text-center">
              <div className="text-2xl font-semibold text-green-600">{filteredArticles.length}</div>
              <div className="text-gray-600">Articles disponibles</div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <div className="text-2xl font-semibold text-blue-600">
                {filteredArticles.filter(a => !a.reserved).length}
              </div>
              <div className="text-gray-600">En stock</div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <div className="text-2xl font-semibold text-orange-600">
                {filteredArticles.filter(a => a.reserved).length}
              </div>
              <div className="text-gray-600">Réservés</div>
            </div>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <ImageWithFallback
                  src={article.image}
                  alt={article.name}
                  className="w-full h-48 object-cover"
                />
                {article.reserved && (
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      Réservé
                    </Badge>
                  </div>
                )}
                <div className="absolute top-2 left-2">
                  <Badge className={getConditionColor(article.condition)}>
                    {article.condition}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{article.name}</h3>
                  <Button variant="ghost" size="sm" className="p-1 h-auto">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">{article.category}</Badge>
                  <Badge variant="outline">Taille {article.size}</Badge>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-semibold text-green-600">{article.price}€</span>
                  <Button
                    onClick={() => handleReserve(article.id)}
                    disabled={article.reserved}
                    className={`flex items-center gap-2 ${
                      article.reserved 
                        ? 'bg-gray-300 cursor-not-allowed' 
                        : 'bg-green-600 hover:bg-green-700'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {article.reserved ? 'Réservé' : 'Réserver'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl text-gray-600 mb-2">Aucun article trouvé</h3>
            <p className="text-gray-500">
              Essayez de modifier vos critères de recherche ou revenez plus tard
            </p>
          </div>
        )}
      </div>
    </div>
  );
}