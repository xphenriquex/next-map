"use client";

import { createContext, useContext, useState } from "react";

export const RequestContext = createContext();

export function RequestContextProvider({ children }) {
  const [searchOriginLatitude, setSearchOriginLatitude] = useState(null);
  const [searchOriginLongitude, setSearchOriginLongitude] = useState(null);

  return (
    <RequestContext.Provider
      value={{
        searchOriginLatitude,
        setSearchOriginLatitude,
        searchOriginLongitude,
        setSearchOriginLongitude,
      }}>
      {children}
    </RequestContext.Provider>
  );
};

export const useRequest = () => useContext(RequestContext);
