import pool from './connection.js'; // Ajusta la ruta de importación

class MySQLMenuRepository {
  async getAll() {
    try {
      const [rows] = await pool.query('SELECT plato_id, titulo, descripcion, precio FROM menu;');
      return rows;
    } catch (error) {
      console.error('Error al obtener el menú:', error);
      throw error; // Re-lanza el error para que se maneje en la capa superior
    }
  }
}

export default MySQLMenuRepository;


