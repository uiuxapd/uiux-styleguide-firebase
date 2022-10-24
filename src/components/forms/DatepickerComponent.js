import React, { Fragment } from "react";
import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../BtnCond";
import { Tab } from "@headlessui/react";
import { DatepickerBaseCode, DatepickerDisableCode, DatepickerErrorCode } from "./FormCode";

const DatepickerComponent = (props) => {
  return (
    <div ref={props.refer}>
      <Tab.Group>
        <div className="flex items-center gap-2 mb-4">
          <h4 className="text-lg capitalize sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
            datepicker
          </h4>
          <div className="flex items-center gap-2 sm:gap-3">
            <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <div className="focus:outline-none">
                    {selected ? <TabPreviewActive /> : <TabPreviewInactive />}
                  </div>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <div className="focus:outline-none">
                    {selected ? <TabCodeActive /> : <TabCodeInactive />}
                  </div>
                )}
              </Tab>
            </Tab.List>
            <div className="h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden md:block"></div>
          </div>
        </div>
        <Tab.Panels>
          <Tab.Panel className="outline-none">
            <div className="component-section">
              <div className="flex justify-center w-full gap-4 flex-wrap">
                <div className="grow shrink-0 basis-1/2 md:basis-1/4">
                  <label htmlFor="datepicker" className="capitalize text-slate-700">
                    datepicker base
                  </label>
                  <input type="date" id="datepicker" className="block w-full py-2.5 px-4 text-base bg-white border border-slate-300 hover:border-primary-main rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main" />
                </div>
                <div className="grow shrink-0 basis-1/2 md:basis-1/4">
                  <label htmlFor="datepickerdisable" className="capitalize text-slate-700">
                    datepicker disable
                  </label>
                  <input type="date" id="datepickerdisable" className="block w-full py-2.5 px-4 text-base text-slate-500 bg-slate-200 border border-slate-300 hover:border-slate-300 rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main" disabled />
                </div>
                <div className="grow shrink-0 basis-1/2 md:basis-1/4">
                  <label htmlFor="datepickererror" className="capitalize text-slate-700">
                    datepicker error
                  </label>
                  <input type="date" id="datepickererror" className="block w-full py-2.5 px-4 text-base text-error-main bg-error-surface border border-error-border hover:border-error-main rounded-lg leading-tight focus:outline-none focus:bg-error-surface focus:ring focus:ring-error-focused focus:border-error-main" />
                  <span className="relative text-error-main text-xs italic">this input has an error</span>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="outline-none">
            <div className="overflow gap-4">
              <DatepickerBaseCode />
              <DatepickerDisableCode />
              <DatepickerErrorCode />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default DatepickerComponent
