// src/pages/Tickets/TicketDetails/TicketDetails.tsx
import { useNavigate, useParams } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import PageHeader from "../../../components/common/PageHeader/PageHeader";
import Button from "../../../components/common/Button/Button";
import TicketMessage from "./components/TicketMessage";
import { tickets } from "../../../data/tickets";

// داده‌های نمونه برای پیام‌ها
const sampleMessages = [
  {
    id: 1,
    name: "سروش محمدی",
    avatar: "/images/avatar1.png",
    date: "۱۴۰۵/۰۵/۱۲ - ۱۴:۲۲",
    type: "question" as const,
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد. کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می‌طلبد تا با نرم‌افزارها شناخت بیشتری را برای طراحان رایانه‌ای علی‌الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می‌توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
  },
  {
    id: 2,
    name: "آرمین سابیت",
    avatar: "/images/avatar2.png",
    date: "۱۴۰۵/۰۵/۱۲ - ۱۵:۳۰",
    type: "answer" as const,
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است.",
  },
];

export default function TicketDetails() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const ticket = tickets.find((t) => t.id === Number(id));

  if (!ticket) {
    return (
      <div>
        <PageHeader />
        <div className="bg-offWhite rounded-2xl p-8 max-w-3xl mx-auto mt-4 text-center animate-fadeIn">
          <p className="font-morabbaMedium text-sm text-dawn">
            تیکت مورد نظر پیدا نشد!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* ردیف بالا: دکمه بازگشت */}
      <div className="flex items-center justify-end mb-6" dir="rtl">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 p-1.5 rounded-lg hover:bg-dawn/10 transition-colors"
        >
          <IoIosArrowBack size={20} className="text-balticSea-400 rotate-180" />
          <span className="font-morabbaMedium text-sm xs:text-base text-balticSea-400">
            بازگشت
          </span>
        </Button>
      </div>

      {/* هدر صفحه */}
      <PageHeader />

      {/* کارت اصلی */}
      <div className="bg-offWhite rounded-[20px] p-4 xs:p-6 sm:p-8 max-w-4xl mx-auto mt-4 animate-fadeIn">
        {/* شماره تیکت */}
        <div className="flex justify-end mb-6" dir="rtl">
          <span className="font-yekanBold text-xs xs:text-sm text-balticSea-400">
            #{ticket.id.toLocaleString("fa-IR")}
          </span>
        </div>

        {/* پیام‌ها */}
        <div className="space-y-6 xs:space-y-8">
          {sampleMessages.map((message) => (
            <TicketMessage
              key={message.id}
              name={message.name}
              avatar={message.avatar}
              date={message.date}
              text={message.text}
              type={message.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
