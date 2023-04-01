import postServices from "../services/post.services.js"

class PostValidator{
    async getPosts() {
        try {
            const posts = await postServices.find()
            return posts
        } catch (error) {
            return error
        }
    }
}

export default new PostValidator()