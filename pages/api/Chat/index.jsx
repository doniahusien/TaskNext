import Chat from "@/Data/Chat"
export default function handler(req, res) {
    res.status(200).json(Chat)
}