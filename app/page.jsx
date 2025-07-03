import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Falcon E-Commerce
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your one-stop shop for fashion and electronics!
        </p>
        <Link href="/product">
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            View Product Example
          </Button>
        </Link>
      </div>
    </div>
  );
}
