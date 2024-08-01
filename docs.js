/**
 * @swagger
 *  Tags: [Coches]
 */

/**
 * @swagger
 * /coches:
 *   post:
 *     summary: Crear o actualizar un coche
 *     tags: [Coches]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               matricula:
 *                 type: string
 *               marca:
 *                 type: string
 *               modelo:
 *                 type: string
 *               color:
 *                 type: string
 *               precio_venta:
 *                 type: number
 *             required:
 *               - matricula
 *               - marca
 *               - modelo
 *               - color
 *               - precio_venta
 *     responses:
 *       200:
 *         description: Coche actualizado correctamente.
 *       201:
 *         description: Coche creado correctamente.
 *       400:
 *         description: Todos los campos son obligatorios o el precio no puede ser negativo.
 *       500:
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /coches:
 *   get:
 *     summary: Obtener la lista de coches disponibles
 *     tags: [Coches]
 *     responses:
 *       200:
 *         description: Lista de coches disponibles.
 *       500:
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /cochescomprados/{numero_cedula}:
 *   get:
 *     summary: Obtener la lista de coches comprados por un cliente
 *     tags: [Coches]
 *     parameters:
 *       - in: path
 *         name: numero_cedula
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de coches comprados por el cliente.
 *       404:
 *         description: El cliente no tiene vehículos.
 *       500:
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 *  Tags: [Clientes]
 */

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Crear un cliente y registrar una compra
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numero_cedula:
 *                 type: string
 *               nombres:
 *                 type: string
 *               apellidos:
 *                 type: string
 *               direccion:
 *                 type: string
 *               ciudad:
 *                 type: string
 *               numero_telefono:
 *                 type: string
 *               matricula:
 *                 type: string
 *               fecha_compra:
 *                 type: string
 *             required:
 *               - numero_cedula
 *               - nombres
 *               - apellidos
 *               - direccion
 *               - ciudad
 *               - numero_telefono
 *               - matricula
 *               - fecha_compra
 *     responses:
 *       201:
 *         description: Cliente y compra creados correctamente.
 *       400:
 *         description: Ya existe una compra de este vehículo.
 *       500:
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Obtener la lista de clientes y sus vehículos
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes y sus vehículos.
 *       500:
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 *  Tags: [Revisiones]
 */

/**
 * @swagger
 * /revisiones:
 *   post:
 *     summary: Crear una revisión para un coche
 *     tags: [Revisiones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               matricula:
 *                 type: string
 *               cambio_filtro:
 *                 type: boolean
 *               cambio_aceite:
 *                 type: boolean
 *               cambio_frenos:
 *                 type: boolean
 *               costo_revision:
 *                 type: number
 *               fecha_hora_recepcion:
 *                 type: string
 *               fecha_hora_entrega:
 *                 type: string
 *             required:
 *               - matricula
 *               - cambio_filtro
 *               - cambio_aceite
 *               - cambio_frenos
 *               - costo_revision
 *               - fecha_hora_recepcion
 *               - fecha_hora_entrega
 *     responses:
 *       201:
 *         description: Revisión creada correctamente.
 *       500:
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /mantenimientos/{matricula}:
 *   get:
 *     summary: Obtener la lista de mantenimientos para un coche
 *     tags: [Revisiones]
 *     parameters:
 *       - in: path
 *         name: matricula
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de mantenimientos para el coche.
 *       500:
 *         description: Error interno del servidor.
 */

/**
 * @swagger
 * /revision/baja/{matricula}:
 *   put:
 *     summary: Dar de baja una revisión activa de un coche
 *     tags: [Revisiones]
 *     parameters:
 *       - in: path
 *         name: matricula
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               explicacion:
 *                 type: string
 *             required:
 *               - explicacion
 *     responses:
 *       200:
 *         description: Revisión dada de baja exitosamente.
 *       404:
 *         description: No se encontró ninguna revisión activa para la matrícula proporcionada.
 *       500:
 *         description: Error en el servidor.
 */
