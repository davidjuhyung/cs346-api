import { Schema, model } from 'mongoose';

export interface ContentDocument {
	id: string;
	contents: string;
}

const ContentSchema = new Schema<ContentDocument>({
	id: {
		type: String,
	},
	contents: {
		type: String,
	},
});

export const Content = model<ContentDocument>('Content', ContentSchema);
