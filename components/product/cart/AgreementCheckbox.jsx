"use client";
import { Checkbox } from "@/components/ui/checkbox";

const AgreementCheckbox = ({ agreed, setAgreed }) => {
  return (
    <div className="flex gap-5 mt-5">
      <Checkbox
        id="agree"
        checked={agreed}
        onCheckedChange={() => setAgreed((prev) => !prev)}
      />
      <label htmlFor="agree" className="cursor-pointer hover:text-neutral-800">
        I have read and agree to the Terms and Conditions, Privacy Policy and
        Refund and Return Policy
      </label>
    </div>
  );
};

export default AgreementCheckbox;
