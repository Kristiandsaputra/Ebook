import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, SplashScreenStack, SignInStack, SignUpStack, HomeStack, MateriStack, MateriStack2, ListQuizStack, QuizStack, SettingStack, TentangStack, ScoreQuizStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    ScoreQuiz: SettingStack,
    Tentang: TentangStack,
    Setting: SettingStack,
    Quiz: QuizStack,
    ListQuiz: ListQuizStack,
    Materi2: MateriStack2,
    Materi: MateriStack,
    Home: HomeStack,
    SignIn: SignInStack,
    SignUp: SignUpStack,
    SplashScreen: SplashScreenStack,
    OnBoarding: OnBoardingStack,
    App: Drawer
  },
  {
    initialRouteName: 'SignIn'
  }
);
