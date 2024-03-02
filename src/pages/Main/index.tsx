import Sidebar from "../../components/Sidebar";
import { Container } from "./design";

export default function Main() {
  return (
    <Container className="w-full h-screen flex">
      <Sidebar />

      <h1>Main</h1>
    </Container>
  )
}
