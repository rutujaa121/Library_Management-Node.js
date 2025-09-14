const express = require("express");
const router = express.Router();
const multer = require("multer");

// Import controller
const bookController = require("../controllers/bookController");

// Set up multer for file uploads (if you need it)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // folder to save uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage: storage });

// Routes
router.get("/", bookController.getAllBooks);                 // Get all books
router.get("/:id", bookController.getBookById);             // Get a single book
router.post("/", upload.single("cover"), bookController.addBook); // Add book with optional file upload
router.put("/:id", upload.single("cover"), bookController.updateBook); // Update book
router.delete("/:id", bookController.deleteBook);           // Delete book

module.exports = router;
