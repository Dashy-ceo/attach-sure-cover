
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, CalendarDays, Shield } from "lucide-react";

interface ClaimDetailsProps {
  formData: {
    fullName: string;
    policyNumber: string;
    incidentDate: string;
    incidentType: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (value: string) => void;
}

export const ClaimDetails: React.FC<ClaimDetailsProps> = ({
  formData,
  handleInputChange,
  handleSelectChange,
}) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <div className="relative">
          <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="pl-9"
            placeholder="Enter your full name"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="policyNumber">Policy Number</Label>
        <div className="relative">
          <Shield className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            id="policyNumber"
            name="policyNumber"
            value={formData.policyNumber}
            onChange={handleInputChange}
            className="pl-9"
            placeholder="Enter your policy number"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="incidentDate">Date of Incident</Label>
        <div className="relative">
          <CalendarDays className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            id="incidentDate"
            name="incidentDate"
            type="date"
            value={formData.incidentDate}
            onChange={handleInputChange}
            className="pl-9"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="incidentType">Type of Incident</Label>
        <Select
          value={formData.incidentType}
          onValueChange={handleSelectChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select incident type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="accident">Accident</SelectItem>
            <SelectItem value="theft">Theft</SelectItem>
            <SelectItem value="damage">Damage</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
