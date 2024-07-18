/**
 * @swagger
 * tags:
 *   name: Coches
 *   description: Operaciones sobre coches
 */

/**
 * @swagger
 * /coches:
 *   post:
 *     summary: Añadir un nuevo coche
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
 *     responses:
 *       201:
 *         description: Coche creado exitosamente
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /coches:
 *   get:
 *     summary: Obtener todos los coches
 *     tags: [Coches]
 *     responses:
 *       200:
 *         description: Lista de coches
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /coches/{matricula}:
 *   get:
 *     summary: Obtener un coche por matrícula
 *     tags: [Coches]
 *     parameters:
 *       - name: matricula
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalles del coche
 *       404:
 *         description: Coche no encontrado
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /coches/{matricula}:
 *   put:
 *     summary: Actualizar un coche por matrícula
 *     tags: [Coches]
 *     parameters:
 *       - name: matricula
 *         in: path
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
 *               marca:
 *                 type: string
 *               modelo:
 *                 type: string
 *               color:
 *                 type: string
 *               precio_venta:
 *                 type: number
 *     responses:
 *       200:
 *         description: Coche actualizado
 *       404:
 *         description: Coche no encontrado
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /coches/{matricula}:
 *   delete:
 *     summary: Eliminar un coche por matrícula
 *     tags: [Coches]
 *     parameters:
 *       - name: matricula
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Coche eliminado
 *       404:
 *         description: Coche no encontrado
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Operaciones sobre clientes
 */

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Añadir un nuevo cliente
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
 *     responses:
 *       201:
 *         description: Cliente creado exitosamente
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Obtener todos los clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /clientes/{cedula}:
 *   get:
 *     summary: Obtener un cliente por cédula
 *     tags: [Clientes]
 *     parameters:
 *       - name: cedula
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalles del cliente
 *       404:
 *         description: Cliente no encontrado
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /clientes/{codigo_cliente}:
 *   put:
 *     summary: Actualizar un cliente por código
 *     tags: [Clientes]
 *     parameters:
 *       - name: codigo_cliente
 *         in: path
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
 *     responses:
 *       200:
 *         description: Cliente actualizado
 *       404:
 *         description: Cliente no encontrado
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /clientes/{codigo_cliente}:
 *   delete:
 *     summary: Eliminar un cliente por código
 *     tags: [Clientes]
 *     parameters:
 *       - name: codigo_cliente
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente eliminado
 *       404:
 *         description: Cliente no encontrado
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * tags:
 *   name: Compras
 *   description: Operaciones sobre compras
 */

/**
 * @swagger
 * /compras:
 *   post:
 *     summary: Añadir una nueva compra
 *     tags: [Compras]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               matricula:
 *                 type: string
 *               codigo_cliente:
 *                 type: string
 *               fecha_compra:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Compra creada exitosamente
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /compras:
 *   get:
 *     summary: Obtener todas las compras
 *     tags: [Compras]
 *     responses:
 *       200:
 *         description: Lista de compras
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /compras/{codigo_compra}:
 *   get:
 *     summary: Obtener una compra por código
 *     tags: [Compras]
 *     parameters:
 *       - name: codigo_compra
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalles de la compra
 *       404:
 *         description: Compra no encontrada
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /compras/{codigo_compra}:
 *   put:
 *     summary: Actualizar una compra por código
 *     tags: [Compras]
 *     parameters:
 *       - name: codigo_compra
 *         in: path
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
 *               matricula:
 *                 type: string
 *               codigo_cliente:
 *                 type: string
 *               fecha_compra:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Compra actualizada
 *       404:
 *         description: Compra no encontrada
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /compras/{codigo_compra}:
 *   delete:
 *     summary: Eliminar una compra por código
 *     tags: [Compras]
 *     parameters:
 *       - name: codigo_compra
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Compra eliminada
 *       404:
 *         description: Compra no encontrada
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * tags:
 *   name: Revisiones
 *   description: Operaciones sobre revisiones
 */

/**
 * @swagger
 * /revisiones:
 *   post:
 *     summary: Añadir una nueva revisión
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
 *               revision_frenos:
 *                 type: boolean
 *               revision_suspension:
 *                 type: boolean
 *               revision_general:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Revisión creada exitosamente
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /revisiones:
 *   get:
 *     summary: Obtener todas las revisiones
 *     tags: [Revisiones]
 *     responses:
 *       200:
 *         description: Lista de revisiones
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /revisiones/{codigo_revision}:
 *   get:
 *     summary: Obtener una revisión por código
 *     tags: [Revisiones]
 *     parameters:
 *       - name: codigo_revision
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalles de la revisión
 *       404:
 *         description: Revisión no encontrada
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /revisiones/{codigo_revision}:
 *   put:
 *     summary: Actualizar una revisión por código
 *     tags: [Revisiones]
 *     parameters:
 *       - name: codigo_revision
 *         in: path
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
 *               matricula:
 *                 type: string
 *               cambio_filtro:
 *                 type: boolean
 *               cambio_aceite:
 *                 type: boolean
 *               revision_frenos:
 *                 type: boolean
 *               revision_suspension:
 *                 type: boolean
 *               revision_general:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Revisión actualizada
 *       404:
 *         description: Revisión no encontrada
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /revisiones/{codigo_revision}:
 *   delete:
 *     summary: Eliminar una revisión por código
 *     tags: [Revisiones]
 *     parameters:
 *       - name: codigo_revision
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Revisión eliminada
 *       404:
 *         description: Revisión no encontrada
 *       500:
 *         description: Error en el servidor
 */
