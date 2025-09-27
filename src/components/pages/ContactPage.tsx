import React, { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { MapPin, Clock, Phone, Mail, Facebook, Instagram, Twitter, Heart, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    donationType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    toast.success('Message envoyé avec succès ! Nous vous répondrons rapidement.');
    setFormData({ name: '', email: '', subject: '', message: '', donationType: '' });
  };

  const handleDonation = (type: string) => {
    // Simulation de redirection vers système de donation
    toast.info(`Redirection vers le système de donation ${type}...`);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['123 Rue de la Recyclerie', '75000 Paris', 'France'],
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lundi - Vendredi : 9h - 18h', 'Samedi : 9h - 17h', 'Dimanche : Fermé'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+33 1 23 45 67 89', 'Appels du lundi au vendredi', '9h - 17h'],
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@ecotextile.fr', 'Réponse sous 24h', 'Du lundi au vendredi'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const faqItems = [
    {
      question: 'Quels types de vêtements acceptez-vous ?',
      answer: 'Nous acceptons tous les vêtements en bon état : tops, pantalons, robes, vestes, chaussures et accessoires. Les articles doivent être propres et sans déchirures majeures.'
    },
    {
      question: 'Comment puis-je faire un don financier ?',
      answer: 'Vous pouvez faire un don via notre plateforme en ligne, par virement bancaire ou directement dans notre boutique. Tous les dons sont défiscalisables.'
    },
    {
      question: 'Puis-je devenir bénévole ?',
      answer: 'Bien sûr ! Nous recherchons toujours des bénévoles pour nous aider au tri, à l\'accueil client et aux événements. Contactez-nous pour en savoir plus.'
    },
    {
      question: 'Organisez-vous des collectes à domicile ?',
      answer: 'Pour le moment, nous ne proposons pas de collecte à domicile. Vous pouvez déposer vos vêtements directement dans notre local aux heures d\'ouverture.'
    }
  ];

  const donationOptions = [
    {
      type: 'one-time',
      title: 'Don ponctuel',
      description: 'Soutenez notre mission avec un don unique',
      amounts: ['10€', '25€', '50€', '100€'],
      icon: '💝'
    },
    {
      type: 'monthly',
      title: 'Don mensuel',
      description: 'Engagement régulier pour un impact durable',
      amounts: ['5€/mois', '15€/mois', '30€/mois', '50€/mois'],
      icon: '🔄'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl mb-6 text-gray-900">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Une question, une suggestion, ou envie de nous soutenir ? 
              Nous sommes là pour vous écouter !
            </p>
          </div>
        </div>
      </section>

      {/* Informations de contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className={`text-sm ${detailIndex === 0 ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulaire de contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">Envoyez-nous un message</h2>
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Jean Dupont"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="jean@exemple.fr"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Sujet *</Label>
                    <Select value={formData.subject} onValueChange={(value) => setFormData({...formData, subject: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Question générale</SelectItem>
                        <SelectItem value="donation-clothes">Don de vêtements</SelectItem>
                        <SelectItem value="reservation">Réservation</SelectItem>
                        <SelectItem value="volunteer">Bénévolat</SelectItem>
                        <SelectItem value="partnership">Partenariat</SelectItem>
                        <SelectItem value="complaint">Réclamation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Votre message..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Envoyer le message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Map placeholder et réseaux sociaux */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl mb-4 text-gray-900">Trouvez-nous</h3>
                <Card className="p-6">
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4">
                    <div className="text-center text-gray-600">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Carte interactive</p>
                      <p className="text-sm">123 Rue de la Recyclerie, 75000 Paris</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button variant="outline" className="w-full">
                      Voir dans Google Maps
                    </Button>
                  </div>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl mb-4 text-gray-900">Suivez-nous</h3>
                <Card className="p-6">
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="lg" className="flex items-center gap-2">
                      <Facebook className="w-5 h-5 text-blue-600" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="lg" className="flex items-center gap-2">
                      <Instagram className="w-5 h-5 text-pink-600" />
                      Instagram
                    </Button>
                    <Button variant="outline" size="lg" className="flex items-center gap-2">
                      <Twitter className="w-5 h-5 text-blue-400" />
                      Twitter
                    </Button>
                  </div>
                  <p className="text-center text-gray-600 mt-4">
                    Restez informé de nos actualités et découvrez nos nouvelles collections !
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Système de donation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Soutenez notre mission</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vos dons nous permettent de développer nos actions et d'aider plus de familles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {donationOptions.map((option, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{option.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600">{option.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {option.amounts.map((amount, amountIndex) => (
                      <Button
                        key={amountIndex}
                        variant="outline"
                        onClick={() => handleDonation(`${option.type}-${amount}`)}
                        className="hover:bg-green-50 hover:border-green-300"
                      >
                        {amount}
                      </Button>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => handleDonation(option.type)}
                    className="w-full bg-green-600 hover:bg-green-700 flex items-center gap-2"
                  >
                    <Heart className="w-4 h-4" />
                    Faire un don {option.type === 'monthly' ? 'mensuel' : 'ponctuel'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              🧾 Tous les dons sont défiscalisables à hauteur de 66% (particuliers) ou 60% (entreprises)
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Questions Fréquentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Les réponses aux questions que vous vous posez le plus souvent
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4">Une question ? N'hésitez pas !</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Notre équipe est là pour vous accompagner dans votre démarche éco-responsable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Nous appeler
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-green-600 flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Nous écrire
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}