
import { useState } from "react";
import { X, Loader, Check, AlertTriangle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface MPESAPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  amount: number;
}

type PaymentStatus = "idle" | "loading" | "success" | "error";

export function MPESAPaymentModal({
  isOpen,
  onClose,
  onSuccess,
  amount,
}: MPESAPaymentModalProps) {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<PaymentStatus>("idle");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic phone number validation
    if (!phone.match(/^(?:254|\+254|0)?([71])[0-9]{8}$/)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid Safaricom number",
        variant: "destructive",
      });
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/payments/stk-push", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phone.startsWith("0") ? `254${phone.slice(1)}` : phone,
          amount,
        }),
      });

      if (!response.ok) {
        throw new Error("Payment initiation failed");
      }

      setStatus("success");
      toast({
        title: "Payment Initiated",
        description: "Please check your phone for the STK push prompt",
      });
      
      // Wait a moment before closing modal and proceeding
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 2000);
    } catch (error) {
      setStatus("error");
      toast({
        title: "Payment Failed",
        description: "Unable to initiate payment. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>M-PESA Payment</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Amount to pay: <span className="font-semibold">KES {amount.toLocaleString()}</span>
            </p>
            <div className="space-y-1">
              <Input
                type="tel"
                placeholder="Enter M-PESA number (07XX XXX XXX)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={status === "loading" || status === "success"}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Enter your Safaricom M-PESA number
              </p>
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={status === "loading"}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!phone || status === "loading" || status === "success"}
              className="min-w-[100px]"
            >
              {status === "loading" && (
                <Loader className="mr-2 h-4 w-4 animate-spin" />
              )}
              {status === "success" && (
                <Check className="mr-2 h-4 w-4 text-green-500" />
              )}
              {status === "error" && (
                <AlertTriangle className="mr-2 h-4 w-4 text-red-500" />
              )}
              {status === "loading" ? "Processing..." : "Pay Now"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
