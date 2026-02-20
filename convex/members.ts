import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getMembers = query({
    handler: async ({ db }) => {
        const members = await db.query("members").collect();
        return members;
    },
});

export const createMember = mutation({
    args: {
        name: v.string(),
        family_id: v.id("families"),
    },
    handler: async ({ db }, args) => {
        await db.insert("members", args);
    },
});

export const getMember = query({
    args: {
        id: v.id("members"),
    },
    handler: async ({ db }, args) => {
        const member = await db.get(args.id);
        return member;
    },
});

export const updateMember = mutation({
    args: {
        id: v.id("members"),
        name: v.string(),
        family_id: v.id("families"),
    },
    handler: async ({ db }, args) => {
        await db.replace(args.id, args);
    },
});

export const deleteMember = mutation({
    args: {
        id: v.id("members"),
    },
    handler: async ({ db }, args) => {
        await db.delete(args.id);
    },
});
