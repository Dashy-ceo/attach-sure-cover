
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, CalendarDays, FileUp, Check, Shield } from "lucide-react";
import { FileUploadSection } from "./FileUploadSection";
import { ClaimDetails } from "./ClaimDetails";

export const ClaimForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: "",
    policyNumber: "",
    incidentDate: "",
    incidentType: "",
    description: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, incidentType: value }));
  };

  const handleFileUpload = () => {
    setFileUploaded(true);
    toast({
      title: "File uploaded successfully",
      description: "Your supporting documents have been uploaded.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Claim Submitted Successfully",
        description: "We will review your claim and get back to you soon.",
        variant: "default",
      });
      setIsSubmitting(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
              1
            </div>
            <span className="text-sm text-gray-500">Claim Details</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ClaimDetails
              formData={formData}
              handleInputChange={handleInputChange}
              handleSelectChange={handleSelectChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description of Incident</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Please provide details about what happened..."
              className="min-h-[120px]"
              required
            />
          </div>

          <FileUploadSection
            fileUploaded={fileUploaded}
            handleFileUpload={handleFileUpload}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || !fileUploaded}
          >
            {isSubmitting ? "Submitting..." : "Submit Claim"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
