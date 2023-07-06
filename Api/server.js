import express from "express"
import cors from "cors"
import { error } from "console"

const app = express()
app.use(cors())
app.listen(80)

const state = {
  ascensor: 1,
  balcon: 1,
  cocina: 1,
  comedor: 1,
  habInvitado: 1,
  habPrincipal: 1,
  sala: 1,
  puerta: 1,
}

app.get("/", (req, res) => {
  res.json({ error: false, state })
})

app.get("/luz", (req, res) => {
  const control = req.query.nombre
  const value = Number(req.query.estado)
  const error = !(["balcon","cocina","comedor","habInvitado","habPrincipal","sala",].includes(control))
  if (error)
    res.status(400).json({ error })
  else {
    state[control] = value
    const response = { error, control, value }
    res.status(200).json(response)
    console.log(response)
  }
})
app.get("/ascensor", (req, res) => {
  const value = Number(req.query.piso)
  const error = !([1,2].includes(Number(value)))
  if (error)
    res.status(400).json({ error })
  else {
    const control = "ascensor"
    state[control] = value
    const response = { control, value }
    res.status(200).json(response)
    console.log(response)
  }
})
app.get("/abrirPuerta", (req, res) => {
  const value = 1
  const control = "puerta"
  state[control] = value
  const response = { control, value }
  res.status(200).json(response)
  console.log(response)
})
app.get("/cerrarPuerta", (req, res) => {
  const value = 0
  const control = "puerta"
  state[control] = value
  const response = { control, value }
  res.status(200).json(response)
  console.log(response)
})

