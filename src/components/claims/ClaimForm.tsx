
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FileUploadSection } from "./FileUploadSection";
import { ClaimDetails } from "./ClaimDetails";
import { claimFormSchema, type ClaimFormValues } from "@/lib/validations/claim";

export const ClaimForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  const form = useForm<ClaimFormValues>({
    resolver: zodResolver(claimFormSchema),
    defaultValues: {
      fullName: "",
      policyNumber: "",
      incidentDate: "",
      incidentType: "",
      description: "",
    },
  });

  const handleFileUpload = () => {
    setFileUploaded(true);
    toast({
      title: "File uploaded successfully",
      description: "Your supporting documents have been uploaded.",
    });
  };

  const onSubmit = async (data: ClaimFormValues) => {
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <ClaimDetails form={form} />
            
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
        </Form>
      </CardContent>
    </Card>
  );
};
