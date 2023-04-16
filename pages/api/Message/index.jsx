import Message from "@/Data/Message"
export default function handler(req, res) {
    res.status(200).json(Message)
}