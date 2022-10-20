import { data } from "../../../data/data"

export default function handler(req, res) {
  const { fid } = req.query
  const food = data.find((item) => item.id === Number(fid))
  res.status(200).json({ food })
}
