import Navbar from "@/components/Navbar";
import items from "../data/items.json";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Item } from "@/types";

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Items List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item: Item) => (
            <Card key={item.id} className="shadow-md">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
