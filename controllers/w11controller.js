const { Item } = require("../models");

class w11controller {
	static findAll = async (req, res, next) => {
		const data = await Item.findAll({
			where: {
				status: "active",
			},
		});

		res.status(200).json(data);
	};

	static findOne = async (req, res, next) => {
		const { id } = req.params;

		try {
			const data = await Item.findOne({
				where: {
					id,
				},
			});

			if (data) {
				res.status(200).json(data);
			} else {
				throw { name: "ErrorNotFound" };
			}
		} catch (err) {
			next(err);
		}
	};

	static create = async (req, res, next) => {
		try {
			console.log(req.body, "<<<");
			const { name, status, type } = req.body;
			const data = await Item.create({
				name,
				status,
				type,
			});
			res.status(200).json(data);
		} catch (err) {
			next(err);
		}
	};

	static destroy = async (req, res, next) => {
		try {
			const { id } = req.params;
			const data = await Item.update(
				{
					status: "inactive",
				},
				{
					where: {
						id,
					},
				}
			);
			if (data[0] === 1) {
				res.status(200).json({ message: "Delete Success" });
			} else {
				throw { name: "ErrorNotFound" };
			}
		} catch (err) {
			next(err);
		}
	};
}

module.exports = w11controller;
