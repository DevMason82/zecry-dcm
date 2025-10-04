import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@workspace/ui/components/item";
import NoticeRow from "@/components/dashboard/notice/noticeRow";

const Index = () => {
  return (
    <Card>
      <CardHeader>
        <CardDescription>QA</CardDescription>
        <CardTitle>질의응답</CardTitle>
        <CardAction>
          <Link href="#">더보기</Link>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ul>
          <li>
            <NoticeRow />
          </li>
          <li>
            <NoticeRow />
          </li>
          <li>
            <NoticeRow />
          </li>
          {/*<li>*/}
          {/*  <NoticeRow />*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <NoticeRow />*/}
          {/*</li>*/}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Index;
