'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CurrencyDollarIcon } from '@heroicons/react/24/outline'

export default function Withdraw({ onClose }: { onClose: () => void }) {
    return (
        <Dialog open={true} onClose={onClose} className="relative z-10">
            <DialogBackdrop
                className="fixed inset-0 bg-gray-500/75"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                    >
                        <div className="bg-white px-4 pt-5 pb-1">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-24">
                                    <CurrencyDollarIcon aria-hidden="true" className="size-16 text-red-500" />
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                        Withdraw amount
                                    </DialogTitle>
                                    <div className="mt-2">
                                        <input className="text-lg border-2 border-gray-300 rounded-xs px-5 py-2" placeholder="$ 50,000"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 py-3 flex flex-row justify-end px-6 space-x-5">
                            <button
                                type="button"
                                onClick={onClose}
                                className="text-lg font-medium bg-[#303d5d] px-10 py-2 text-center text-gray-50 rounded-xs"
                            >
                                Withdraw
                            </button>
                            <button
                                type="button"
                                data-autofocus
                                onClick={onClose}
                                className="text-lg font-medium bg-gray-200 px-10 py-2 text-center text-gray-800 rounded-xs"
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
