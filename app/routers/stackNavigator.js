import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Search from '../screens/Search';
import UploadPhoto from '../screens/UploadPhoto';
import History from '../screens/History';
import Account from '../screens/Account';
import OnBoarding from '../screens/OnBoarding';
import SplashScreen from '../screens/SplashScreen';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import sessionScreen from '../screens/sessionScreen';
import Materi from '../screens/Materi';
import Materi2 from '../screens/Materi2';
import ListQuiz from '../screens/ListQuiz';
import Quiz from '../screens/Quiz';
import StaticQuiz from '../screens/StaticQuiz';

export const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: null
      }
    }, Materi: {
      screen: Materi,
      navigationOptions: {
        tabBarVisible: null
      }
    },Materi2: {
      screen: Materi2,
      navigationOptions: {
        tabBarVisible: null
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: null } }
);

export const SearchStack = StackNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SplashScreenStack = StackNavigator(
  {
    Search: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SignInStack = StackNavigator(
  {
    Search: {
      screen: SignIn,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const SignUpStack = StackNavigator(
  {
    Search: {
      screen: SignUp,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const UploadPhotoStack = StackNavigator(
  {
    UploadPhoto: {
      screen: UploadPhoto,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const HistoryStack = StackNavigator(
  {
    History: {
      screen: History,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);

export const MateriStack = StackNavigator(
  {
    Materi: {
      screen: Materi,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const MateriStack2 = StackNavigator(
  {
    Materi2: {
      screen: Materi2,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const ListQuizStack = StackNavigator(
  {
    ListQuiz: {
      screen: ListQuiz,
      navigationOptions: {
        tabBarVisible: false
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const QuizStack = StackNavigator(
  {
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const StaticQuizStack = StackNavigator(
  {
    StaticQuiz: {
      screen: StaticQuiz,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const AccountStack = StackNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        tabBarVisible: true
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const sessionScreenStack = StackNavigator(
  {
    sessionScreen: {
      screen: sessionScreen,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
export const OnBoardingStack = StackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding,
      navigationOptions: {
        tabBarVisible: false
      }
    }
  },
  { headerMode: 'none', navigationOptions: { tabBarVisible: false } }
);
