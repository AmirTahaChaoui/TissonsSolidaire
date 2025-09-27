import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Heart, Users, Leaf, Target, Award, Globe, User } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: Leaf,
      title: 'Écologie',
      description: 'Réduire l\'impact environnemental de l\'industrie textile en donnant une seconde vie aux vêtements.'
    },
    {
      icon: Heart,
      title: 'Solidarité',
      description: 'Rendre la mode accessible à tous en proposant des vêtements de qualité à prix abordables.'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Créer du lien social autour du partage et de la consommation responsable.'
    },
    {
      icon: Target,
      title: 'Transparence',
      description: 'Fonctionner avec transparence sur nos pratiques et notre impact.'
    }
  ];

  const stats = [
    { label: 'Vêtements collectés', value: '25,000+', icon: '👕' },
    { label: 'Familles aidées', value: '1,200+', icon: '👨‍👩‍👧‍👦' },
    { label: 'CO2 économisé', value: '8 tonnes', icon: '🌱' },
    { label: 'Emplois créés', value: '12', icon: '💼' }
  ];

  const team = [
    {
      name: 'Marie Dubois',
      role: 'Fondatrice & Directrice',
      description: 'Passionnée d\'écologie et de mode éthique depuis 15 ans.'
    },
    {
      name: 'Pierre Martin',
      role: 'Responsable des opérations',
      description: 'Expert en logistique et gestion des stocks textiles.'
    },
    {
      name: 'Sophie Chen',
      role: 'Responsable qualité',
      description: 'Spécialiste du tri et de l\'évaluation des textiles.'
    },
    {
      name: 'Lucas Moreau',
      role: 'Community Manager',
      description: 'Anime notre communauté et développe nos partenariats.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl mb-6 text-gray-900">
              Qui sommes-nous ?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              EcoTextile est née d'une vision simple : créer un monde où chaque vêtement 
              a plusieurs vies, où la mode rime avec respect de l'environnement et solidarité.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">Notre Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Depuis 2019, nous œuvrons pour transformer la façon dont nous consommons 
                la mode. Notre mission est triple : réduire les déchets textiles, 
                rendre la mode accessible à tous, et créer une communauté engagée.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Chaque vêtement qui passe par nos mains évite la décharge et trouve 
                un nouveau propriétaire qui l'appréciera. C'est notre façon de 
                contribuer à une économie circulaire et solidaire.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-100 text-green-800">Économie circulaire</Badge>
                <Badge className="bg-blue-100 text-blue-800">Mode accessible</Badge>
                <Badge className="bg-purple-100 text-purple-800">Impact social</Badge>
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1750343293522-2f08b60a317a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjByZWN5Y2xpbmclMjBjbG90aGVzfGVufDF8fHx8MTc1ODg4NzQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mission EcoTextile"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Nos chiffres clés</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              5 ans d'engagement pour l'environnement et la solidarité
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-semibold text-green-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Nos Valeurs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl mb-3 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Notre Équipe</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une équipe passionnée et engagée pour la cause environnementale
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reconnaissance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Reconnaissances</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre engagement reconnu par nos partenaires et la communauté
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Label ESS</h3>
                <p className="text-gray-600 text-sm">Économie Sociale et Solidaire</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Globe className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Partenaire Eco-Organisme</h3>
                <p className="text-gray-600 text-sm">Collecte textile agréée</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Réseau RExT</h3>
                <p className="text-gray-600 text-sm">Réseau Textile Solidaire</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}