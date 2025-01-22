'use client'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export function WorkItem({logo, lifeSpan, title, description, stats = [], currentState, highlights, content}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const workItemLogo = logo ? logo : 'https://www.shutterstock.com/image-vector/image-icon-trendy-flat-style-600nw-643080895.jpg'
  
  return (
    <>
      <div className="flex">
        <div className="flex-grow">
          <small className="font-bold block mb-6">{lifeSpan}</small>
          <div className="flex flex-col justify-center" style={{height: '100px'}}>
            <img src={workItemLogo} alt={title} width="100" />
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h2>
          <p className="mt-2 text-gray-600">{description}</p>
          {highlights && Array.isArray(highlights) && highlights.map((highlight, index) => (
            <p key={index} className="mt-2 text-gray-600">{highlight}</p>
          ))}
          <small className="block mt-6">Current State: <strong>{currentState}</strong></small>
          
          {content && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 px-4 py-2 text-gray-800 border border-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors"
            >
              read about it
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && content && (
        <Modal content={content} open={isModalOpen} setOpen={setIsModalOpen} />
      )}
    </>
  )
}

function Modal({content, open, setOpen}) {

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm lg:max-w-xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div>
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
                <CheckIcon aria-hidden="true" className="size-6 text-green-600" />
              </div>
              <div className="mt-3 sm:mt-5">
                <DialogTitle as="h3" className="text-xl font-semibold text-gray-900">
                  the story
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-lg text-gray-500" dangerouslySetInnerHTML={{__html: content}} />
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
