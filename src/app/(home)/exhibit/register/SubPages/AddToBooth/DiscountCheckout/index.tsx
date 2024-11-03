import { Box } from "@mui/material";
import { Discount } from "@mui/icons-material";
import { formatCurrency } from "@/app/(home)/checkout/components/utils";
import { setSubPage } from "@/app/lib/features/register/registerSlice";
import { useAppDispatch } from "@/app/lib/hooks";

export const DiscountCheckout = ({addOnTotal, total, nextPage}: {addOnTotal: number, total: number, nextPage: string}) => {
  const dispatch = useAppDispatch();
  return (
    <Box className={"grid gap-24"}>
      <Box className={"space-y-4"}>
        <Box>
          <button
            className={
              "!text-[#fcfcfc] h-14 !px-6 !py-4 !rounded-full flex items-center gap-3 !border-2 !border-[#fcfcfc]"
            }
          >
            Discount Code
            <Discount />
          </button>
        </Box>
        <Box className="flex flex-col lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-3">
          <input
            className="flex h-14 transition-shadow ease-linear duration-200 rounded-[6px] border border-input px-3 py-2 text-sm file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring/10 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 w-full lg:w-auto lg:max-w-52 !bg-[#F5F5F5] text-[#0A090B]"
            placeholder="Input Discount Code"
          />
          <button
            className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-100 bg-transparent text-gray-100 h-14 px-6 py-4 rounded-full relative w-full lg:w-auto min-w-52"
            type="button"
          >
            <span className="text-center w-full h-full">APPLY</span>
          </button>
        </Box>
      </Box>
      <div className="grid gap-6">
        <div>
          <p className="text-xl">Amount</p>
          <p className="text-4xl lg:text-6xl tracking-[-1px] font-medium">
            NGN {formatCurrency(addOnTotal + total)}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-3">
          <button
            className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#F4F4F5] text-[#18181B] hover:bg-[#F4F4F5]/80 h-14 px-6 py-4 rounded-full relative w-full"
            type="button"
            onClick={() => dispatch(setSubPage(nextPage))}
          >
            <span className="text-center w-full h-full">CHECKOUT NOW</span>
          </button>
          <button
            className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-100 bg-transparent text-gray-100 h-14 px-6 py-4 rounded-full w-full"
            type="button"
          >
            CANCEL
          </button>
        </div>
      </div>
    </Box>
  );
};