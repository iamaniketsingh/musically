"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Button from "./ui/button";
import music_data from "../app/data/music_data.json";
import Link from "next/link";
export default function FeaturedSection() {
  console.log(music_data.courses);
  const courses = music_data.courses.filter((course) => course.isFeatured);
  return (
    <div className="py-12 mt-10 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>

          <p
            className="mt-2 text-3xl mb-4 leading-8 
          font-extrabold tracking-tight text-white sm:text-4xl"
          >
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1  gap-4 ">
        {courses.map((course) => (
          <div key={course.id} className="flex  justify-center">
            <BackgroundGradient
              className="rounded-[22px] max-w-sm   bg-white
             dark:bg-zinc-900 flex flex-col h-full w-full overflow-hidden  "
            >
              <div className="p-4 sm:p-6 flex  flex-col items-center text-center flex-grow">
                <p className="text-lg font-bold opacity-90 sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>
                <Image
                  src={course.image}
                  alt="jordans"
                  height="400"
                  width="400"
                  className="object-contain rounded-lg my-2"
                />
                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                  {course.description}
                </p>

                <Link href={`/courses/${course.slug}`}>
                  <Button />
                </Link>

                <button className="rounded-full p-2  text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span>Buy now </span>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    {course.price}
                  </span>
                </button>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
}
