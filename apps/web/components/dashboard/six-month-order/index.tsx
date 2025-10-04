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
        <CardDescription>Order Status</CardDescription>
        <CardTitle>6개월간 미처리 현황</CardTitle>
        {/*<CardAction>*/}
        {/*  <Link href="#">더보기</Link>*/}
        {/*</CardAction>*/}
      </CardHeader>
      <CardContent>
        <Item size="sm">
          <ItemContent>
            <ItemTitle>
              <b>주문 미확정</b>
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
              <b>배송 미출고</b>
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
              <b>반품 회수 미처리</b>
            </ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="sm">
              <span className="text-blue-500 text-lg">0</span>
            </Button>
          </ItemActions>
        </Item>
        <Item size="sm">
          <ItemContent>
            <ItemTitle>
              <b>교환 회수 미처리</b>
            </ItemTitle>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="sm">
              <span className="text-blue-500 text-lg">0</span>
            </Button>
          </ItemActions>
        </Item>
      </CardContent>
    </Card>
  );
};

export default Index;
