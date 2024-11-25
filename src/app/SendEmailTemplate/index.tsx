import { formatCurrency, getTicketCost } from "@/app/(home)/checkout/components/utils";

export const SendEmailTemplate = ({
  name,
  total,
  tickets,
  reference,
}: {
  name: string;
  total: number;
  tickets: { ticketName: string; value: number }[];
  reference: string;
}) => {
  const TicketRows = () => {
    return Object.values(tickets).map((ticket) => {
      if (ticket.value < 1) return;
      const value = getTicketCost(ticket);
      return `<tr>
        <td colspan="2" style="border: 1px solid #ddd; padding: 8px;">${ticket.ticketName.toUpperCase()}</td>
        <td colspan="2" style="border: 1px solid #ddd; padding: 8px;">${ticket.value}</td>
        <td colspan="2" style="border: 1px solid #ddd; padding: 8px; text-align: right">NGN ${formatCurrency(value)}</td>
      </tr>`;
    }).join("");
  };
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Table</title>
  <style>
    table {
      width: 100%;
      border-collapse: collapse;
      font-family: Arial, sans-serif;
      text-align: left;
    }
    th, td {
      padding: 8px;
    }
    th {
      background-color: #f4f4f4;
      font-weight: bold;
    }
    tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    .table {
    border: 1px solid #d1d5db; /* Replace with the lightSecondary color */
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .boldFont {
    font-weight: bold;
  }
  .textAlign {
    text-align: right;
  }
  </style>
</head>
<body>
<div>
<img src="https://africaskincarefestival.com/images/Email_Logo.png" style="height: auto; width: 100%" alt="asf logo" />
<h3>SEE YOU THERE!</h3>
<h3>Thank you for your <span style="color: #C43C2A">#ASF</span> purchase!</h3>
<h4>Hi ${name},</h4>  
<p>Thanks for your order - your confirmation number is ${reference}.
Full details of your order can be found below.</p>
<p>Please note this email cannot be used for entry.</p>
<h3>Ticket Details</h3>
<table style="width: 100%; margin: 0; padding: 0;">
  <thead>
    <tr>
      <th colspan="2">Ticket</th>
      <th colspan="2" style="padding: 8px; background-color: #f4f4f4;">Qty</th>
      <th colspan="2" style="text-align: right">Price</th>
    </tr>
  </thead>
  <tbody>
      ${TicketRows()}
      <tr style="margin-top: 10px;">
        <td colspan="4" style="padding: 8px; font-weight: bold; text-align: right"><strong></strong></td>
        <td colspan="2" style="padding: 8px; font-weight: bold;"></td>
      </tr>
      <tr style="margin-top: 20px;">
        <td colspan="4" style="padding: 8px; font-weight: bold; text-align: right"><strong>Subtotal</strong></td>
        <td colspan="2" style="padding: 8px; font-weight: bold; text-align: right">NGN ${formatCurrency(total)}</td>
      </tr>
  </tbody>
</table>
</div>
</body>
</html>
`;
};
