"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import CheckoutPage from "@/components/payment/CheckoutPage";
import { motion } from "framer-motion";
import { Shield, Loader2 } from "lucide-react";
import Link from "next/link";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!,
);

function PaymentContent() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan") ?? "";
  const amountParam = searchParams.get("amount");
  const amount = useMemo(() => {
    const n = amountParam ? parseFloat(amountParam) : NaN;
    return Number.isFinite(n) && n > 0 ? n : null;
  }, [amountParam]);

  if (amount === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center max-w-md"
        >
          <h1 className="text-xl font-bold text-gray-900 mb-2">
            Invalid payment details
          </h1>
          <p className="text-gray-600 mb-6">
            Please choose a plan from the pricing page to continue.
          </p>
          <Link
            href="/results"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            Back to pricing
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative z-10 max-w-xl mx-auto px-6 py-12">
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/results"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <span className="text-xl font-bold">
              Re<span className="text-purple-500">l</span>
              <span className="text-pink-500">a</span>
              <span className="text-purple-500">t</span>io
            </span>
          </Link>
          <div className="flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1.5 text-sm font-medium text-purple-700 w-fit mb-4">
            <Shield className="h-3.5 w-3.5" />
            Secure checkout
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            Complete your purchase
          </h1>
          <p className="text-gray-600">
            {plan ? (
              <>
                <span className="font-medium text-purple-600">{plan}</span> — $
                {amount.toFixed(2)} one-time
              </>
            ) : (
              <>${amount.toFixed(2)} one-time</>
            )}
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: convertToSubcurrency(amount),
              currency: "usd",
            }}
          >
            <CheckoutPage amount={amount} plan={plan} />
          </Elements>
        </motion.div>
      </div>
    </div>
  );
}

function PaymentFallback() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex items-center gap-2 text-gray-600">
        <Loader2 className="h-5 w-5 animate-spin" />
        <span>Loading checkout…</span>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<PaymentFallback />}>
      <PaymentContent />
    </Suspense>
  );
}
