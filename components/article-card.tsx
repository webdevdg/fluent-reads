
import { Heart, Bookmark, Share2, } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button";



interface ArticleCardProps {
  title: string;
  description: string;
  content: string;
  postedBy: string;
  postedOn: string;
  avatar: string;
}


export const ArticleCard = ({ title, description, content, postedBy, postedOn, avatar }: ArticleCardProps) => {
  return (
    <div className="">
      <Card className="flex justify-between bg-violet-700 rounded-xl pb-0">
        <div>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{content}</p>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-6">
            <div className="flex gap-3">
              <div className="flex items-center">
                <Avatar className="h-7 w-7">
                  <AvatarImage src={avatar} />
                  <AvatarFallback>DG</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-xs">{postedBy}</p>
                <p className="font-light text-xs">Posted on: {postedOn}</p>
              </div>
            </div>
            <div className="flex gap-72">
              <Button variant="premium" size="sm">Read article</Button>
              <div className="flex items-center gap-1">
                <Button variant="secondary" size="xxs">
                  <Heart className="text-red-700 h-3 w-3"/>
                </Button>
                <Button variant="secondary" size="xxs">
                  <Bookmark className="text-yellow-700 h-3 w-3"/>
                </Button>
                <Button variant="secondary" size="xxs">
                  <Share2 className="text-blue-700 h-3 w-3"/>
                </Button>
              </div>
            </div>
          </CardFooter>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
            className="rounded-r-lg h-full"
          />
        </div>
      </Card>
    </div>

  );
}




// import { Card, Image, Avatar, Text, Group } from '@mantine/core';

{/* <Card withBorder radius="md" shadow="sm" mt="xl" mx="xl" p={0} className="bg-slate-300 ">
      <Group wrap="nowrap" gap={0}>
        <div className="p-4">
          <Text tt="uppercase" c="dimmed" fw={700} size="xs">
            technology
          </Text>
          <Text className="" fw={600} ff={"Greycliff CF"} mt="xs" mb="md">
            The best laptop for Frontend engineers in 2022
          </Text>
          <Group wrap="nowrap" gap="xs">
            <Group gap="xs" wrap="nowrap">
              <Avatar
                size={20}
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
              />
              <Text size="xs">Elsa Typechecker</Text>
            </Group>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Text size="xs" c="dimmed">
              Feb 6th
            </Text>
          </Group>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
          height={80}
        />
      </Group>
    </Card> */}