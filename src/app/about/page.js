// import { hindSiliguri } from "@/app/ui/fonts";
import Form from "next/form";

const About = () => {
  const myAction = async (formData) => {
    "use server";
    const name = formData;
    console.log("name", name);
  };
  return (
    <div>
      {/* <h1 className={`${hindSiliguri.className}`}>About</h1> */}
      <Form action={myAction}>
        <input name="name" />
        <button type="submit">Search</button>
      </Form>
    </div>
  );
};

export default About;
