import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {RootReducerState} from './root.reducer';

export type CustomThunkAction<
  ActionType extends Action<any>,
  ReturnType = void,
> = ThunkAction<ReturnType, RootReducerState, unknown, ActionType>;
export type CustomThunkDispatch<ActionType extends Action<any>> = ThunkDispatch<
  RootReducerState,
  unknown,
  ActionType
>;
