
import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, CalendarDays, Shield } from "lucide-react";
import type { ClaimFormValues } from "@/lib/validations/claim";

interface ClaimDetailsProps {
  form: UseFormReturn<ClaimFormValues>;
}

export const ClaimDetails: React.FC<ClaimDetailsProps> = ({ form }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                <Input className="pl-9" placeholder="Enter your full name" {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="policyNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Policy Number</FormLabel>
            <FormControl>
              <div className="relative">
                <Shield className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                <Input className="pl-9" placeholder="Enter your policy number" {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="incidentDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Date of Incident</FormLabel>
            <FormControl>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                <Input type="date" className="pl-9" {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="incidentType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Type of Incident</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select incident type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="accident">Accident</SelectItem>
                <SelectItem value="theft">Theft</SelectItem>
                <SelectItem value="damage">Damage</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem className="col-span-2">
            <FormLabel>Description of Incident</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Please provide details about what happened..."
                className="min-h-[120px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
