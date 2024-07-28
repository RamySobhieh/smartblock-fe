import React, { ReactNode } from "react";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";
import { Input } from "./ui/input";
import { DropdownMenuLabel } from "./ui/dropdown-menu";
import SellForm from "./SellForm";

interface ModalProps {
  trigger: ReactNode;
}

function SellModal({ trigger }: ModalProps) {
  return (
    <Credenza>
      <CredenzaTrigger asChild>{trigger}</CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Sell Token X</CredenzaTitle>
          <CredenzaDescription>
            Specify the quantity and price
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <SellForm />
        </CredenzaBody>
        <CredenzaFooter>
          <CredenzaClose asChild>
            <button>Close</button>
          </CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
}

export default SellModal;
