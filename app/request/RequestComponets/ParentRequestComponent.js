"use client";

import { useState } from "react";
import MapComponent from "./MapComponent";
import RequestForm from "./RequestForm";

export default function ParentRequestComponent() {
  const [searchOriginLatitude, setSearchOriginLatitude] = useState(null);
  const [searchOriginLongitude, setSearchOriginLongitude] = useState(null);

  return (
    <div className="flex">
      <div className="w-1/5">
        <RequestForm
          searchOriginLatitude={searchOriginLatitude}
          searchOriginLongitude={searchOriginLongitude}
          setSearchOriginLatitude={setSearchOriginLatitude}
          setSearchOriginLongitude={setSearchOriginLongitude}
        />
      </div>
      <div className="w-4/5">
        <MapComponent
          searchOriginLatitude={searchOriginLatitude}
          searchOriginLongitude={searchOriginLongitude}
          setSearchOriginLatitude={setSearchOriginLatitude}
          setSearchOriginLongitude={setSearchOriginLongitude}
        />
      </div>
    </div>
  );
}
