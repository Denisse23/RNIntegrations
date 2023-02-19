import { HomeScreen } from "@components/templates";
import { AppMainScreensComponent } from "@navigation/types";
import BottomTabsNavigator from "@navigation/BottomTabsNavigator";

export default [
    {
        name: 'BottomTabsNavigator',
        component: BottomTabsNavigator,
    },
] as Array<AppMainScreensComponent>;