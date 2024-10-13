import { create } from 'zustand';
import { createSelectors } from './common';
import { English } from '../assets/languages';


/**
 * State Structure
 */
export interface IAppConfig {
    // State values
    language: any;
    setLanguage: (val: any) => void;
    vibrateEnabled: boolean;
    setVibrateEnabled: (val: boolean) => void;
    isFirstLaunch: boolean;
    setisFirstLaunch: (val: boolean) => void;
}

const initialState: IAppConfig = {
    language: English,
    setLanguage: () => { },
    vibrateEnabled: true,
    setVibrateEnabled: () => { },
    isFirstLaunch: true,
    setisFirstLaunch: () => { }
};

/**
 * State hook definition
 */
export const useAppConfigState = create<IAppConfig>((set, get) => ({
    ...initialState,
    setLanguage: val => set({ language: val }),
    setVibrateEnabled: val => set({ vibrateEnabled: val }),
    setisFirstLaunch: val => set({ isFirstLaunch: val }),
}));

/**
 * Selectors
 */
export const appConfigtStateSelectors = createSelectors(initialState);
