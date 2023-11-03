import { IRoute } from "./navigation.types";
import Profile from "@/components/screens/profile/Profile";
import Settings from "@/components/screens/settings/Settings";
import Home from "@/components/screens/home/Home";
import Statistics from "@/components/screens/statistics/Statistics";

export const routes:IRoute[] = [
  {
    name: 'Home',
    component: Home
  },
  {
    name: 'Settings',
    component: Settings
  },
  {
    name: 'Profile',
    component: Profile
  },
  {
    name: 'Statistics',
    component: Statistics
  },
]