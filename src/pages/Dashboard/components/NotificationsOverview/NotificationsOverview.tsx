import PageTitle from "../../../../components/common/PageTitle";
import { notifications } from "../../../../constants/notifications";

export default function NotificationsOverview() {
  return (
    <div className="hidden 2xl:block bg-offWhite w-72.25">
      <PageTitle className="mb-3" title="اطلاعیه ها" />
      <div className="flex items-center flex-col gap-x-3">
        {notifications.map((notification) => (
          <div key={notification.id} className="bg-gray-100 rounded-xl">
            <h4 className="text-balticSea-400 font-yekanBold">
              {notification.title}
            </h4>
            <p className="text-xs text-black">{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
