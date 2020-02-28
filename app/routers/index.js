import { SwitchNavigator } from 'react-navigation';
import { OnBoardingStack, SplashScreenStack, SignInStack, SignUpStack, HomeStack, MateriStack, MateriStack2, ListQuizStack, QuizStack, StaticQuizStack } from './stackNavigator';
import { Drawer } from './drawerNavigator';

export default SwitchNavigator(
  {
    StaticQuiz: StaticQuizStack,
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
    initialRouteName: 'Home'
  }
);
