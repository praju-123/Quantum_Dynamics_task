"use client";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

import Tabs from "./components/tabs";
import { Panel } from "./components/panel";
import HeaderSection from "./components/headerSection";
import { SideNavMenu } from "./components/sideNavMenu";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <HeaderSection />
        <div className=" ">
          {/* Static sidebar for desktop */}
          <SideNavMenu />

          <div className="bg-violet-50 flex flex-wrap h-screen ">
            {/* body */}

            <main className="lg:ml-10 py-10 ml-5">
              <div className="lg:ml-40 h-full text-xs  bg-white sm:px-6 rounded-xl w-max pb-5 ">
                <div className="text-xs text-white"> hgjhkjkl</div>

                <div className=" bg-violet-50 lg:mt-5 py-4 rounded-xl  self-stretch mb-8 ">
                  <form
                    className="relative flex flex-1 ml-7 "
                    action="#"
                    method="GET"
                  >
                    <MagnifyingGlassIcon
                      className=" pointer-events-none absolute inset-y-0 left-0  w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <input
                      id="search-field"
                      className="block h-full w-full  bg-violet-50 border-0 py-0 pl-8 pr-0 text-gray-900 focus:ring-0 sm:text-sm"
                      placeholder="Search..."
                      type="search"
                      name="search"
                    />
                  </form>
                </div>
                <Tabs />
                <Panel />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
