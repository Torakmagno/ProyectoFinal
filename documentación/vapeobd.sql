-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-11-2022 a las 10:41:01
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vapeobd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `authorities`
--

CREATE TABLE `authorities` (
  `username` varchar(50) COLLATE utf16_latvian_ci NOT NULL,
  `authority` varchar(50) COLLATE utf16_latvian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_latvian_ci;

--
-- Volcado de datos para la tabla `authorities`
--

INSERT INTO `authorities` (`username`, `authority`) VALUES
('monica', 'ADMINISTRADOR'),
('rico', 'SUPERVISOR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(3) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `apellido`, `telefono`, `direccion`, `correo`) VALUES
(1, 'Valentino', 'Zampieri', '657676825', 'Rua de la marina 34', 'valentino.zampieri88@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `liquidos`
--

CREATE TABLE `liquidos` (
  `nombre` varchar(255) NOT NULL,
  `marca` varchar(255) NOT NULL,
  `precio` int(6) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `id` int(3) NOT NULL,
  `imagenId` varchar(255) DEFAULT NULL,
  `categoria` enum('Tabaquil','Frutal','Postre') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `liquidos`
--

INSERT INTO `liquidos` (`nombre`, `marca`, `precio`, `descripcion`, `id`, `imagenId`, `categoria`) VALUES
('Don Juan Reserva', 'King\'s Crest', 22, 'Postre de galleta con chocolate y vainilla.No podrás resistir!', 1, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1666704030/Productos/don_juan_pjtms8.jpg', 'Postre'),
('Baker\'s Daughter', 'Coil sill hand crafted', 18, 'Liquido a sabor Tarta de la abuela!!!', 2, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1647427266/Productos/bakersDaughter_tzalrr.png', 'Postre'),
('Kastard', 'Tonino Vaper', 17, 'Crema pastelera con caramelo, vainilla y canela.', 3, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1647427266/Productos/kastard_rbuabs.jpg', 'Postre'),
('Salted Caramel', 'Nitro\'s Col Brew', 19, 'Caramelo salado con un toque de frescor.', 4, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1647427265/Productos/nitros_kzij3a.jpg', 'Postre'),
('Strawberry Dreams', 'Best Vape', 21, 'Nata fresca casera con fresas de temporada.', 5, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1647427265/Productos/strawberry_yzciwp.jpg', 'Postre'),
('Raspberry and Strawberry Cake', 'Queen of the Drips', 16, 'Tarta de galleta con mermelada de fresa y frambuesa', 6, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1666704031/Productos/raspberry_ti7ykj.jpg', 'Postre'),
('Tormento', 'Alquimia', 15, 'Tabaco rubio de la mejor calidad con matices de coco y frutos secos.', 7, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1666704031/Productos/tormento_s4w16a.jpg', 'Tabaquil'),
('Jungle Wave', 'Malasia vaps', 13, 'Frutos tropicales con hielo.Irresistible.', 8, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1647427266/Productos/jungle_q0hnjs.jpg', 'Frutal'),
('Cerise', 'Cold Shades', 15, 'Cereza de la mas madura con hielo.', 9, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1647427266/Productos/cerise_vpbsp8.png', 'Frutal'),
('Rasputin', 'Daruma E-liquid', 8, 'Fresa y frambuesa unidas al hielo artico!', 10, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1647427265/Productos/rasputin_ehzcgg.jpg', 'Frutal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidoproducto`
--

CREATE TABLE `pedidoproducto` (
  `idPedido` int(3) NOT NULL,
  `idProducto` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pedidoproducto`
--

INSERT INTO `pedidoproducto` (`idPedido`, `idProducto`) VALUES
(1, 1),
(1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(3) NOT NULL,
  `idCliente` int(3) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `idCliente`, `fecha`) VALUES
(1, 1, '2022-03-07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `username` varchar(50) COLLATE utf16_latvian_ci NOT NULL,
  `password` varchar(50) COLLATE utf16_latvian_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_latvian_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`username`, `password`, `enabled`) VALUES
('monica', '{noop}monica123', 2),
('rico', '{noop}rico123', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `authorities`
--
ALTER TABLE `authorities`
  ADD PRIMARY KEY (`username`,`authority`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `liquidos`
--
ALTER TABLE `liquidos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidoproducto`
--
ALTER TABLE `pedidoproducto`
  ADD PRIMARY KEY (`idPedido`,`idProducto`),
  ADD KEY `idPedido` (`idPedido`,`idProducto`),
  ADD KEY `idProducto` (`idProducto`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCliente` (`idCliente`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `liquidos`
--
ALTER TABLE `liquidos`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=221;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `authorities`
--
ALTER TABLE `authorities`
  ADD CONSTRAINT `authorities_ibfk_1` FOREIGN KEY (`username`) REFERENCES `users` (`username`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pedidoproducto`
--
ALTER TABLE `pedidoproducto`
  ADD CONSTRAINT `pedidoproducto_ibfk_1` FOREIGN KEY (`idPedido`) REFERENCES `pedidos` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `pedidoproducto_ibfk_2` FOREIGN KEY (`idProducto`) REFERENCES `liquidos` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`idCliente`) REFERENCES `clientes` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
