export function myCreateStore(reducer) {
  let state;

  const listeners = [];

  const store = {
    getState() {
      return state;
    },

    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    },

    subscribe(listener) {
      listeners.push(listener);
      // Simple subscription logic - in a real implementation, this would be more sophisticated
      return () => {
        
      };
    },
  };

  store.dispatch({ type: "@@INIT" });
  return store;
}
