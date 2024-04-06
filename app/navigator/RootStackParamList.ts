import {BusType} from '../../assets/type';
import {NavigatorConstants} from '../utils/navigator-constants';

export type RootStackParamList = {
  [NavigatorConstants.MAP_SCREEN]: undefined;
  [NavigatorConstants.TICKETS_SCREEN]: {bus: BusType};
  [NavigatorConstants.APP_STACK]: undefined;
  [NavigatorConstants.BOTTOM_TAB_STACK]: any;
  [NavigatorConstants.INFO_SCREEN]: {bus: BusType};
  [NavigatorConstants.HOME_SCREEN]: {bus: BusType};
};
