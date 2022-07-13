import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useUSer = create()(
  devtools(
    persist(
      (set) => ({
        lang: [],
        setLang: (lang) => set(() => ({ lang })),
      }),
      {
        name: 'info',
      }
    )
  )
);

export default useUSer;
