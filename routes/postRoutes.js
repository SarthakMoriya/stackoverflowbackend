import express from "express";
import { getAllPosts, likePost ,likeBlog,createBlogPost,getAllBlogs, deleteBlog, deletePost} from "../controllers/Posts.js";

const postRouter = express.Router();

postRouter.get('/get', getAllPosts)
postRouter.get('/getblogs', getAllBlogs)
postRouter.patch('/likePost', likePost)
postRouter.patch('/likeBlog', likeBlog)
postRouter.post('/createblog', createBlogPost)
postRouter.delete('/deletepost/:id', deletePost)
postRouter.delete('/deleteblog/:id', deleteBlog)

export default postRouter