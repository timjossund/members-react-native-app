import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
    posts: defineTable({
        title: v.string(),
        content: v.string(),
        post_type: v.string(),
        author: v.id("users"),
    }),
    members: defineTable({
        name: v.string(),
        family_id: v.id("families"),
    }),
    families: defineTable({
        name: v.string(),
        members: v.array(v.id("members")),
    }),
    users: defineTable({
        name: v.string(),
        email: v.string(),
        password: v.string(),
    }),
});