'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function WalletPage() {
  // STATE: Create variables to store data from your API
  const [walletInfo, setWalletInfo] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // EFFECT: This code runs once when the page loads to fetch data
  useEffect(() => {
    const fetchWalletData = async () => {
      try {
        const walletRes = await fetch('http://localhost:8080/api/wallet');
        const walletData = await walletRes.json();
        setWalletInfo(walletData);

        const transactionsRes = await fetch('http://localhost:8080/api/transactions');
        const transactionsData = await transactionsRes.json();
        setTransactions(transactionsData);

      } catch (error) {
        console.error("Failed to fetch wallet data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWalletData();
  }, []);

  // UI LOGIC: Show a loading message while waiting for the API
  if (isLoading) {
    return <div className="text-center p-10">Loading Your Wallet...</div>;
  }

  // UI LOGIC: Show an error if the data couldn't be fetched
  if (!walletInfo) {
    return <div className="text-center p-10 text-red-500">Could not load wallet data. Please try again later.</div>;
  }

  // UI LOGIC: Once loaded, display the page with dynamic data
  return (
    <main className="container mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Your Mudra Wallet</h1>
      <p className="text-gray-600 mb-6">Track your coin balance, understand your earnings and expenditures to grow your Mudra.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* --- Left Column: Balance Card --- */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-6 text-center">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <Image src="https://placehold.co/128x128/e0f2fe/000000?text=Coin" alt="Coin Icon" className="w-full h-full rounded-full object-cover" width={128} height={128} unoptimized/>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1L21 12l-4.408 3.608A2.954 2.954 0 0112 16c-2.686 0-5.293-1.343-5.293-4s2.607-4 5.293-4z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{walletInfo.balance}</h2>
          <p className="text-gray-600 text-sm mb-4">Total Coins Available</p>
          <p className="text-gray-500 text-xs mb-6">Last updated: {new Date(walletInfo.updatedAt).toLocaleString()}</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full">
            View Full History
          </button>
        </div>

        {/* --- Right Column: Transaction History --- */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Transaction History</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 scrollable-content max-h-80 overflow-y-auto block">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="flex w-full">
                    <td className="px-6 py-4 whitespace-nowrap flex items-center w-1/4"><span className="text-gray-900">{tx.type}</span></td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700 w-1/4">{tx.description}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-right font-medium w-1/4 ${tx.type === 'Earn' ? 'text-green-600' : 'text-red-600'}`}>{tx.type === 'Earn' ? '+' : '-'}{tx.amount} Coins</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-gray-500 text-sm w-1/4">{new Date(tx.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}