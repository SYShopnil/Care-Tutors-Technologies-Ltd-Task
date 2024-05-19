import { CToDoCreateAndUpdate } from "@src/components/compound/c-to-do-create-update";
import { SLoading } from "@src/components/root";
import { EToDoMode } from "@src/types/compound/c-to-do-create-update";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const DynamicToDoList = dynamic(
  () => import("@src/components/compound/c-to-do-list"),
  {
    ssr: false,
  }
);

export default async function Home() {
  const showAllToDoContainerStyle = `col-span-12 lg:col-span-6 border-[3px] border-solid p-3 border-[#7F4D4F] rounded-xl`;
  const addNewToDoContainer = `col-span-12 lg:col-span-6  border-[3px] border-[#7F4D4F] border-solid p-3 rounded-xl`;
  return (
    <section>
      <div className="container mx-auto py-10">
        <div>
          <h1
            className={`text-4xl font-bold text-center mb-6 border-[#000000] border-dashed border-b-[0.4rem] pb-2`}
          >
            ToDo APP
          </h1>
        </div>
        <div
          className={`grid grid-cols-12 lg:gap-3  space-y-3 lg:space-y-0 p-2`}
        >
          <div className={`${addNewToDoContainer}`}>
            <h1 className="text-3xl font-bold text-center mb-6">
              Add New ToDo
            </h1>
            <Suspense
              fallback={<SLoading text="To Do Create part Loading...." />}
            >
              <CToDoCreateAndUpdate mode={EToDoMode.CREATE} />
            </Suspense>
          </div>
          <div className={`${showAllToDoContainerStyle}`}>
            <h1 className="text-3xl font-bold text-center mb-6">
              Show All ToDo
            </h1>
            <Suspense fallback={<SLoading text="To Do List Loading...." />}>
              <DynamicToDoList />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
