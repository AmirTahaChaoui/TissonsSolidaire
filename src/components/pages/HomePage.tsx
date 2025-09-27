import React from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Recycle, Heart, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const stats = [
    { icon: Recycle, label: 'Vêtements recyclés', value: '15,000+' },
    { icon: Users, label: 'Clients satisfaits', value: '2,500+' },
    { icon: Heart, label: 'Familles aidées', value: '800+' },
    { icon: TrendingUp, label: 'CO2 économisé', value: '5 tonnes' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl mb-6 text-gray-900">
                Donnez une <span className="text-green-600">seconde vie</span> à vos vêtements
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                EcoTextile, votre recyclerie textile locale. Déposez vos vêtements inutilisés 
                et découvrez des pièces uniques à prix abordables, tout en agissant pour la planète.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => onNavigate('articles')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Découvrir nos articles
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => onNavigate('how-it-works')}
                >
                  Comment ça marche ?
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1750343293522-2f08b60a317a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjByZWN5Y2xpbmclMjBjbG90aGVzfGVufDF8fHx8MTc1ODg4NzQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Vêtements durables et recyclage textile"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-semibold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1740885697356-bcbadf118e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhjbG90aGluZyUyMGRvbmF0aW9uJTIwd2FyZHJvYmV8ZW58MXx8fHwxNzU4ODg3NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dressing et garde-robe organisée"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">Notre Histoire</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Créée en 2019 par une équipe passionnée d'écologie et de mode responsable, 
                EcoTextile est née du constat que trop de vêtements finissent à la poubelle 
                alors qu'ils pourraient encore servir.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Notre mission : créer un pont entre ceux qui ont des vêtements à donner 
                et ceux qui cherchent des pièces de qualité à prix accessible, 
                tout en réduisant l'impact environnemental de l'industrie textile.
              </p>
              <Button 
                variant="outline" 
                onClick={() => onNavigate('about')}
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              >
                En savoir plus sur nous
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Comment ça marche ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un processus simple et transparent pour donner et recevoir
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-semibold text-green-600">1</span>
                </div>
                <h3 className="text-xl mb-3">Déposez vos vêtements</h3>
                <p className="text-gray-600">
                  Apportez vos vêtements en bon état dans notre local. 
                  Nous les trions et les préparons pour la vente.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-semibold text-green-600">2</span>
                </div>
                <h3 className="text-xl mb-3">Parcourez notre sélection</h3>
                <p className="text-gray-600">
                  Découvrez notre catalogue en ligne ou venez directement 
                  dans notre boutique pour voir nos articles.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-semibold text-green-600">3</span>
                </div>
                <h3 className="text-xl mb-3">Réservez et récupérez</h3>
                <p className="text-gray-600">
                  Réservez en ligne et venez récupérer vos articles. 
                  Le paiement se fait sur place.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={() => onNavigate('how-it-works')}
              className="bg-green-600 hover:bg-green-700"
            >
              Voir le fonctionnement détaillé
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Prêt à faire la différence ?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Rejoignez notre communauté et contribuez à un avenir plus durable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => onNavigate('articles')}
            >
              Voir nos articles
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-green-600"
              onClick={() => onNavigate('contact')}
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}