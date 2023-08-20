"use client";

import { HomeIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useGetProject } from "@/core/project/useGetProjects";

/* eslint-disable  @typescript-eslint/no-explicit-any */
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(` `);
}

export default function Sidebar() {
  const segment = useSelectedLayoutSegment();
  const projects = useGetProject({ userId: `bhs9158` });
  projects.then(console.log);
  const navigation = [
    {
      id: 0,
      name: `Dashboard`,
      href: `/dashboard`,
      icon: HomeIcon,
      current: `${segment}` === `dashboard`,
    },
    {
      id: 1,
      name: `New Project`,
      href: `/new`,
      icon: PlusCircleIcon,
      current: `${segment}` === `new`,
    },
  ];

  console.log(segment);
  return (
    <>
      <div
        className={`hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col`}
      >
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div
          className={`flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6`}
        >
          <nav className={`flex flex-1 flex-col`}>
            <ul role={`list`} className={`flex flex-1 flex-col gap-y-7`}>
              <li>
                <ul role={`list`} className={`-mx-2 space-y-1`}>
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={classNames(
                          item.current
                            ? `bg-gray-800 text-white`
                            : `text-gray-400 hover:text-white hover:bg-gray-800`,
                          `group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold`,
                        )}
                      >
                        <item.icon
                          className={`h-6 w-6 shrink-0`}
                          aria-hidden={`true`}
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
