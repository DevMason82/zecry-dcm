import React from "react";
import Link from "next/link";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "@workspace/ui/components/item";
import { ChevronRightIcon } from "lucide-react";

const NoticeRow = () => {
  return (
    <Item asChild size="sm">
      <Link href="/">
        <ItemContent>
          <ItemTitle>예투가구 벤더피아 양식</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions>
      </Link>
    </Item>
  );
};

export default NoticeRow;
