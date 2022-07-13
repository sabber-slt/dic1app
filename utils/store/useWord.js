import create from 'zustand';

const useWord = create()((set) => ({
  text: 'book',
  setText: (text) => set(() => ({ text })),
}));

export default useWord;
