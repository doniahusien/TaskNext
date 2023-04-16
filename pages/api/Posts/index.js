import Posts from "@/Data/Posts"
export default function handler(req, res) {
    res.status(200).json(Posts)
}