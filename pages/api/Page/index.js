import Pages from "@/Data/Pages"
export default function handler(req, res) {
    res.status(200).json(Pages)
}