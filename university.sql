-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2021 at 04:43 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `university`
--

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `Id_Faculty` bigint(20) UNSIGNED NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Id_Rector` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`Id_Faculty`, `Name`, `Address`, `Id_Rector`) VALUES
(2, 'Information Tehnologie', 'Liepaja street 2', 1),
(5, 'Social Science', 'Riga 2', 2);

-- --------------------------------------------------------

--
-- Table structure for table `lectors`
--

CREATE TABLE `lectors` (
  `Id_Lectors` bigint(20) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Surname` varchar(50) NOT NULL,
  `Telephone` varchar(10) NOT NULL,
  `Mail` varchar(70) NOT NULL,
  `Gender` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lectors`
--

INSERT INTO `lectors` (`Id_Lectors`, `Name`, `Surname`, `Telephone`, `Mail`, `Gender`) VALUES
(1, 'Ivan', 'Petrov', '23456789', 'ivan@petrov.com', 'Male'),
(3, 'Dima', 'Ivanov', '23456787', 'dima@ivanov.com', 'Male');

-- --------------------------------------------------------

--
-- Table structure for table `map_student_subject`
--

CREATE TABLE `map_student_subject` (
  `Id_stud_sub` bigint(20) NOT NULL,
  `Id_Subject` bigint(20) NOT NULL,
  `Id_Student` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `map_student_subject`
--

INSERT INTO `map_student_subject` (`Id_stud_sub`, `Id_Subject`, `Id_Student`) VALUES
(3, 1, 3),
(1, 1, 40),
(4, 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `map_subject_lector`
--

CREATE TABLE `map_subject_lector` (
  `Id_map_sub_lec` bigint(20) NOT NULL,
  `Id_Lector` bigint(20) NOT NULL,
  `Id_Subject` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `map_subject_lector`
--

INSERT INTO `map_subject_lector` (`Id_map_sub_lec`, `Id_Lector`, `Id_Subject`) VALUES
(1, 1, 3),
(2, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `rector`
--

CREATE TABLE `rector` (
  `Id_Rector` bigint(20) NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Surname` varchar(50) DEFAULT NULL,
  `Age` int(100) DEFAULT NULL,
  `Gender` varchar(10) DEFAULT NULL,
  `Telephone` varchar(15) DEFAULT NULL,
  `Mail` varchar(70) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `Id_Student` bigint(20) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Surname` varchar(50) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Age` int(100) NOT NULL,
  `Id_Faculty` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`Id_Student`, `Name`, `Surname`, `Gender`, `Age`, `Id_Faculty`) VALUES
(2, 'Karlis', 'Smits', 'Male', 20, 2),
(3, 'Sintia', 'Smits', 'Female', 18, 2),
(5, 'Elin', 'Smite', 'Female', 21, 5),
(7, 'Olga', 'Ose', 'Female', 25, 0),
(19, 'Anna', 'Shkajeva', 'Female', 19, 2),
(20, 'Jelena', 'Petrova', 'Female', 65, 2),
(24, 'Anna', 'Kjjjffjfk', 'Female', 12, 2),
(25, 'Anna', 'Hjfdb', 'Female', 63, 2),
(31, 'Anna', 'Ghmggukg', 'Female', 23, 2),
(36, 'Anna', 'Dfghh', 'Female', 78, 2),
(38, 'Jelena', 'Gbbdf', 'Female', 13, 2),
(39, 'Ann', 'Fnfhch', 'Female', 90, 2),
(40, 'Anna', 'Шкаева', 'Female', 55, 2),
(41, 'Slava', 'Velikij', 'Male', 78, 2),
(42, 'Anna', 'Shkajeva', 'Female', 33, 2),
(43, 'Anna', 'Shkajeva', 'Female', 23, 2),
(44, 'Anna', 'Ерьрпьрп', 'Female', 88, 2),
(45, 'Anna', 'Hhhh', 'Female', 22, 2),
(49, '', '', '', 0, 2),
(50, '', '', '', 0, 2),
(51, 'new', 'new', 'new', 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `Id_Subject` bigint(20) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Hours` int(120) NOT NULL,
  `CreditPoints` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`Id_Subject`, `Name`, `Hours`, `CreditPoints`) VALUES
(1, 'Javascript', 100, 8),
(2, 'Git', 4, 1),
(3, 'Database', 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` bigint(20) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Surname` varchar(50) NOT NULL,
  `Grade` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`Id_Faculty`),
  ADD KEY `Id_Rector` (`Id_Rector`);

--
-- Indexes for table `lectors`
--
ALTER TABLE `lectors`
  ADD PRIMARY KEY (`Id_Lectors`);

--
-- Indexes for table `map_student_subject`
--
ALTER TABLE `map_student_subject`
  ADD PRIMARY KEY (`Id_stud_sub`),
  ADD KEY `id_Subject` (`Id_Subject`,`Id_Student`),
  ADD KEY `map_student_subject_ibfk_2` (`Id_Student`);

--
-- Indexes for table `map_subject_lector`
--
ALTER TABLE `map_subject_lector`
  ADD PRIMARY KEY (`Id_map_sub_lec`),
  ADD KEY `id_Lector` (`Id_Lector`,`Id_Subject`),
  ADD KEY `map_subject_lector_ibfk_2` (`Id_Subject`);

--
-- Indexes for table `rector`
--
ALTER TABLE `rector`
  ADD PRIMARY KEY (`Id_Rector`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`Id_Student`),
  ADD KEY `id_Faculty` (`Id_Faculty`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`Id_Subject`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `faculty`
--
ALTER TABLE `faculty`
  MODIFY `Id_Faculty` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `lectors`
--
ALTER TABLE `lectors`
  MODIFY `Id_Lectors` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `map_student_subject`
--
ALTER TABLE `map_student_subject`
  MODIFY `Id_stud_sub` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `map_subject_lector`
--
ALTER TABLE `map_subject_lector`
  MODIFY `Id_map_sub_lec` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rector`
--
ALTER TABLE `rector`
  MODIFY `Id_Rector` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `Id_Student` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `Id_Subject` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `map_student_subject`
--
ALTER TABLE `map_student_subject`
  ADD CONSTRAINT `map_student_subject_ibfk_1` FOREIGN KEY (`Id_Subject`) REFERENCES `subjects` (`Id_Subject`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `map_student_subject_ibfk_2` FOREIGN KEY (`Id_Student`) REFERENCES `student` (`Id_Student`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `map_subject_lector`
--
ALTER TABLE `map_subject_lector`
  ADD CONSTRAINT `map_subject_lector_ibfk_1` FOREIGN KEY (`Id_Lector`) REFERENCES `lectors` (`Id_Lectors`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `map_subject_lector_ibfk_2` FOREIGN KEY (`Id_Subject`) REFERENCES `subjects` (`Id_Subject`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
