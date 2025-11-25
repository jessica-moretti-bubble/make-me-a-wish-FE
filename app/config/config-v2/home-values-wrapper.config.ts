import { HomeValuesType } from "~/model/model-v2/home-friends-and-gifts.model";

export const HomeValuesIconConfig = {
  [HomeValuesType.TOTAL_FRIENDS]: {
    bgColor: "bg-[#9333EA]/10",
    iconColor: "text-[#9333EA]",
  },
  [HomeValuesType.FRIENDS_REQUESTS]: {
    bgColor: "bg-[#FCE7F3]",
    iconColor: "text-[#DB2777]",
  },
  [HomeValuesType.RESERVED_GIFTS]: {
    bgColor: "bg-[#DBEAFE]",
    iconColor: "text-[#2563EB]",
  },
  [HomeValuesType.UPCOMING_EVENTS]: {
    bgColor: "bg-[#FEF3C7]",
    iconColor: "text-[#D97706]",
  },
};
