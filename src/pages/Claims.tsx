
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  CalendarDays,
  FileUp,
  Check,
  Shield,
} from "lucide-react";

const Claims = () => {
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

    // Simulate API call
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
    <div className="container px-4 md:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Submit a Claim</h1>
        <p className="text-gray-600">
          Please provide details about your incident
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
                    1
                  </div>
                  <span className="text-sm text-gray-500">
                    Claim Details
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <div className="space-y-2">
                  <Label>Supporting Documents</Label>
                  <div className="border-2 border-dashed rounded-md border-gray-200 p-6 flex flex-col items-center justify-center text-center">
                    {fileUploaded ? (
                      <div className="flex flex-col items-center text-green-600">
                        <Check className="h-8 w-8 mb-2" />
                        <p className="font-medium">Files uploaded successfully</p>
                        <p className="text-sm text-gray-500 mt-1">
                          supporting_documents.pdf
                        </p>
                      </div>
                    ) : (
                      <>
                        <FileUp className="h-8 w-8 text-gray-400 mb-3" />
                        <p className="text-sm text-gray-500">
                          Upload supporting documents (PDF, JPG, PNG)
                        </p>
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-3"
                          onClick={handleFileUpload}
                        >
                          Select Files
                        </Button>
                      </>
                    )}
                  </div>
                </div>

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
        </div>

        <div className="md:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold mb-4">
                Claims Information
              </h2>
              <div className="space-y-4 text-sm">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800">
                    Make sure to provide accurate information about your incident.
                    This helps us process your claim faster.
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
        </div>
      </div>
    </div>
  );
};

export default Claims;
