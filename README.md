# FISIBIENESTAR BACKEND

This is the API Rest of FISIBienestar project.

## Running the Server

Use the terminal:

```bash
nodemon start
```
This code was written in TypeScript, to follow all the changes and convert the TS code to JS code type this in a new terminal:
```bash
tsc --watch
```

## Grupo 5

Escalante Flores, Eduardo  
Matos Ramos, W. Raphael  
Patri Carbajal, Carlo Fabrizio


## .env file
Create a fille with this name ".env" an insert the credentials

PORT = '3000'
DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASSWORD = ''

## Database
This API connects to a MySQL database, this is the script:
```sql
--
-- Table structure for table `alumno`
--
CREATE TABLE `alumno` (
  `alumno_id` int(11) NOT NULL,
  `alumno_primerApellido` varchar(255) DEFAULT NULL,
  `alumno_segundoApellido` varchar(255) DEFAULT NULL,
  `alumno_nombres` varchar(255) DEFAULT NULL,
  `alumno_dni` varchar(255) DEFAULT NULL,
  `alumno_codigo` varchar(255) DEFAULT NULL,
  `alumno_telefono` varchar(255) DEFAULT NULL,
  `alumno_correoElectronico` varchar(255) DEFAULT NULL,
  `estado_id` int(11) DEFAULT NULL,
  `alumno_fechaNacimiento` date DEFAULT NULL,
  `eap_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
--
-- Table structure for table `cita`
--
CREATE TABLE `cita` (
  `cita_id` int(11) NOT NULL,
  `alumno_id` int(11) DEFAULT NULL,
  `cita_fecha` date DEFAULT NULL,
  `cita_hora` time DEFAULT NULL,
  `cita_descripcion` varchar(255) DEFAULT NULL,
  `citaModalidad_id` int(11) DEFAULT NULL,
  `citaTipo_id` int(11) DEFAULT NULL,
  `citaConfirmacion_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- --------------------------------------------------------
--
-- Table structure for table `citaconfirmacion`
--

CREATE TABLE `citaconfirmacion` (
  `citaConfirmacion_id` int(11) NOT NULL,
  `citaConfirmacion_nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
-- --------------------------------------------------------
--
-- Table structure for table `citamodalidad`
--
CREATE TABLE `citamodalidad` (
  `citaModalidad_id` int(11) NOT NULL,
  `citaModalidad_nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------
--
-- Table structure for table `citatipo`
--
CREATE TABLE `citatipo` (
  `citaTipo_id` int(11) NOT NULL,
  `CitaTipo_nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------
--
-- Table structure for table `eap`
--
CREATE TABLE `eap` (
  `eap_id` int(11) NOT NULL,
  `eap_nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
--
-- Dumping data for table `eap`
--
INSERT INTO `eap` (`eap_id`, `eap_nombre`) VALUES
(0, 'INGENIERIA DE SISTEMAS'),
(1, 'INGENIERIA DE SOFTWARE');

-- --------------------------------------------------------
--
-- Table structure for table `estado`
--
CREATE TABLE `estado` (
  `estado_id` int(11) NOT NULL,
  `estado_nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
--
-- Dumping data for table `estado`
--
INSERT INTO `estado` (`estado_id`, `estado_nombre`) VALUES
(0, 'REGULAR'),
(1, 'OBSERVADO');
--
-- Indexes for dumped tables
--
--
-- Indexes for table `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`alumno_id`),
  ADD KEY `eap_id` (`eap_id`),
  ADD KEY `estado_id` (`estado_id`);
--
-- Indexes for table `cita`
--
ALTER TABLE `cita`
  ADD PRIMARY KEY (`cita_id`),
  ADD KEY `citaModalidad_id` (`citaModalidad_id`),
  ADD KEY `citaTipo_id` (`citaTipo_id`),
  ADD KEY `citaConfirmacion_id` (`citaConfirmacion_id`),
  ADD KEY `alumno_id` (`alumno_id`);
--
-- Indexes for table `citaconfirmacion`
--
ALTER TABLE `citaconfirmacion`
  ADD PRIMARY KEY (`citaConfirmacion_id`);
--
-- Indexes for table `citamodalidad`
--
ALTER TABLE `citamodalidad`
  ADD PRIMARY KEY (`citaModalidad_id`);
--
-- Indexes for table `citatipo`
--
ALTER TABLE `citatipo`
  ADD PRIMARY KEY (`citaTipo_id`);
--
-- Indexes for table `eap`
--
ALTER TABLE `eap`
  ADD PRIMARY KEY (`eap_id`);
--
-- Indexes for table `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`estado_id`);
--
-- AUTO_INCREMENT for dumped tables
--
--
-- AUTO_INCREMENT for table `alumno`
--
ALTER TABLE `alumno`
  MODIFY `alumno_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cita`
--
ALTER TABLE `cita`
  MODIFY `cita_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alumno`
--
ALTER TABLE `alumno`
  ADD CONSTRAINT `alumno_ibfk_1` FOREIGN KEY (`eap_id`) REFERENCES `eap` (`eap_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `alumno_ibfk_2` FOREIGN KEY (`estado_id`) REFERENCES `estado` (`estado_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
--
-- Constraints for table `cita`
--
ALTER TABLE `cita`
  ADD CONSTRAINT `cita_ibfk_2` FOREIGN KEY (`citaModalidad_id`) REFERENCES `citamodalidad` (`citaModalidad_id`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `cita_ibfk_3` FOREIGN KEY (`citaTipo_id`) REFERENCES `citatipo` (`citaTipo_id`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `cita_ibfk_4` FOREIGN KEY (`citaConfirmacion_id`) REFERENCES `citaconfirmacion` (`citaConfirmacion_id`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `cita_ibfk_5` FOREIGN KEY (`alumno_id`) REFERENCES `alumno` (`alumno_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;
```