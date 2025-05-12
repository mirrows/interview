"use client"
import { eventBus } from "@/utils/common";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import RegistorOrLogin from "../registorOrLogin/registorOrLogin";
import "./registorOrLoginModal.css"

const title: Record<string, string> = {
  registor: 'Sign up for Blinkist',
  login: 'Sign in to Blinkist'
}

const footer: Record<string, string> = {
  registor: 'Already have an account?',
  login: "You don't have an account?",
}

export default function RegistorOrLoginModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState('registor');

  const showModal = (type: string) => {
    setType(type);
    setIsModalOpen(true);
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  }
  useEffect(() => {
    eventBus.on('showRegistorOrLoginModal', showModal)
    return () => {
      eventBus.off('showRegistorOrLoginModal')
    }
  }, [])
  return (
    <Modal
      title=""
      closable={{ 'aria-label': 'Custom Close Button' }}
      open={isModalOpen}
      footer={null}
      className="pm_login_modal"
      width={400}
      onCancel={handleCancel}
    >
      <div className="px-4 sm:px-8 pt-8">
        <h2 className="text-midnight mb-8 flex text-center justify-center font-bold text-h3">{title[type]}</h2>
        <RegistorOrLogin type={type} />
      </div>
      <button className="p-4 bg-[#f1f6f4] flex justify-center w-full  cursor-pointer text-blue hover:text-blue-500" onClick={() => setType(type === 'registor' ? 'login' : 'registor')}>{footer[type]}</button>
    </Modal>
  )
}