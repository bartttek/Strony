-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 13 Cze 2023, 23:15
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `dane`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `komentarze`
--

CREATE TABLE `komentarze` (
  `id` int(11) NOT NULL,
  `autor` varchar(255) NOT NULL,
  `tresc` text NOT NULL,
  `data_komentarza` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pociagi`
--

CREATE TABLE `pociagi` (
  `dataWp` date NOT NULL,
  `numer` int(11) NOT NULL,
  `nazwisko` text NOT NULL,
  `dataOd` datetime NOT NULL,
  `czas` time NOT NULL,
  `opoznienie` int(11) NOT NULL,
  `nazwa` text NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `pociagi`
--

INSERT INTO `pociagi` (`dataWp`, `numer`, `nazwisko`, `dataOd`, `czas`, `opoznienie`, `nazwa`, `id`) VALUES
('2023-06-12', 5, 'ktos', '2023-06-09 22:53:00', '22:56:00', 5, 'adam', 9),
('2023-06-13', 4, 'ktos', '2023-06-07 17:32:00', '17:35:00', 31, 'adam', 10),
('2023-06-13', 21, 'ktos', '2023-06-09 17:36:00', '17:38:00', 31, 'michal', 11),
('2023-06-08', 56, 'ktos', '2023-06-10 22:08:00', '22:08:00', 31, 'adam', 12);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `site_name` varchar(255) NOT NULL,
  `logo_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `settings`
--

INSERT INTO `settings` (`id`, `site_name`, `logo_name`) VALUES
(1, 'pociagi', NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
(1, 'admin', '$2y$10$JXAw.rxFFXe3SYLyyP5iyuyHSJhwkAL5bVGVy5H2lpK62gfvbTtQq', 'admin'),
(7, 'siema', '$2y$10$d1tgDT7W6ozzAMZRyNBwLeo5vlTdRoswGNwOWoZjfJySRr59OxIQu', 'user'),
(8, '21', '$2y$10$hUQXKdOhOnPY0y4GiHCod.TRCsgkLLliglKmJqFL/yzn31U7t7P4y', 'user');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `komentarze`
--
ALTER TABLE `komentarze`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `pociagi`
--
ALTER TABLE `pociagi`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `komentarze`
--
ALTER TABLE `komentarze`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT dla tabeli `pociagi`
--
ALTER TABLE `pociagi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT dla tabeli `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
