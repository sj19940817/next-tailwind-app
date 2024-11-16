import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>About the App</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              This is a simple web application built with Next.js, Tailwind CSS,
              TypeScript, and Shadcn UI components.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default About;
