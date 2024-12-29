import Storage from './storage.js';
import { INITIAL_CONNECTION_COUNT } from './config/constants.js';

const Counter = {
  async decrement() {
    const { connectionsLeft } = await Storage.get(['connectionsLeft']);
    const currentCount = connectionsLeft || INITIAL_CONNECTION_COUNT;
    
    if (currentCount > 0) {
      await Storage.set({ connectionsLeft: currentCount - 1 });
    }
  },

  async reset() {
    await Storage.set({ connectionsLeft: INITIAL_CONNECTION_COUNT });
  }
};

export default Counter;