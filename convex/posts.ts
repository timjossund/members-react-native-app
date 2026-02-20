import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getPosts = query({
    handler: async ({ db }) => {
        const posts = await db.query("posts").order("desc").collect();
        return posts;
    },
});

export const createPost = mutation({
    args: {
        title: v.string(),
        content: v.string(),
        post_type: v.string(),
        author: v.id("users"),
    },
    handler: async ({ db }, args) => {
        await db.insert("posts", args);
    },
});

export const getPost = query({
    args: {
        id: v.id("posts"),
    },
    handler: async ({ db }, args) => {
        const post = await db.get(args.id);
        return post;
    },
});

export const updatePost = mutation({
    args: {
        id: v.id("posts"),
        title: v.string(),
        content: v.string(),
        post_type: v.string(),
        author: v.id("users"),
    },
    handler: async ({ db }, args) => {
        await db.replace(args.id, args);
    },
});

export const deletePost = mutation({
    args: {
        id: v.id("posts"),
    },
    handler: async ({ db }, args) => {
        await db.delete(args.id);
    },
});
