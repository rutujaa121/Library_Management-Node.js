// models/book.js
const db = require('../config/db');

class Book {
  static async create(data) {
    const { title, author, publisher, isbn, category, total_copies, cover_image } = data;
    const [result] = await db.execute(
      `INSERT INTO books (title, author, publisher, isbn, category, total_copies, available_copies, cover_image)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [ title, author, publisher, isbn, category, total_copies, total_copies, cover_image || null ]
    );
    return result.insertId;
  }

  static async findById(id) {
    const [rows] = await db.execute('SELECT * FROM books WHERE id = ?', [id]);
    return rows[0];
  }

  static async findAll() {
    const [rows] = await db.execute('SELECT * FROM books');
    return rows;
  }

  static async update(id, data) {
    const { title, author, publisher, category, total_copies, cover_image } = data;
    // Could adjust available_copies here if total_copies changed, but keep it simple
    const [result] = await db.execute(
      `UPDATE books 
         SET title = ?, author = ?, publisher = ?, category = ?, total_copies = ?, cover_image = ?
       WHERE id = ?`,
      [ title, author, publisher, category, total_copies, cover_image, id ]
    );
    return result;
  }

  static async delete(id) {
    const [result] = await db.execute('DELETE FROM books WHERE id = ?', [id]);
    return result;
  }
}

module.exports = Book;
