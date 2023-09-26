import React, {PropsWithChildren, ReactElement, createContext, useContext} from 'react';
import {types, getRoot} from 'mobx-state-tree';
import TimelineStore from './TimelineStore';

type Props = {
  children: React.ReactNode; // 👈️ type children
};
const RootStore: any = types.model('RootStore', {
  timelineStore: TimelineStore,
});

const rootStore: any = RootStore.create({
  timelineStore: {
    list:[]
  },
});

const RootStoreContext = createContext(rootStore);


export const Provider = ({children}: Props) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useMst = () => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error('useMst must be used within a Provider');
  }
  return getRoot(store);
};
