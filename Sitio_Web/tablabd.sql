-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 31-08-2021 a las 12:40:21
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `tablabd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE IF NOT EXISTS `contacto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `tel` varchar(250) NOT NULL,
  `mensaje` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`id`, `nombre`, `email`, `tel`, `mensaje`) VALUES
(1, 'Adrian', 'rogg2002@hotmail.com', '5050505050', 'Prueba de mensaje'),
(9, 'Flavia', 'flavia@gmail.com', '233456789', 'Mensaje de prueba 2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, '¿QUÉ ES LA DEPILACIÓN ESPAÑOLA?', '¿Se puede utilizar en todas la partes del cuerpo?', 'La depilación española es uno de los métodos de depilación más efectivos que existen en la actualidad. En esta se utiliza una cera caliente hecha a base de resina de pino y miel, ingredientes que evitan que la piel se irrite y que se encargan de dejarla suave y brillante. No obstante, se recomienda aplicar alguna crema o emulsión sobre la zona depilada para obtener mejores resultados.'),
(2, 'LIFTING DE PESTAÑAS', '¿Qué es y para qué sirve un lifting de pestañas?', 'El lifting de pestañas es uno de los tratamientos estéticos más demandados en la actualidad. Con un efecto duradero, asegura resultados y permite olvidar las molestas pestañas postizas. Este tratamiento da expresión a la mirada, especialmente en aquellas personas que acuden a las clínicas estéticas con unas pestañas cortas y con poca densidad.\r\n\r\n');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'adrian', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
