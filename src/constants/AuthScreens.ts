import { LoginScreen, SignUpScreen } from "@components/templates";
import { AuthScreensComponent } from "@navigation/types";

export default [
    {
        name: 'LoginScreen',
        component: LoginScreen,
    },
    {
        name: 'SignUpScreen',
        component: SignUpScreen,
    },
] as Array<AuthScreensComponent>;