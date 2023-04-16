import Chat from "@/Data/Chat"

export default function handler(req, res) {
    let id = req.query.id
    let chat = Chat.find( p=>p.id == id)
    res.status(200).json(chat)
  }
  