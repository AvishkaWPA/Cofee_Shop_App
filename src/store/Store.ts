import {create} from 'zustand';
import { produce } from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

export const useStore = create(
    persist(
        (set,get) => ({
            CofeeList:CoffeeData,
            BeansList:BeansData,
            CartPrice:0,
            FavoritesList:[],
            CartList:[],
            OrderHistoryList:[],
        }),{name:'cofee-app',storage:createJSONStorage(() => AsyncStorage),
    }),
);