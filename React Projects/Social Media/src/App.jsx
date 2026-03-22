import { Header } from "./Components/header";
import { Footer } from "./Components/footer";
import { Sidebar } from "./Components/sidebar";
import { Form } from "./Components/create_post";

export default function App()
{
  return <>
    <Header/>
    <div className="d-flex"> 
      <Sidebar/>  
        <Form></Form>
    </div>

    <Footer/>
  
  </>
}