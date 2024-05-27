"use client";

import Login_SignUp_Modal from "@/components/common/login-signup";
import Landing from "@/components/landing/Landing";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showAccountCreation, setShowAccountCreation] = useState(false);
  return (
    <main className="flex flex-row w-full h-dvh justify-center items-center">
      <Login_SignUp_Modal
        isOpen={showModal}
        onClose={setShowModal}
        showAccountCreation={showAccountCreation}
        setShowAccountCreation={setShowAccountCreation}
      />
      <Landing
        openModal={setShowModal}
        setShowAccountCreation={setShowAccountCreation}
      />
    </main>
  );
}
