import express from 'express';
import { Content, ContentDocument } from '../model/content';
const router = express.Router();

// GET CONTENT
router.get('/:id', async (req, res) => {
	try {
		const content = (await Content.findOne({
			id: req.params.id,
		})) as ContentDocument;

		if (!content) {
			res.status(200).json({ data: null });
		} else {
			res.status(200).json({ data: content.contents });
		}
	} catch (error) {
		console.log({ error });
		res.status(400).json();
	}
});

// UPDATE CONTENT
router.post('/:id', async (req, res) => {
	try {
		const content = await Content.findOne({
			id: req.params.id,
		});

		if (content) {
			content.contents = req.body.contents;
			await content.save();
		} else {
			const newContent = await Content.create({
				id: req.params.id,
				contents: req.body.contents,
			});
			await newContent.save();
		}
		res.status(200).json();
	} catch (error) {
		console.log({ error });
		res.status(400).json();
	}
});

export default router;
