import Friends from "@/Data/Friends"
export default function handler(req, res) {
    res.status(200).json(Friends)
}