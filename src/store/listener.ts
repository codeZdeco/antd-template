import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { alert } from "./app/alert";

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(alert), // TODO
  effect: async (action, listenerApi) => {
    const { dispatch } = listenerApi;

    /** Catching all rejected states */
    dispatch(
      alert({
        status: "error",
        message: action.error.message,
      }),
    );
  },
});

export default listenerMiddleware;
