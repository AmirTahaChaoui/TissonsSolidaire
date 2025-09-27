import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Plus, Edit, Trash2, Users, ShoppingBag, TrendingUp, DollarSign } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function AdminPage() {
  const [isAddArticleOpen, setIsAddArticleOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);

  // Mock data pour l'administration
  const [articles, setArticles] = useState([
    {
      id: 1,
      name: 'Veste en jean vintage',
      category: 'Vestes',
      size: 'M',
      price: 25,
      condition: 'Très bon état',
      status: 'Disponible',
      addedDate: '2024-01-15',
      reserved: false
    },
    {
      id: 2,
      name: 'Robe d\'été fleurie',
      category: 'Robes',
      size: 'S',
      price: 18,
      condition: 'Bon état',
      status: 'Réservé',
      addedDate: '2024-01-14',
      reserved: true
    },
    // Plus d'articles...
  ]);

  const [users] = useState([
    { id: 1, name: 'Marie Dubois', email: 'marie@exemple.fr', role: 'user', joinDate: '2024-01-10', reservations: 3 },
    { id: 2, name: 'Pierre Martin', email: 'pierre@exemple.fr', role: 'user', joinDate: '2024-01-08', reservations: 1 },
    { id: 3, name: 'Sophie Chen', email: 'sophie@exemple.fr', role: 'user', joinDate: '2024-01-05', reservations: 5 },
  ]);

  const stats = [
    { title: 'Total Articles', value: '156', icon: ShoppingBag, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { title: 'Utilisateurs', value: '89', icon: Users, color: 'text-green-600', bgColor: 'bg-green-100' },
    { title: 'Ventes du mois', value: '42', icon: TrendingUp, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { title: 'Revenus', value: '1,250€', icon: DollarSign, color: 'text-orange-600', bgColor: 'bg-orange-100' },
  ];

  const [newArticle, setNewArticle] = useState({
    name: '',
    category: '',
    size: '',
    price: '',
    condition: '',
    description: ''
  });

  const handleAddArticle = (e: React.FormEvent) => {
    e.preventDefault();
    const article = {
      id: articles.length + 1,
      ...newArticle,
      price: parseFloat(newArticle.price),
      status: 'Disponible',
      addedDate: new Date().toISOString().split('T')[0],
      reserved: false
    };
    setArticles([...articles, article]);
    setNewArticle({ name: '', category: '', size: '', price: '', condition: '', description: '' });
    setIsAddArticleOpen(false);
    toast.success('Article ajouté avec succès !');
  };

  const handleDeleteArticle = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
      setArticles(articles.filter(article => article.id !== id));
      toast.success('Article supprimé !');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Disponible': return 'bg-green-100 text-green-800';
      case 'Réservé': return 'bg-orange-100 text-orange-800';
      case 'Vendu': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
          <h1 className="text-3xl mb-2 text-gray-900">Administration</h1>
          <p className="text-gray-600">
            Gérez votre inventaire, vos utilisateurs et suivez vos statistiques
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="articles" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="users">Utilisateurs</TabsTrigger>
            <TabsTrigger value="analytics">Statistiques</TabsTrigger>
          </TabsList>

          {/* Gestion des Articles */}
          <TabsContent value="articles">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Gestion des Articles</CardTitle>
                  <Dialog open={isAddArticleOpen} onOpenChange={setIsAddArticleOpen}>
                    <DialogTrigger asChild>
                      <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Ajouter un article
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Ajouter un nouvel article</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleAddArticle} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Nom de l'article *</Label>
                          <Input
                            id="name"
                            value={newArticle.name}
                            onChange={(e) => setNewArticle({...newArticle, name: e.target.value})}
                            placeholder="Ex: Veste en jean vintage"
                            required
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="category">Catégorie *</Label>
                            <Select value={newArticle.category} onValueChange={(value) => setNewArticle({...newArticle, category: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="Catégorie" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Vestes">Vestes</SelectItem>
                                <SelectItem value="Robes">Robes</SelectItem>
                                <SelectItem value="Pulls">Pulls</SelectItem>
                                <SelectItem value="Pantalons">Pantalons</SelectItem>
                                <SelectItem value="Chemises">Chemises</SelectItem>
                                <SelectItem value="Manteaux">Manteaux</SelectItem>
                                <SelectItem value="Accessoires">Accessoires</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="size">Taille *</Label>
                            <Select value={newArticle.size} onValueChange={(value) => setNewArticle({...newArticle, size: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="Taille" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="XS">XS</SelectItem>
                                <SelectItem value="S">S</SelectItem>
                                <SelectItem value="M">M</SelectItem>
                                <SelectItem value="L">L</SelectItem>
                                <SelectItem value="XL">XL</SelectItem>
                                <SelectItem value="XXL">XXL</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="price">Prix (€) *</Label>
                            <Input
                              id="price"
                              type="number"
                              value={newArticle.price}
                              onChange={(e) => setNewArticle({...newArticle, price: e.target.value})}
                              placeholder="25"
                              min="0"
                              step="0.01"
                              required
                            />
                          </div>

                          <div>
                            <Label htmlFor="condition">État *</Label>
                            <Select value={newArticle.condition} onValueChange={(value) => setNewArticle({...newArticle, condition: value})}>
                              <SelectTrigger>
                                <SelectValue placeholder="État" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Excellent état">Excellent état</SelectItem>
                                <SelectItem value="Très bon état">Très bon état</SelectItem>
                                <SelectItem value="Bon état">Bon état</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            value={newArticle.description}
                            onChange={(e) => setNewArticle({...newArticle, description: e.target.value})}
                            placeholder="Description optionnelle..."
                            rows={3}
                          />
                        </div>

                        <Button type="submit" className="w-full">
                          Ajouter l'article
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Article</TableHead>
                        <TableHead>Catégorie</TableHead>
                        <TableHead>Taille</TableHead>
                        <TableHead>Prix</TableHead>
                        <TableHead>État</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Date ajout</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {articles.map((article) => (
                        <TableRow key={article.id}>
                          <TableCell className="font-medium">{article.name}</TableCell>
                          <TableCell>{article.category}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{article.size}</Badge>
                          </TableCell>
                          <TableCell>{article.price}€</TableCell>
                          <TableCell>
                            <Badge className={getConditionColor(article.condition)}>
                              {article.condition}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(article.status)}>
                              {article.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{new Date(article.addedDate).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleDeleteArticle(article.id)}
                                className="text-red-600 hover:text-red-700"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gestion des Utilisateurs */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Utilisateurs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nom</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Rôle</TableHead>
                        <TableHead>Date d'inscription</TableHead>
                        <TableHead>Réservations</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Badge variant={user.role === 'admin' ? 'default' : 'outline'}>
                              {user.role === 'admin' ? 'Admin' : 'Utilisateur'}
                            </Badge>
                          </TableCell>
                          <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
                          <TableCell>{user.reservations}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Statistiques */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ventes par Catégorie</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Vestes</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Robes</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Pulls</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                        <span className="text-sm font-medium">30%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Évolution Mensuelle</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Articles ajoutés ce mois</span>
                      <span className="font-semibold text-green-600">+23</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Articles vendus ce mois</span>
                      <span className="font-semibold text-blue-600">42</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Nouveaux utilisateurs</span>
                      <span className="font-semibold text-purple-600">+8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Revenus du mois</span>
                      <span className="font-semibold text-orange-600">1,250€</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}