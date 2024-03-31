-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 31, 2024 at 11:51 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `company`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `pro_manufacture` (IN `n` VARCHAR(100), IN `c` VARCHAR(100))   BEGIN
INSERT INTO manufacturer(name,contact_no) VALUES (n,c);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pro_product` (IN `nam` VARCHAR(20), IN `pri` INT(10), IN `mi` INT(10))   begin
insert into 
product(Name,Price,Manufacturer_id)
values(nam,pri,mi);
end$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `manufacturer`
--

CREATE TABLE `manufacturer` (
  `Id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `Contact_no` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `Id` int(11) NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Price` int(5) DEFAULT NULL,
  `Manufacturer_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`Id`, `Name`, `Price`, `Manufacturer_id`) VALUES
(4, 'a', 200021, 3);

-- --------------------------------------------------------

--
-- Stand-in structure for view `view_company`
-- (See below for the actual view)
--
CREATE TABLE `view_company` (
`id` int(11)
,`name` varchar(50)
,`Contact_no` varchar(50)
,`product_id` int(11)
,`product_name` varchar(50)
,`Price` int(5)
,`Manufacturer_id` int(10)
);

-- --------------------------------------------------------

--
-- Structure for view `view_company`
--
DROP TABLE IF EXISTS `view_company`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_company`  AS SELECT `manufacturer`.`Id` AS `id`, `manufacturer`.`Name` AS `name`, `manufacturer`.`Contact_no` AS `Contact_no`, `product`.`Id` AS `product_id`, `product`.`Name` AS `product_name`, `product`.`Price` AS `Price`, `product`.`Manufacturer_id` AS `Manufacturer_id` FROM (`manufacturer` join `product`) WHERE `manufacturer`.`Id` = `product`.`Id` ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `manufacturer`
--
ALTER TABLE `manufacturer`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `manufacturer`
--
ALTER TABLE `manufacturer`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
