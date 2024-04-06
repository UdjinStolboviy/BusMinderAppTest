import {NavigatorConstants} from '../utils/navigator-constants';

export type RootStackParamList = {
  [NavigatorConstants.MAP_SCREEN]: undefined;
  [NavigatorConstants.TICKETS_SCREEN]: undefined;
  [NavigatorConstants.APP_STACK]: undefined;
  [NavigatorConstants.BOTTOM_TAB_STACK]: undefined;
  [NavigatorConstants.INFO_SCREEN]: undefined;
  [NavigatorConstants.HOME_SCREEN]: {textError?: string};
};
