import React from "react";

export default function Sponsor() {
  return (
    <>
      <div className="bg-rose-50/30 py-8 lg:py-12">
        <div className="container px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter lg:text-5xl xl:text-6xl">
            Make a Donation
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400/60">
            Your donation helps us continue our mission. We are committed to
            making a difference in the world.
          </p>
        </div>
      </div>
      <div className="py-8 lg:py-12">
        <div className="container grid gap-6 px-4 md:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Your Donation Makes a Difference
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We use your donation to support our programs that provide
              lifesaving aid to those in need. Your generosity makes a
              significant impact on the lives of the people we serve.
            </p>
          </div>
          <div className="border rounded-lg border-gray-200 bg-white shadow-sm divide-y dark:border-gray-800 dark:bg-gray-950">
            <div className="grid grid-cols-2 items-center p-4 gap-4 md:grid-cols-3 md:p-6">
              <div className="space-y-1">
                <label htmlFor="name">Name</label>
                <input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-1">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="amount">Amount</label>
                <input
                  id="amount"
                  placeholder="Enter amount"
                  prefix="&#36;"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 items-center p-4 gap-4 md:grid-cols-3 md:p-6">
              <div className="space-y-1">
                <label htmlFor="address">Address</label>
                <input id="address" placeholder="Enter your address" required />
              </div>
              <div className="space-y-1">
                <label htmlFor="city">City</label>
                <input id="city" placeholder="Enter your city" required />
              </div>
              <div className="space-y-1">
                <label htmlFor="zip">ZIP</label>
                <input id="zip" placeholder="Enter ZIP" required />
              </div>
            </div>
            <div className="grid items-center p-4 md:p-6">
              <input type="checkbox" id="terms" />
              <div className="ml-2 text-sm">
                By checking this box, I agree to the
                <label
                  className="underline underline-offset-[2px]"
                  htmlFor="terms"
                >
                  Terms & Conditions
                </label>
                .
              </div>
            </div>
            <div className="p-4 space-y-4 md:p-6">
              <button>Donate Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 lg:py-12">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Help Us Make a Difference
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Your donation allows us to continue our work and expand our
              programs to reach more people in need.
            </p>
          </div>
        </div>
      </div>
      <div className="py-8 lg:py-12">
        <div className="container grid gap-6 px-4 md:grid-cols-3 lg:gap-10">
          <div>
            <div className="p-4 bg-white rounded-lg shadow-sm dark:bg-gray-950">
              <h3 className="text-lg font-semibold">Option 1</h3>
              <p className="text-gray-500">Description for Option 1</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm dark:bg-gray-950">
              <h3 className="text-lg font-semibold">Option 2</h3>
              <p className="text-gray-500">Description for Option 2</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm dark:bg-gray-950">
              <h3 className="text-lg font-semibold">Option 3</h3>
              <p className="text-gray-500">Description for Option 3</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
