function errorHandler(err, req, res, next) {
	if (err.name === "ErrorNotFound") {
		res.status(404).json({ message: "404 Error Not Found" });
	} else if (err.name === "SequelizeValidationError") {
		res.status(400).json({ message: "Validation Error :(" });
	} else {
		res.status(500).json({ message: "Internal Server Error :(" });
	}
}

module.exports = errorHandler;
