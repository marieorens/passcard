import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, 
  Smartphone, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Wallet,
  RefreshCw,
  AlertTriangle,
  Star,
  Menu,
  X,
  MessageCircle
} from 'lucide-react';
import './App.css';

// Import des images
import passcardRecto from './assets/passcard_recto_bordures_droites.png';
import passcardVerso from './assets/passcard_verso_bordures_droites.png';
import passcardAffiche from './assets/affiche_passcard.png';

// Composant Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/linkage', label: 'Linkage Wallet' },
    { path: '/urgence', label: 'Activation Urgence' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-yellow-400 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <CreditCard className="h-8 w-8 text-black" />
            <span className="text-2xl font-bold text-black">PASSCARD</span>
          </Link>
          
          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-black text-yellow-400'
                    : 'text-black hover:bg-yellow-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Menu Mobile */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-2"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-black text-yellow-400'
                      : 'text-black hover:bg-yellow-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

// Page d'accueil
const HomePage = () => {
  const features = [
    {
      icon: <Wallet className="h-12 w-12" />,
      title: "QR Wallet Universel",
      description: "6 moyens de paiement : Orange Money, Moov Money, MTN, Wave, Visa, Mastercard",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <RefreshCw className="h-12 w-12" />,
      title: "QR Recharge Télécom",
      description: "Crédit d'appel et forfaits Internet pour tous opérateurs",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <AlertTriangle className="h-12 w-12" />,
      title: "QR Urgence Sécurité",
      description: "Contacts d'urgence accessibles en cas d'accident",
      color: "bg-red-100 text-red-600"
    }
  ];

  const stats = [
    { number: "6", label: "Moyens de Paiement" },
    { number: "3", label: "Services Intégrés" },
    { number: "2.000", label: "FCFA Prix" },
    { number: "24/7", label: "Disponibilité" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
              PASS<span className="text-yellow-600">CARD</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Plus qu'une carte : une plateforme mobile compacte pour l'inclusion numérique en Afrique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/linkage"
                className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                Configurer ma carte
              </Link>
              <Link
                to="/urgence"
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
              >
                Activer l'urgence
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cartes Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-black mb-4">Design Futuriste</h2>
            <p className="text-xl text-gray-600">Bordures droites pour un aspect moderne et technologique</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <img 
                src={passcardRecto} 
                alt="Recto PASSCARD" 
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
              <h3 className="text-2xl font-bold mt-4 text-black">Recto - QR Wallet Universel</h3>
              <p className="text-gray-600 mt-2">6 moyens de paiement intégrés</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <img 
                src={passcardVerso} 
                alt="Verso PASSCARD" 
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
              <h3 className="text-2xl font-bold mt-4 text-black">Verso - Services Complémentaires</h3>
              <p className="text-gray-600 mt-2">Recharge télécom + Urgence sécurité</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-yellow-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-black mb-4">3 Services Intégrés</h2>
            <p className="text-xl text-gray-600">Une seule carte pour tous vos besoins</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-20 h-20 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-white text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-yellow-400">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Prêt à révolutionner vos paiements ?</h2>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers d'utilisateurs qui ont déjà adopté PASSCARD pour simplifier leur vie numérique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/linkage"
                className="bg-black text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all duration-300 inline-flex items-center justify-center"
              >
                Commencer maintenant <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Page de linkage QR Wallet
const LinkagePage = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    phoneNumber: '',
    walletType: '',
    walletAccount: '',
    pin: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const walletOptions = [
    { value: 'orange', label: 'Orange Money', color: 'bg-orange-500' },
    { value: 'moov', label: 'Moov Money', color: 'bg-blue-500' },
    { value: 'mtn', label: 'MTN Mobile Money', color: 'bg-yellow-500' },
    { value: 'wave', label: 'Wave Money', color: 'bg-blue-600' },
    { value: 'visa', label: 'Visa', color: 'bg-blue-700' },
    { value: 'mastercard', label: 'Mastercard', color: 'bg-red-500' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Appel à l'API
    fetch('https://passcard-backend.onrender.com/api/wallet/link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert(data.error || 'Erreur lors de la configuration');
      }
    })
    .catch(error => {
      console.error('Erreur:', error);
      alert('Erreur de connexion au serveur');
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-md w-full"
        >
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-black mb-4">Linkage Réussi !</h2>
          <p className="text-gray-600 mb-6">
            Votre QR Wallet Universel a été configuré avec succès. Vous pouvez maintenant utiliser votre PASSCARD pour tous vos paiements.
          </p>
          <Link
            to="/"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300"
          >
            Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-2xl p-8"
        >
          <div className="text-center mb-8">
            <Wallet className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-black mb-2">Linkage QR Wallet Universel</h1>
            <p className="text-gray-600">Configurez votre moyen de paiement principal</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-black mb-2">
                Numéro de carte PASSCARD *
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="PC-XXXX-XXXX-XXXX"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-2">
                Numéro de téléphone *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="+225 XX XX XX XX XX"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-2">
                Type de wallet *
              </label>
              <select
                name="walletType"
                value={formData.walletType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              >
                <option value="">Sélectionnez votre wallet</option>
                {walletOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-2">
                Compte/Numéro wallet *
              </label>
              <input
                type="text"
                name="walletAccount"
                value={formData.walletAccount}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Numéro de compte ou carte"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-black mb-2">
                Code PIN de sécurité *
              </label>
              <input
                type="password"
                name="pin"
                value={formData.pin}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="4 chiffres"
                maxLength="4"
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-yellow-400 text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all duration-300"
            >
              Configurer le QR Wallet
            </motion.button>
          </form>

          <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-bold text-black mb-2">Moyens de paiement supportés :</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {walletOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${option.color}`}></div>
                  <span className="text-sm text-gray-600">{option.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Page d'activation urgence
const UrgencePage = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    userInfo: {
      firstName: '',
      lastName: '',
      birthDate: '',
      bloodType: '',
      allergies: '',
      medicalConditions: ''
    },
    contacts: [
      { name: '', phone: '', relation: '' },
      { name: '', phone: '', relation: '' },
      { name: '', phone: '', relation: '' },
      { name: '', phone: '', relation: '' },
      { name: '', phone: '', relation: '' }
    ]
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const relationOptions = [
    'Père', 'Mère', 'Époux/Épouse', 'Frère', 'Sœur', 
    'Fils', 'Fille', 'Ami(e)', 'Médecin', 'Autre'
  ];

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Appel à l'API
    fetch('https://passcard-backend.onrender.com/api/emergency/activate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert(data.error || 'Erreur lors de l\'activation');
      }
    })
    .catch(error => {
      console.error('Erreur:', error);
      alert('Erreur de connexion au serveur');
    });
  };

  const handleUserInfoChange = (e) => {
    setFormData({
      ...formData,
      userInfo: {
        ...formData.userInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleContactChange = (index, field, value) => {
    const newContacts = [...formData.contacts];
    newContacts[index][field] = value;
    setFormData({
      ...formData,
      contacts: newContacts
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-md w-full"
        >
          <Shield className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-black mb-4">Activation Réussie !</h2>
          <p className="text-gray-600 mb-6">
            Votre QR Urgence Sécurité a été activé avec succès. Vos contacts d'urgence sont maintenant configurés.
          </p>
          <Link
            to="/"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300"
          >
            Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-2xl p-8"
        >
          <div className="text-center mb-8">
            <Shield className="h-16 w-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-black mb-2">Activation QR Urgence Sécurité</h1>
            <p className="text-gray-600">Configurez vos contacts d'urgence et informations médicales</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Informations de la carte */}
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-black mb-4">Informations de la carte</h2>
              <div>
                <label className="block text-sm font-bold text-black mb-2">
                  Numéro de carte PASSCARD *
                </label>
                <input
                  type="text"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="PC-XXXX-XXXX-XXXX"
                  required
                />
              </div>
            </div>

            {/* Informations personnelles */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-black mb-4">Informations personnelles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Prénom *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.userInfo.firstName}
                    onChange={handleUserInfoChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Nom *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.userInfo.lastName}
                    onChange={handleUserInfoChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Date de naissance</label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.userInfo.birthDate}
                    onChange={handleUserInfoChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2">Groupe sanguin</label>
                  <select
                    name="bloodType"
                    value={formData.userInfo.bloodType}
                    onChange={handleUserInfoChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    <option value="">Sélectionnez</option>
                    {bloodTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-black mb-2">Allergies</label>
                  <textarea
                    name="allergies"
                    value={formData.userInfo.allergies}
                    onChange={handleUserInfoChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    rows="2"
                    placeholder="Mentionnez vos allergies importantes"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-black mb-2">Conditions médicales</label>
                  <textarea
                    name="medicalConditions"
                    value={formData.userInfo.medicalConditions}
                    onChange={handleUserInfoChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    rows="2"
                    placeholder="Conditions médicales importantes à signaler"
                  />
                </div>
              </div>
            </div>

            {/* Contacts d'urgence */}
            <div className="bg-red-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-black mb-4">5 Contacts d'urgence</h2>
              <div className="space-y-6">
                {formData.contacts.map((contact, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border">
                    <h3 className="font-bold text-black mb-3">Contact {index + 1}</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-black mb-2">
                          Nom complet {index < 2 ? '*' : ''}
                        </label>
                        <input
                          type="text"
                          value={contact.name}
                          onChange={(e) => handleContactChange(index, 'name', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                          required={index < 2}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-black mb-2">
                          Téléphone {index < 2 ? '*' : ''}
                        </label>
                        <input
                          type="tel"
                          value={contact.phone}
                          onChange={(e) => handleContactChange(index, 'phone', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                          placeholder="+225 XX XX XX XX XX"
                          required={index < 2}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-black mb-2">
                          Relation {index < 2 ? '*' : ''}
                        </label>
                        <select
                          value={contact.relation}
                          onChange={(e) => handleContactChange(index, 'relation', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                          required={index < 2}
                        >
                          <option value="">Sélectionnez</option>
                          {relationOptions.map((relation) => (
                            <option key={relation} value={relation}>{relation}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-red-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-red-600 transition-all duration-300"
            >
              Activer le QR Urgence Sécurité
            </motion.button>
          </form>

          <div className="mt-8 p-4 bg-red-50 rounded-lg">
            <h3 className="font-bold text-black mb-2 flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
              Important :
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Au minimum 2 contacts d'urgence sont requis</li>
              <li>• Ces informations seront accessibles même si votre téléphone est verrouillé</li>
              <li>• Vérifiez que les numéros de téléphone sont corrects</li>
              <li>• Informez vos contacts qu'ils sont enregistrés comme contacts d'urgence</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Page de contact
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-black mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600">Nous sommes là pour vous aider avec PASSCARD</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-black mb-6">Nos Bureaux</h2>
            
            {/* Burkina Faso */}
            <div className="mb-8 p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-bold text-black mb-4 text-lg">🇧🇫 Burkina Faso</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-black">AMETHYSTE GESTION ET TECHNOLOGIES (AMETHYSTE GT) SARL</h4>
                  <p className="text-gray-600 text-sm">4è ETAGE, IMMEUBLE BALAMA, RUE DU COMMERCE</p>
                  <p className="text-gray-600 text-sm">KOULOUBA, OUAGADOUGOU – 10 BP 13923 OUAGADOUGOU</p>
                  <p className="text-gray-600 text-sm">RCCM : BF-OUA-01-2025-M-04437</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-yellow-600" />
                  <span className="text-gray-700 text-sm">+226 25 43 91 10</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-yellow-600" />
                  <span className="text-gray-700 text-sm">+226 54 04 10 98</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700 text-sm">WhatsApp: +225 07 88 86 26 03</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-yellow-600" />
                  <span className="text-gray-700 text-sm">francois.kouassi@amethyste-gt.com</span>
                </div>
              </div>
            </div>

            {/* Côte d'Ivoire */}
            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-bold text-black mb-4 text-lg">🇨🇮 Côte d'Ivoire</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-orange-600" />
                  <span className="text-gray-700 text-sm">Cocody Angré, Abidjan</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <span className="text-gray-700 text-sm">+225 05 04 92 10 96</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <span className="text-gray-700 text-sm">+225 07 58 87 14 75</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-bold text-black mb-2">Heures d'ouverture</h3>
              <p className="text-gray-600">Lundi - Vendredi : 8h00 - 18h00</p>
              <p className="text-gray-600">Samedi : 9h00 - 15h00</p>
              <p className="text-gray-600">Dimanche : Fermé</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-black mb-6">Envoyez-nous un message</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-black mb-2">Nom complet</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Sujet</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option>Support technique</option>
                  <option>Question commerciale</option>
                  <option>Problème de carte</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500 transition-all duration-300"
              >
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <CreditCard className="h-8 w-8 text-yellow-400" />
              <span className="text-2xl font-bold">PASSCARD</span>
            </div>
            <p className="text-gray-400">
              Plus qu'une carte : une plateforme mobile compacte pour l'inclusion numérique en Afrique.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>QR Wallet Universel</li>
              <li>Recharge Télécom</li>
              <li>Urgence Sécurité</li>
              <li>Support 24/7</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Liens utiles</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Accueil</Link></li>
              <li><Link to="/linkage" className="hover:text-yellow-400 transition-colors">Linkage Wallet</Link></li>
              <li><Link to="/urgence" className="hover:text-yellow-400 transition-colors">Activation Urgence</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-yellow-400">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="font-semibold text-yellow-300">🇧🇫 Burkina Faso</p>
                <p className="text-sm">+226 25 43 91 10</p>
                <p className="text-sm">francois.kouassi@amethyste-gt.com</p>
              </div>
              <div>
                <p className="font-semibold text-orange-300">🇨🇮 Côte d'Ivoire</p>
                <p className="text-sm">+225 05 04 92 10 96</p>
                <p className="text-sm">Cocody Angré, Abidjan</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PASSCARD. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

// Composant principal App
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/linkage" element={<LinkagePage />} />
            <Route path="/urgence" element={<UrgencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

