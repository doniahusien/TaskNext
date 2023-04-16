import Request from "@/Data/Request"
export default function handler(req, res) {
    res.status(200).json(Request)
}