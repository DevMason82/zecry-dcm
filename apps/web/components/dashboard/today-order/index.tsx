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
import { Button } from "@workspace/ui/components/button";

const Index = () => {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Today's Order</CardDescription>
        <CardTitle>오늘 주문 현황</CardTitle>
        {/*<CardAction>*/}
        {/*  <Link href="#">더보기</Link>*/}
        {/*</CardAction>*/}
      </CardHeader>
      <CardContent>
        <Item size="sm">
          <ItemContent>
            <ItemTitle>
              <b>주문</b>
            </ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="sm">
              <span className="text-blue-500 text-lg">127</span>
            </Button>
          </ItemActions>
        </Item>
        <Item size="sm">
          <ItemContent>
            <ItemTitle>
              <b>취소</b>
            </ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="sm">
              <span className="text-red-500 text-lg">10</span>
            </Button>
          </ItemActions>
        </Item>
        <Item size="sm">
          <ItemContent>
            <ItemTitle>
              <b>반품</b>
            </ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="sm">
              <span className="text-red-500 text-lg">0</span>
            </Button>
          </ItemActions>
        </Item>
        <Item size="sm">
          <ItemContent>
            <ItemTitle>
              <b>교환</b>
            </ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="sm">
              <span className="text-yellow-500 text-lg">0</span>
            </Button>
          </ItemActions>
        </Item>
        <Item size="sm">
          <ItemContent>
            <ItemTitle>
              <b>반품취소</b>
            </ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="sm">
              <span className="text-yellow-500 text-lg">0</span>
            </Button>
          </ItemActions>
        </Item>
      </CardContent>
    </Card>
  );
};

export default Index;
