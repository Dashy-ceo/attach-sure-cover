
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const ClaimInformation = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-lg font-semibold mb-4">Claims Information</h2>
        <div className="space-y-4 text-sm">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800">
              Make sure to provide accurate information about your incident. This
              helps us process your claim faster.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-medium">Required Documents:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Photos of damage (if applicable)</li>
              <li>Police report (for theft)</li>
              <li>Medical reports (for accidents)</li>
              <li>Original receipts</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
