import clientPromise from '../../lib/mongodb';
import axios from 'axios';

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db('africamakeupfestival'); // Replace with your MongoDB database name

    // Parse the request body
    const { email, amount } = await request.json(); // Assuming you're sending 'email' and 'amount' in the request body

    // Initialize Paystack transaction
    const paystackResponse = await axios.post('https://api.paystack.co/transaction/initialize', {
      email: email,
      amount: amount,
    }, {
      headers: {
        'Authorization': `BEARER sk_test_dd5fd7374ff20defefc392b44c2a436ff369710c`, // Replace with your Paystack secret key
        'Content-Type': 'application/json',
      }
    });

    // Check if the request to Paystack was successful
    if (paystackResponse.status === 200) {
      const transactionData = paystackResponse.data.data;

      // Store the transaction data in MongoDB
      const result = await db.collection('transactions').insertOne({
        email: email,
        amount: amount,
        transactionRef: transactionData.reference,
        accessCode: transactionData.access_code,
        createdAt: new Date(),
      });

      return new Response(JSON.stringify({ message: 'Transaction initialized successfully', transactionData, result }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Failed to initialize Paystack transaction' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to initialize transaction' + error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
