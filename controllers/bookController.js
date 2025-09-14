// Example controller functions
exports.getAllBooks = (req, res) => {
    res.send("All books");
};

exports.getBookById = (req, res) => {
    const id = req.params.id;
    res.send(`Book details for ID: ${id}`);
};

exports.addBook = (req, res) => {
    const bookData = req.body;
    const coverFile = req.file; // multer file
    res.send({ bookData, coverFile });
};

exports.updateBook = (req, res) => {
    const id = req.params.id;
    const bookData = req.body;
    const coverFile = req.file;
    res.send({ id, updatedData: bookData, coverFile });
};

exports.deleteBook = (req, res) => {
    const id = req.params.id;
    res.send(`Deleted book with ID: ${id}`);
};
