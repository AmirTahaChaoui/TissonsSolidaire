import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { MapPin, Clock, CheckCircle, AlertCircle, Gift, ShoppingBag, CreditCard } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HowItWorksPageProps {
  onNavigate: (page: string) => void;
}

export function HowItWorksPage({ onNavigate }: HowItWorksPageProps) {
  const dropOffSteps = [
    {
      step: 1,
      title: 'Triez vos vêtements',
      description: 'Sélectionnez les vêtements en bon état que vous ne portez plus',
      icon: '👔',
      details: 'Vêtements propres, sans trous ni taches importantes'
    },
    {
      step: 2,
      title: 'Apportez-les au local',
      description: 'Rendez-vous à notre adresse aux horaires d\'ouverture',
      icon: '🏪',
      details: 'Du lundi au samedi, 9h-18h'
    },
    {
      step: 3,
      title: 'Évaluation et tri',
      description: 'Nous évaluons la qualité et trions par catégorie',
      icon: '✅',
      details: 'Processus transparent, vous pouvez assister au tri'
    },
    {
      step: 4,
      title: 'Mise en vente',
      description: 'Les articles sont photographiés et mis en ligne',
      icon: '📸',
      details: 'Disponibles sur notre site et en boutique'
    }
  ];

  const purchaseSteps = [
    {
      step: 1,
      title: 'Parcourez le catalogue',
      description: 'Explorez nos articles en ligne ou en boutique',
      icon: '🔍',
      details: 'Filtres par taille, catégorie et prix'
    },
    {
      step: 2,
      title: 'Réservez en ligne',
      description: 'Créez un compte et réservez vos articles préférés',
      icon: '💻',
      details: 'Réservation valable 48h'
    },
    {
      step: 3,
      title: 'Venez récupérer',
      description: 'Rendez-vous au local pour essayer et acheter',
      icon: '🛍️',
      details: 'Possibilité d\'essayage sur place'
    },
    {
      step: 4,
      title: 'Paiement sur place',
      description: 'Réglez vos achats directement dans notre boutique',
      icon: '💳',
      details: 'Espèces, carte bancaire acceptées'
    }
  ];

  const acceptedItems = [
    { category: 'Vêtements', items: ['Tops', 'Pantalons', 'Robes', 'Jupes', 'Vestes'], icon: '👕' },
    { category: 'Chaussures', items: ['Baskets', 'Chaussures de ville', 'Bottes', 'Sandales'], icon: '👟' },
    { category: 'Accessoires', items: ['Sacs', 'Ceintures', 'Écharpes', 'Chapeaux'], icon: '👜' },
    { category: 'Linge de maison', items: ['Draps', 'Serviettes', 'Nappes', 'Rideaux'], icon: '🏠' }
  ];

  const notAccepted = [
    'Vêtements troués ou tachés',
    'Sous-vêtements usagés',
    'Chaussettes et collants',
    'Vêtements de sport très usés',
    'Articles de maroquinerie abîmés'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl mb-6 text-gray-900">
              Comment ça marche ?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Un processus simple et transparent pour donner et recevoir des vêtements
            </p>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-green-600" />
                <h3 className="font-semibold">Notre Adresse</h3>
              </div>
              <p className="text-gray-600">123 Rue de la Recyclerie<br />75000 Paris</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold">Horaires</h3>
              </div>
              <p className="text-gray-600">Lundi - Samedi<br />9h00 - 18h00</p>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold">Gratuité</h3>
              </div>
              <p className="text-gray-600">Dépôt gratuit<br />Aucun frais caché</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Processus de dépôt */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Déposer vos vêtements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comment donner une seconde vie à vos vêtements inutilisés
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dropOffSteps.map((step, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-semibold">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <p className="text-sm text-green-600">{step.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processus d'achat */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Acheter des vêtements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comment trouver et réserver vos pièces favorites
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {purchaseSteps.map((step, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-semibold">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <p className="text-sm text-blue-600">{step.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={() => onNavigate('articles')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Voir nos articles disponibles
            </Button>
          </div>
        </div>
      </section>

      {/* Ce que nous acceptons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Articles acceptés */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h2 className="text-2xl text-gray-900">Ce que nous acceptons</h2>
              </div>
              
              <div className="space-y-4">
                {acceptedItems.map((category, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{category.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{category.category}</h3>
                        <div className="flex flex-wrap gap-1">
                          {category.items.map((item, itemIndex) => (
                            <Badge key={itemIndex} variant="outline" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Articles non acceptés */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl text-gray-900">Ce que nous n'acceptons pas</h2>
              </div>
              
              <Card className="p-6">
                <ul className="space-y-3">
                  {notAccepted.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">💡 Conseil</h3>
                <p className="text-blue-800 text-sm">
                  En cas de doute, n'hésitez pas à nous apporter vos articles. 
                  Nous évaluerons ensemble leur état et leur potentiel de revente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Questions fréquentes</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Combien de temps mes articles restent-ils réservés ?
              </h3>
              <p className="text-gray-600">
                Vos réservations sont valables 48h. Passé ce délai, les articles 
                redeviennent disponibles pour les autres clients.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Que se passe-t-il si mes vêtements ne sont pas vendus ?
              </h3>
              <p className="text-gray-600">
                Après 3 mois en vente, nous donnons les articles invendus à des 
                associations partenaires ou les envoyons au recyclage textile.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Puis-je essayer les vêtements avant d'acheter ?
              </h3>
              <p className="text-gray-600">
                Oui ! Nous avons une cabine d'essayage dans notre boutique. 
                Vous pouvez essayer tous vos articles réservés avant l'achat.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Proposez-vous la livraison ?
              </h3>
              <p className="text-gray-600">
                Non, nous fonctionnons uniquement en retrait sur place pour maintenir 
                notre impact environnemental au minimum et favoriser le lien social.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Prêt à commencer ?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Rejoignez notre démarche éco-responsable dès aujourd'hui
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => onNavigate('articles')}
              className="flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Voir nos articles
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-green-600 flex items-center gap-2"
              onClick={() => onNavigate('contact')}
            >
              <Gift className="w-5 h-5" />
              Faire un don
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}