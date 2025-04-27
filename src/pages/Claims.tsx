
import React from "react";
import { ClaimForm } from "@/components/claims/ClaimForm";
import { ClaimInformation } from "@/components/claims/ClaimInformation";

const Claims = () => {
  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Submit a Claim</h1>
        <p className="text-gray-600">
          Please provide details about your incident
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <ClaimForm />
        </div>
        <div className="md:col-span-1">
          <ClaimInformation />
        </div>
      </div>
    </div>
  );
};

export default Claims;
