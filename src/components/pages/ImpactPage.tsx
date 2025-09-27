import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Leaf, Droplets, Zap, Recycle, TrendingUp, Globe, Users, Target } from 'lucide-react';

export function ImpactPage() {
  const environmentalStats = [
    {
      icon: Recycle,
      title: 'Vêtements sauvés',
      value: '25,000',
      unit: 'pièces',
      description: 'Évités de la décharge',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Droplets,
      title: 'Eau économisée',
      value: '2.5M',
      unit: 'litres',
      description: 'Équivalent à la production textile',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Zap,
      title: 'Énergie économisée',
      value: '45,000',
      unit: 'kWh',
      description: 'Énergie non utilisée',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Leaf,
      title: 'CO2 évité',
      value: '8.2',
      unit: 'tonnes',
      description: 'Émissions non produites',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    }
  ];

  const socialStats = [
    {
      icon: Users,
      title: 'Familles aidées',
      value: '1,200',
      description: 'Accès à des vêtements abordables',
      progress: 85
    },
    {
      icon: Target,
      title: 'Emplois créés',
      value: '12',
      description: 'Postes directs et indirects',
      progress: 75
    },
    {
      icon: Globe,
      title: 'Partenariats',
      value: '28',
      description: 'Associations et entreprises',
      progress: 90
    }
  ];

  const objectives2024 = [
    { goal: 'Collecter 40,000 vêtements', progress: 62, current: '25,000', target: '40,000' },
    { goal: 'Aider 2,000 familles', progress: 60, current: '1,200', target: '2,000' },
    { goal: 'Réduire de 15 tonnes de CO2', progress: 55, current: '8.2', target: '15' },
    { goal: 'Créer 5 nouveaux emplois', progress: 40, current: '2', target: '5' }
  ];

  const comparisons = [
    {
      item: '1 jean recyclé',
      equivalent: '2,700 litres d\'eau économisés',
      icon: '👖',
      detail: 'Équivalent à 54 douches'
    },
    {
      item: '1 t-shirt recyclé',
      equivalent: '700 litres d\'eau économisés',
      icon: '👕',
      detail: 'Équivalent à 14 douches'
    },
    {
      item: '1 robe recyclée',
      equivalent: '1,800 litres d\'eau économisés',
      icon: '👗',
      detail: 'Équivalent à 36 douches'
    },
    {
      item: '1 pull recyclé',
      equivalent: '5.5 kg CO2 évités',
      icon: '🧥',
      detail: 'Équivalent à 35 km en voiture'
    }
  ];

  const monthlyData = [
    { month: 'Jan', collected: 1800, sold: 1650 },
    { month: 'Fév', collected: 2100, sold: 1890 },
    { month: 'Mar', collected: 2300, sold: 2050 },
    { month: 'Avr', collected: 2600, sold: 2200 },
    { month: 'Mai', collected: 2800, sold: 2400 },
    { month: 'Juin', collected: 2900, sold: 2600 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl mb-6 text-gray-900">
              Notre Impact <span className="text-green-600">Écologique</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Chaque vêtement recyclé contribue à préserver notre planète. 
              Découvrez l'impact concret de votre engagement avec EcoTextile.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Environnemental */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Impact Environnemental</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nos résultats concrets depuis 2019
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {environmentalStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                      <span className="text-lg ml-1">{stat.unit}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{stat.title}</h3>
                    <p className="text-gray-600 text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparaisons concrètes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Impact par Vêtement</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              L'impact concret de chaque vêtement recyclé
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comparisons.map((comparison, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{comparison.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{comparison.item}</h3>
                  <p className="text-green-600 font-medium mb-2">{comparison.equivalent}</p>
                  <p className="text-gray-500 text-sm">{comparison.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Social */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Impact Social</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Au-delà de l'environnement, nous créons du lien social et de l'emploi
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {socialStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="p-6">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-blue-600 font-medium">{stat.title}</div>
                      </div>
                    </div>
                    <Progress value={stat.progress} className="mb-2" />
                    <p className="text-gray-600 text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Objectifs 2024 */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Nos Objectifs 2024</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Où nous en sommes dans nos ambitions pour cette année
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {objectives2024.map((objective, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-900">{objective.goal}</h3>
                    <Badge variant="outline" className="text-green-700">
                      {objective.progress}%
                    </Badge>
                  </div>
                  <Progress value={objective.progress} className="mb-3" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Actuel : {objective.current}</span>
                    <span>Objectif : {objective.target}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Évolution mensuelle */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Évolution 2024</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre progression mois par mois
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Collecte */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vêtements Collectés</h3>
                <div className="space-y-3">
                  {monthlyData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-600">{data.month}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${(data.collected / 3000) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-16 text-right">{data.collected}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Vente */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vêtements Vendus</h3>
                <div className="space-y-3">
                  {monthlyData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-600">{data.month}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${(data.sold / 3000) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-16 text-right">{data.sold}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Nos Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre engagement reconnu par des organismes officiels
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Éco-Organisme Agréé</h3>
                <p className="text-gray-600 text-sm">
                  Collecte textile officielle selon les normes environnementales
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Label B-Corp</h3>
                <p className="text-gray-600 text-sm">
                  Entreprise à impact social et environnemental positif
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">ESS Certifié</h3>
                <p className="text-gray-600 text-sm">
                  Économie Sociale et Solidaire reconnue
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Vous aussi, contribuez à l'impact !</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Chaque geste compte. Rejoignez notre mouvement pour une mode plus durable.
          </p>
          <div className="text-center">
            <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
              +25,000 vêtements sauvés grâce à vous !
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
}