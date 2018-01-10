-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Mer 10 Janvier 2018 à 05:55
-- Version du serveur: 5.5.54-0ubuntu0.14.04.1
-- Version de PHP: 5.5.9-1ubuntu4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `microproject`
--

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE IF NOT EXISTS `produits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `produit_name` varchar(50) NOT NULL,
  `produit_qte` int(10) NOT NULL DEFAULT '0',
  `produit_seuil` int(10) NOT NULL DEFAULT '10',
  `produit_designation` varchar(120) NOT NULL,
  `stock_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `produits_fk0` (`stock_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `produits`
--

INSERT INTO `produits` (`id`, `produit_name`, `produit_qte`, `produit_seuil`, `produit_designation`, `stock_id`) VALUES
(1, 'Huile de Palme', 70, 10, '', 1),
(2, 'Huile  Rafine', 90, 10, '', 1);

-- --------------------------------------------------------

--
-- Structure de la table `retirer`
--

CREATE TABLE IF NOT EXISTS `retirer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_utilisateur` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `date_retrai` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `retirer_fk0` (`id_utilisateur`),
  KEY `retirer_fk1` (`id_produit`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `retirer`
--

INSERT INTO `retirer` (`id`, `id_utilisateur`, `id_produit`, `date_retrai`) VALUES
(1, 1, 1, '2018-01-05'),
(2, 1, 1, '2018-01-05'),
(3, 1, 1, '2018-01-05');

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE IF NOT EXISTS `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(30) NOT NULL,
  `role_description` varchar(120) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `role`
--

INSERT INTO `role` (`id`, `role_name`, `role_description`) VALUES
(1, 'Admin', 'Admin');

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

CREATE TABLE IF NOT EXISTS `stock` (
  `stock_id` int(11) NOT NULL AUTO_INCREMENT,
  `date_creation` date NOT NULL,
  `id_utilisateur` int(10) NOT NULL,
  PRIMARY KEY (`stock_id`),
  KEY `stock_fk0` (`id_utilisateur`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `stock`
--

INSERT INTO `stock` (`stock_id`, `date_creation`, `id_utilisateur`) VALUES
(1, '2018-01-06', 1),
(2, '2018-01-05', 1);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(120) NOT NULL,
  `telephone` varchar(120) NOT NULL,
  `address` varchar(120) NOT NULL,
  `login` varchar(120) NOT NULL,
  `password` varchar(120) NOT NULL,
  `email` varchar(120) NOT NULL,
  `role_id` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `utilisateurs_fk0` (`role_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `nom`, `telephone`, `address`, `login`, `password`, `email`, `role_id`) VALUES
(1, 'Blaise1', '99393939', 'Yaounde', 'bsiani', 'bsiani', 'bsiani@gmail. om', 1);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `produits`
--
ALTER TABLE `produits`
  ADD CONSTRAINT `produits_fk0` FOREIGN KEY (`stock_id`) REFERENCES `stock` (`stock_id`);

--
-- Contraintes pour la table `retirer`
--
ALTER TABLE `retirer`
  ADD CONSTRAINT `retirer_fk0` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id`),
  ADD CONSTRAINT `retirer_fk1` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id`);

--
-- Contraintes pour la table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `stock_fk0` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD CONSTRAINT `utilisateurs_fk0` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
