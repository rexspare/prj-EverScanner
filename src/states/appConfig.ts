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
}

const initialState: IAppConfig = {
    language: English,
    setLanguage: () => { },
};

/**
 * State hook definition
 */
export const useAppConfigState = create<IAppConfig>((set, get) => ({
    ...initialState,
    setLanguage: val => set({ language: val }),
}));

/**
 * Selectors
 */
export const appConfigtStateSelectors = createSelectors(initialState);
