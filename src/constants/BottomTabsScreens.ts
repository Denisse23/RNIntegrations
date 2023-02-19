import { HomeScreen } from "@components/templates";
import { BottomTabsScreensComponent } from "@navigation/types";
import strings from '@localization';

export default [
    {
        name: 'HomeScreen',
        component: HomeScreen,
        title: strings.bottomTabs.home,
    },
] as Array<BottomTabsScreensComponent>;