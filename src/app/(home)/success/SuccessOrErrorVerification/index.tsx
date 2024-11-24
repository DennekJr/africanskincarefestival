"use client";
import * as React from "react";
import {
  PostPaystackTicketPurchases,
  PostTransaction,
  sendEmail,
  VerifyPaystackTransaction
} from "@/app/(home)/checkout/components/ExternalApiCalls/ExternalApiCalls";
import Box from "@mui/material/Box";
import { Button, CircularProgress } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { PurchaseDetailTable } from "@/app/(home)/success/SuccessOrErrorVerification/PurchaseDetailTable";
import { AgoraBox } from "@/app/(home)/components/newHome/utils";
import { SendEmailTemplate } from "@/app/SendEmailTemplate";
import { initialCheckoutStateType } from "@/app/lib/features/checkout/checkoutSlice";

export const SuccessOrErrorVerification = () => {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [currency, setCurrency] = React.useState("");
  const [total, setTotal] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [metaData, setMetaData] = React.useState<any>();
  const searchParams = useSearchParams();
  const reference = searchParams?.get("reference");
  const checkStatus = async () => {
    const result = await VerifyPaystackTransaction(reference);
    if (result.transactionData.status === "success") {
      setCurrency(result.transactionData.currency);
      setTotal(result.transactionData.amount);
      setMetaData(result.transactionData.metadata);
      setIsSuccess(true);
      const dataToStore = result.transactionData.metadata;
      const transactionData = result.transactionData;
      await PostPaystackTicketPurchases({ transactionData });
      const isBoothPurchase = transactionData.metadata.purchaseType === "booth";
      const email = isBoothPurchase ? transactionData.metadata.boothData.buyerForm.form_email : Object.values(transactionData.metadata.ticketData.buyerForm as {
        [ticket: string]: { name: string; value: string }[]
      }[])[0][4];
      const transactionToPost = {
        Paystack_Id: transactionData.reference,
        Stripe_Id: "",
        Currency: result.transactionData.currency,
        Email: email,
        UnitNumber: dataToStore.payStackCheckout.total
      };
      await PostTransaction(transactionToPost);
      let name = "";
      if (transactionData.metadata.purchaseType === "booth") {
        name = transactionData.metadata.boothData.buyerForm.form_contactName;
      } else {
        Object.values(
          transactionData.metadata.ticketData.buyerForm as initialCheckoutStateType["billingInfo"]
        ).map(
          async (detail) =>
            (name = `${detail[0][0].value} ${detail[0][1].value}`)
        );
      }
      const template = SendEmailTemplate({
        name: name,
        total: dataToStore.payStackCheckout.total,
        tickets: dataToStore.tickets,
        reference: transactionData.reference
      });
      console.log("email", email, Object.values(transactionData.metadata.ticketData.buyerForm as {
        [ticket: string]: { name: string; value: string }[]
      }[])[0][4]);
      await sendEmail(email, template);
    }
  };
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };
  useEffect(() => {
    if (reference) {
      checkStatus();
    }
  }, [reference]);

  if (!isSuccess) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <AgoraBox
      className={
        "w-full py-16 flex text-center justify-center lg:min-h-[calc(100vh-600px)]"
      }
    >
      <Box className={"flex flex-col items-center justify-center"}>
        <Box className={"bg-primary w-fit p-4 mb-12"}>
          <CheckIcon
            sx={{ fontSize: "4rem" }}
            className={"text-textColor text-[150px]"}
          />
        </Box>
        <h1
          className={
            "text-center text-[27px] md:text-[44px] lg:text-[3em] text-black font-bold"
          }
        >
          Payment Completed
        </h1>
        <Box className={"bg-lightGrey  mb-12"}>
          <Box className={"flex items-center justify-center p-2"}>
            <ConfirmationNumberIcon
              sx={{ rotate: "-90deg", fontSize: "1rem" }}
              className={"text-black mr-2"}
            />
            <h3 className={"text-black"}>
              Order Confirmation Code: {reference}
            </h3>
          </Box>
        </Box>
        <Box className={"text-left w-full"}>
          <h3 className={"text-black text-lg mb-2"}>Purchase Details</h3>
          <Box className={"border border-midGrey rounded-lg"}>
            {/*// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain*/}
            <PurchaseDetailTable
              metaData={metaData?.purchaseType === "ticket" ? metaData?.ticketData : metaData.boothData}
              currency={currency}
              total={total}
            />
          </Box>
          <Box>
            <Button
              onClick={handlePrint}
              className={"w-full !p-4 !bg-primary !text-textColor !mt-8"}
            >
              Print Invoice
            </Button>
          </Box>
        </Box>
        <Box
          className={
            "flex w-full justify-between text-lightSecondary py-4 font-semibold"
          }
        >
          <Box>contact@africaskincarefestival.com</Box>
          <Box>+234 907 158 2383</Box>
        </Box>
      </Box>
    </AgoraBox>
  );
};
