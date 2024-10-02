import Wrapper from "@/components/Wrapper";
import CourseCatalog from "@/components/course/CourseCatalog";
import prisma from "@/utils/prisma";
import { getSession } from "@/utils/session";

export default async function Page() {
    const courses = await prisma.course.findMany({ include: { episodes: true } });

    const session = await getSession();

    let member = null;
    if (session?.member?.id) {
        member = await prisma.member.findUnique({
            where: { id: session.member.id },
            include: { watched: true },
        });
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-indigo-400 to-indigo-500">
        <Wrapper className="max-w-6xl">
          <section className="py-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                เรียนรู้สู่การเปลี่ยนแปลงที่ยั่งยืน
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 mb-10">
                หลักสูตรออนไลน์จากเครือข่ายงดเหล้า - เรียนฟรี
              </p>
              <a
                href="#courses"
                className="inline-block bg-white hover:bg-indigo-100 text-indigo-700 font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out text-lg shadow-lg hover:shadow-xl"
              >
                เริ่มเรียนรู้เลย!
              </a>
            </div>

            <section id="courses" className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-indigo-800 mb-8 text-center">
                SDN Knowledges
              </h2>
              <CourseCatalog courses={courses} watched={member?.watched} />
            </section>
          </section>
        </Wrapper>
      </div>
    );
}