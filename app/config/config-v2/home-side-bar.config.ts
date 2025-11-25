import {
  type HomeSideBarItem,
  HomeSideBarAdditionalValue,
} from "~/model/model-v2/home-side-bar.model";

export const menuItems: HomeSideBarItem[] = [
  {
    id: 3,
    title: "Friends & Gifts",
    iconName: "flowbite:users-solid",
    additionalValue: HomeSideBarAdditionalValue.FRIENDSREQUESTS,
    path: "/home/friends-and-gifts",
  },
  {
    id: 2,
    title: "Dashboard",
    iconName: "material-symbols:favorite",
    path: "/dashboard",
  },

  {
    id: 4,
    title: "Notifiche",
    iconName: "ic:sharp-notifications",
    additionalValue: HomeSideBarAdditionalValue.NOTIFICATION,
    path: "/home/notifications",
  },
  {
    id: 5,
    title: "Appuntamenti speciali",
    iconName: "material-symbols:calendar-month",
    path: "/home/special-dates",
  },
  {
    id: 6,
    title: "Regali prenotati",
    iconName: "ri:gift-2-fill",
    path: "home/reserved-gifts",
  },
];
