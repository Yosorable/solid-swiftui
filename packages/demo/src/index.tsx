import { render, Button } from "@solid-swiftui/core"
import { createSignal } from "solid-js"


const [a, _] = createSignal(1)
render(() => (
  <>
    <Button color="black">123</Button>
  </>
), { id: "" })