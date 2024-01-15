"use client";

import MapComponent from "./MapComponent";
import RequestForm from "./RequestForm";

export default function ParentRequestComponent() {
  return (
    <div className="flex">
      <div className="w-1/5">
        <RequestForm />
      </div>
      <div className="w-4/5">
        <MapComponent />
      </div>
    </div>
  );
}
