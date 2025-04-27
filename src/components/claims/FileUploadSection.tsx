
import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FileUp, Check } from "lucide-react";

interface FileUploadSectionProps {
  fileUploaded: boolean;
  handleFileUpload: () => void;
}

export const FileUploadSection: React.FC<FileUploadSectionProps> = ({
  fileUploaded,
  handleFileUpload,
}) => {
  return (
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
  );
};
