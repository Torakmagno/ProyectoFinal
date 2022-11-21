-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-11-2022 a las 18:05:11
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
  `categoria` enum('Tabaquil','Frutal','Postre') NOT NULL,
  `Cantidad` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `liquidos`
--

INSERT INTO `liquidos` (`nombre`, `marca`, `precio`, `descripcion`, `id`, `imagenId`, `categoria`, `Cantidad`) VALUES
('Don Juan Reserva', 'King\'s Crest', 22, 'Postre de galleta con chocolate y vainilla.No podrás resistir!\r\nLíquido ganador por dos veces consecutivas del premio en USA al mejor líquido de King Crest.', 1, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1666704030/Productos/don_juan_pjtms8.jpg', 'Postre', '100 ML'),
('Baker\'s Daughter', 'Coil sill hand crafted', 18, 'Liquido a sabor Tarta de la abuela!!!', 2, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1647427266/Productos/bakersDaughter_tzalrr.png', 'Postre', '100 ML'),
('Kastard', 'Tonino Vaper', 17, 'Crema pastelera con caramelo, vainilla y canela.', 3, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1647427266/Productos/kastard_rbuabs.jpg', 'Postre', '100 ML'),
('Salted Caramel', 'Nitro\'s Col Brew', 19, 'Galletas cracker saladas con notas de helado de vainilla con una capa de caramelo fundido. Cremoso y dulce con un toque muy especial, descúbrelo.\r\n\r\n\r\n', 4, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1647427265/Productos/nitros_kzij3a.jpg', 'Postre', '100 ML'),
('Jungle Wave', 'Malasia vaps', 13, 'Frutos tropicales con hielo.Irresistible.', 8, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1647427266/Productos/jungle_q0hnjs.jpg', 'Frutal', '100 ML'),
('Cerise', 'Cold Shades', 15, 'Cereza de la mas madura con hielo.', 9, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1647427266/Productos/cerise_vpbsp8.png', 'Frutal', '100 ML'),
('Rasputin', 'Daruma E-liquid', 8, 'Fresa y frambuesa unidas al hielo artico!', 10, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1647427265/Productos/rasputin_ehzcgg.jpg', 'Frutal', '50 ML'),
('Vainara', 'Bombo', 17, 'Tiernos churros con azúcar de vainilla aderezados con un toque \r\nde canela. La devoción de los más golosos.', 221, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1668702587/Productos/vainara-50ml-bombo_zfs6bi.jpg', 'Postre', '50 ML'),
('Trubio', 'Bombo', 17, 'Líquido con sabor a tabaco rubio con toques de nuez y barrica de Jerez, donde se aprecian claramente las distintas especias y el sabor a trufa.', 222, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1668702587/Productos/trubio-50ml-bombo_letoo7.jpg', 'Tabaquil', '50 ML'),
('Purple on ice', 'Anarchist', 25, 'Anarchist Purple On Ice es un sabor verdaderamente jugoso y satisfactorio. Un equilibrio perfecto entre uvas maduras y chicle con un toque final helado..', 223, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1668702587/Productos/purple-on-ice-100ml-anarchist_aiyriz.jpg', 'Frutal', '100 ML'),
('Bebeca', 'Atmos lab', 23, 'Este E-Líquido es uno de los sabores más conocidos de Atmos Lab. Sabor a tabaco suave con matices dulces y frutos secos.', 224, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1668702586/Productos/bebeca-50ml-atmos-lab_zqigg0.jpg', 'Tabaquil', '50 ML'),
('Nutacco', 'Atmos lab', 23, 'Se trata de un sabor duradero, con deliciosas notas de frutos secos tostados. Es la combinación perfecta para cualquier bebida de alcohólica..', 225, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1668702587/Productos/nutacco-30ml-12mg-atmos-lab_hewtkg.png', 'Tabaquil', '50 ML'),
('Custard cookies', 'Sadboy', 25, 'Sadboy E-Liquid Custard Cookie. Inhale la delicada galleta recién horneada y exhale el relleno de cremosos natillas.\r\n', 226, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1668702586/Productos/custard-cookie-100ml-sadboy_dsc6xb.jpg', 'Postre', '100 ML'),
('Don cristo pistacho', 'Don cristo', 22, 'Un hermoso sabor clásico cubano que se ha beneficiado de 90 días de picado con una nota de pistacho que lo convierte en un líquido gourmet.\r\n', 227, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1668702586/Productos/don-cristo-pistachio-50ml-don-cristo_fpqoiz.jpg', 'Tabaquil', '50 ML'),
('Bloody lime frooize', 'E-liquid France', 24, 'El líquido Bloody Lime de la gama Fruizee de Eliquid France te sorprenderá por su delicioso sabor a frutos rojos con un toque de lima verde, sobre un fondo de frescor.\r\n', 228, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1668702586/Productos/bloody-lime-50ml-fruizee_s0yw9f.jpg', 'Frutal', '50 ML'),
('Blue vampire', 'Monster Club', 27, 'El líquido Blue Vampire de Monster Club te sorprenderá por su ireresistible fondo afrutado y fresco, ideal para vapear a diario.', 229, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1668702586/Productos/blue-vampire-450ml-monster-club_wtmqdb.jpg', 'Frutal', '450 ML'),
('Hazelnut cream', 'Pachamama', 21, 'Pachamama Desserts Hazelnut Creme: e-líquido de 100ml al sabor de avellanas tostadas mezcladas a la perfección con una rica y dulce crema.', 230, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1668702586/Productos/hazelnut-creme-100ml-pachamama-desserts_qwxsv7.jpg', 'Postre', '100 ML'),
('Subohm Apple Tobacco', 'Pachamama', 19, 'Todo el sabor de las manzanas variadas más dulces y tabaco. Perfecto para los que buscan un golpe de garganta suave ¡Un sabor increíble!', 231, 'https://res.cloudinary.com/dkfo76a1o/image/upload/v1668702587/Productos/apple-tobacoo-50ml-pachamama-subohm_pmpyud.jpg', 'Frutal', '50 ML');

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
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=232;

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
