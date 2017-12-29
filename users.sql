-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2017 at 01:34 AM
-- Server version: 10.1.22-MariaDB
-- PHP Version: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `FirstName` varchar(30) NOT NULL,
  `LastName` varchar(30) NOT NULL,
  `studentid` int(10) NOT NULL,
  `password` varchar(20) NOT NULL,
  `scre` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`FirstName`, `LastName`, `studentid`, `password`, `scre`) VALUES
('avinash', 'rvn', 0, '', 0),
('teja', 'murupudi', 0, '', 0),
('curtis', 'hartley', 0, '', 0),
('melissa', 'plummer', 0, '', 0),
('chung', 'chang', 0, '', 0),
('Sridevi', 'Jampani', 0, '', 0),
('praneetha', 'murupudi', 0, '', 0),
('akhil', 'rvn', 0, '', 0),
('teja', 'pathuri', 0, '', 0),
('teja', 'raavi', 0, '', 0),
('shelie', 'hewitt', 0, '', 0),
('Deepa', '', 700659556, 'deepa', 0),
('Deepa', '', 700659556, 'deepa', 0),
('Deepa', '', 700659556, 'deepa', 0),
('Deepa', '', 700659556, 'deepa', 0),
('Deepa', 'Rayapati', 700659556, 'deepa', 0),
('Deepa', 'Rayapati', 700659556, 'deepa', 0),
('Deepa', 'Rayapati', 700659556, 'deepa', 0),
('divya', 'rayapati', 700659557, 'divya', 0),
('pooja', 'kumawat', 700659558, 'pooja', 0),
('roja', 'rayapati', 700659559, 'roja', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
