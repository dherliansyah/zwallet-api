-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Waktu pembuatan: 07 Okt 2020 pada 11.54
-- Versi server: 8.0.21
-- Versi PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zwalletdb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `topup`
--

CREATE TABLE `topup` (
  `idTopup` int NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `topup`
--

INSERT INTO `topup` (`idTopup`, `description`) VALUES
(1, 'Go to the nearest ATM or you can use E-Banking.'),
(2, 'Type your security number on the ATM or E-Banking.'),
(8, 'Select “Transfer” in the menu'),
(9, 'Type the virtual account number that we provide you at the top.'),
(10, 'Type the amount of the money you want to top up.'),
(11, 'Read the summary details'),
(12, 'Press transfer / top up'),
(13, 'You can see money in Zwallet within 3 hours.');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transfer`
--

CREATE TABLE `transfer` (
  `idTransfer` int NOT NULL,
  `idUser` varchar(100) NOT NULL,
  `amount` varchar(100) NOT NULL,
  `notes` varchar(255) NOT NULL,
  `pin` varchar(10) NOT NULL,
  `balanceLeft` varchar(100) NOT NULL,
  `dateTransaction` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `transfer`
--

INSERT INTO `transfer` (`idTransfer`, `idUser`, `amount`, `notes`, `pin`, `balanceLeft`) VALUES
(4, '1', '50000', 'Beli sepeda', '112233', '450000');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `idUser` int NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `balance` varchar(100) NOT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `photo` varchar(255) NOT NULL,
  `pin` varchar(10) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`idUser`, `firstName`, `lastName`, `username`, `email`, `password`, `phone`, `balance`, `verified`, `photo`, `pin`, `updateAt`) VALUES
(1, 'Parno', 'baja', 'parnobaja', 'parno@gmail.com', 'parnocihuy', '082112112321', '500000', 0, '-', '456743', '0000-00-00 00:00:00'),
(2, 'Diki', 'Herliansyah', 'dherliansyah', 'dikiherliansyahh@gmail.com', 'dikiher', '082114314831', '1000000', 0, '-', '112233', '2020-09-26 18:38:17'),
(3, 'John', 'David', 'jdavid', 'johndavid@gmail.com', 'davidjohn', '0812232312123', '500000', 0, '-', '332211', '2020-09-26 19:04:38'),
(4, 'Lina', 'Sita', 'lsita', 'lsita@gmail.com', 'sital', '087812463728', '500000', 0, '-', '123123', '2020-09-26 19:08:23'),
(5, 'joko', 'santo', 'rwana', 'rwana@gmail.com', 'wanar', '0139876537', '500000', 0, '-', '998877', '2020-09-26 19:17:22'),
(6, 'Mang', 'Oleh', 'mangolej', 'mangoleh@gmail.com', 'mangoleh', '08121212112121', '200000', 0, '-', '123321', '2020-09-29 11:55:57'),
(8, 'Mang', 'Oleh', 'mangolej', 'mangoleh@gmail.com', 'mangoleh', '08121212112121', '200000', 0, '-', '123321', '2020-09-29 13:45:26'),
(9, 'mamang', 'mumung', 'manghandal', 'mamang@gmail.com', 'mamang', '08121212112121', '200000', 0, '-', '123321', '2020-10-03 14:46:39');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `topup`
--
ALTER TABLE `topup`
  ADD PRIMARY KEY (`idTopup`);

--
-- Indeks untuk tabel `transfer`
--
ALTER TABLE `transfer`
  ADD PRIMARY KEY (`idTransfer`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `topup`
--
ALTER TABLE `topup`
  MODIFY `idTopup` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `transfer`
--
ALTER TABLE `transfer`
  MODIFY `idTransfer` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
