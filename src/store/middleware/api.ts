import { Middleware, MiddlewareAPI } from "redux";
import { notAuthorised } from "../slices/account/actions";

export const apiMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);

  if (!action.meta || !action.meta.request) {
    return;
  }

  if (process.env.REACT_APP_MOCK_API === "true" && action.meta.request.mock) {
    const { status, body, delay = 1000 } = action.meta.request.mock;
    console.warn(`mocking request to ${action.meta.request.url}`);
    handlePending(action.type, store);
    setTimeout(() => {
      handleResponse(status, action.type, body, store);
    }, delay);
    return;
  }

  let { url, method = "GET", authenticated = true } = action.meta.request;

  const init: any = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (authenticated) {
    const token = store.getState().account.cache.token;
    init.headers["Authorization"] = `JWT ${token}`;
  }

  if (action.payload && action.payload instanceof FormData) {
    init.body = action.payload;
    delete init.headers["Content-Type"];
  } else if (action.payload) {
    init.body = JSON.stringify(action.payload);
  }

  // Django can't redirect to the slash URL while maintaining POST data
  url = `${url}/`;

  if (action.meta.request.params) {
    let query = Object.keys(action.meta.request.params)
      .map(
        (k) =>
          encodeURIComponent(k) +
          "=" +
          encodeURIComponent(action.meta.request.params[k])
      )
      .join("&");

    url = `${url}?${query}`;
  }

  handlePending(action.type, store);

  fetch(`${process.env.REACT_APP_BACKEND_URL}${url}`, init)
    .then((response: Response) =>
      response.json().then((json) => ({
        status: response.status,
        json,
      }))
    )
    .then(({ status, json }) => {
      handleResponse(status, action.type, json, store);
    });
};

const handlePending = (type: string, store: MiddlewareAPI) => {
  store.dispatch({ type: `${type}Pending` });
};

const handleResponse = (
  status: number,
  type: string,
  body: any,
  store: MiddlewareAPI
) => {
  if (status < 400) {
    let config = {
      type: `${type}Success`,
      payload: body,
    };
    store.dispatch(config);
  } else if (status === 401) {
    store.dispatch(notAuthorised());
  } else {
    store.dispatch({
      type: `${type}Error`,
      error: body,
    });
  }
};
