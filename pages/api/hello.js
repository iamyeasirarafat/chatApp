import nextConnect from "next-connect";
import middleware from "../../database";


const handler = nextConnect()
handler.use(middleware)
handler.post(async (req, res) => {
  const data = {
    name: "test", message: "hello there"
  }
  const result = await req.db.collection("test").insertOne(data)
  res.status(200).json(result)
})

handler.get(async (req, res) => {
  const result = await req.db.collection("test").find().toArray()
  res.status(200).json(result)
})


export default handler;