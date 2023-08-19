import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link.js";
import { Button } from "./ui/button.jsx";

const AlbumCard = ({folder}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{folder}</CardTitle>
        <CardDescription>All the images of {folder}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button>
          <Link href="/">See All</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AlbumCard;
