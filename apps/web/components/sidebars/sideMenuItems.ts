import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map as MapIcon,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

export const menuDatas = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Master",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "매출처관리",
          url: "/",
        },
        {
          title: "배송사관리",
          url: "/items",
        },
        {
          title: "배송비",
          url: "#",
        },
        {
          title: "주문서변환",
          url: "#",
        },
      ],
    },
    {
      title: "영업관리",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "주문관리",
          url: "#",
        },
        {
          title: "배송스케줄",
          url: "#",
        },
        {
          title: "배송관리",
          url: "#",
        },
        {
          title: "배송분배",
          url: "#",
        },
        {
          title: "배송경로",
          url: "#",
        },
        {
          title: "바코드처리",
          url: "#",
        },
        {
          title: "QR코드처리",
          url: "#",
        },
        {
          title: "배송완료사진",
          url: "#",
        },
      ],
    },
    {
      title: "실적/정산",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "미출고목록",
          url: "#",
        },
        {
          title: "미배송목록",
          url: "#",
        },
        {
          title: "매출처별실적",
          url: "#",
        },
        {
          title: "배송사별실적",
          url: "#",
        },
        {
          title: "매출처권역별",
          url: "#",
        },
      ],
    },
    {
      title: "CS",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "고객주문변경",
          url: "#",
        },
        {
          title: "고객문의",
          url: "#",
        },
      ],
    },
    {
      title: "재고관리",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "전월출고목록",
          url: "#",
        },
        {
          title: "재고조회",
          url: "#",
        },
      ],
    },
    {
      title: "자사관리자",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "공지사항",
          url: "#",
        },
        {
          title: "Q/A",
          url: "#",
        },
        {
          title: "부서관리",
          url: "#",
        },
        {
          title: "사용자관리",
          url: "#",
        },
        {
          title: "배송비권역",
          url: "#",
        },
        {
          title: "고객정보폐기",
          url: "#",
        },
        {
          title: "벤더자사관리",
          url: "#",
        },
        {
          title: "알림톡충전",
          url: "#",
        },
        {
          title: "전송건수조회",
          url: "#",
        },
      ],
    },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: MapIcon,
  //   },
  // ],
};
