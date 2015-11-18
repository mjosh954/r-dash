import { Schema } from 'normalizr';

const posts = new Schema('posts', { idAttribute: 'id'});

export const postsSchema = posts;
