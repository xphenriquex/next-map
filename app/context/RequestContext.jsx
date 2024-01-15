"use client";

import { createContext, useContext, useState } from "react";

export const RequestContext = createContext();

export function RequestContextProvider({ children }) {
  const [searchOriginLatitude, setSearchOriginLatitude] = useState(-3.7886689791687913);
  const [searchOriginLongitude, setSearchOriginLongitude] = useState(-38.54305657399209);

  return (
    <RequestContext.Provider
      value={{
        searchOriginLatitude,
        searchOriginLongitude,
        setSearchOriginLatitude,
        setSearchOriginLongitude,
      }}>
      {children}
    </RequestContext.Provider>
  );
};

export const useRequest = () => useContext(RequestContext);
