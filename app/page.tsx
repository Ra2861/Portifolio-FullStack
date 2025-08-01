import Link from "next/link"
import { Github, Mail, Linkedin, ExternalLink, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b-4 border-black p-4 sticky top-0 bg-white z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-black text-2xl tracking-tight">Raissa Sabino</div>
          <nav className="hidden md:flex gap-8 font-bold">
            <Link href="#projects" className="hover:underline">
              Projects
            </Link>
            <Link href="#about" className="hover:underline">
              About
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </nav>
          <Button className="bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
            Resume
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-yellow-400 -rotate-2 p-2 mb-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
                  <h2 className="text-xl font-bold">Hello, I'm</h2>
                </div>
                <h1 className="text-6xl md:text-7xl font-black mb-6">
                  <span className="block">Full Stack</span>
                  <span className="block text-blue-600">Developer</span>
                </h1>
                <p className="text-xl mb-8 max-w-md">
                  I build exceptional digital experiences with clean code and modern technologies.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
                    View Projects
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)]"
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
              <div className="bg-pink-400 border-4 border-black p-8 rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0)]">
                <div className="aspect-square bg-white border-2 border-black overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=600"
                    alt="Developer portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-green-200 border-y-4 border-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black mb-12 inline-block bg-white -rotate-1 p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* projetos */}
              <ProjectCard
                title="E-Commerce Platform"
                description="A full-stack e-commerce solution with React, Node.js, and MongoDB"
                tags={["React", "Node.js", "MongoDB", "Stripe"]}
                image="/placeholder.svg?height=400&width=600"
                rotate="rotate-1"
                bgColor="bg-blue-300"
              />

              <ProjectCard
                title="Task Management App"
                description="A productivity app with drag-and-drop interface and real-time updates"
                tags={["Next.js", "Firebase", "Tailwind CSS", "React DnD"]}
                image="/placeholder.svg?height=400&width=600"
                rotate="-rotate-1"
                bgColor="bg-yellow-300"
              />

              <ProjectCard
                title="AI Content Generator"
                description="An AI-powered application that generates marketing content"
                tags={["Python", "OpenAI", "React", "Flask"]}
                image="/placeholder.svg?height=400&width=600"
                rotate="-rotate-2"
                bgColor="bg-purple-300"
              />

              <ProjectCard
                title="Fitness Tracker"
                description="A mobile-first web app for tracking workouts and nutrition"
                tags={["React Native", "GraphQL", "Node.js", "MongoDB"]}
                image="/placeholder.svg?height=400&width=600"
                rotate="rotate-2"
                bgColor="bg-red-300"
              />
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] inline-flex items-center gap-2">
                View All Projects
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-black mb-6 inline-block bg-purple-300 rotate-1 p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
                  About Me
                </h2>
                <p className="text-lg mb-6 border-l-4 border-black pl-4">
                  I'm a passionate full-stack developer with 5+ years of experience building web applications that solve
                  real-world problems. I specialize in JavaScript ecosystems, with expertise in React, Node.js, and
                  modern web technologies.
                </p>
                <p className="text-lg mb-8 border-l-4 border-black pl-4">
                  When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new
                  technologies. I'm always eager to learn and take on new challenges.
                </p>

                <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  <SkillBadge name="JavaScript" bgColor="bg-yellow-300" />
                  <SkillBadge name="TypeScript" bgColor="bg-blue-300" />
                  <SkillBadge name="React" bgColor="bg-cyan-300" />
                  <SkillBadge name="Next.js" bgColor="bg-gray-200" />
                  <SkillBadge name="Node.js" bgColor="bg-green-300" />
                  <SkillBadge name="Express" bgColor="bg-gray-300" />
                  <SkillBadge name="MongoDB" bgColor="bg-green-200" />
                  <SkillBadge name="PostgreSQL" bgColor="bg-blue-200" />
                  <SkillBadge name="GraphQL" bgColor="bg-pink-300" />
                  <SkillBadge name="Docker" bgColor="bg-blue-200" />
                  <SkillBadge name="AWS" bgColor="bg-orange-200" />
                  <SkillBadge name="Git" bgColor="bg-red-200" />
                </div>
              </div>

              <div className="bg-blue-300 border-4 border-black p-8 -rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0)]">
                <div className="bg-white border-2 border-black p-6">
                  <h3 className="text-2xl font-bold mb-4">Work Experience</h3>

                  <div className="mb-6 border-b-2 border-black pb-6">
                    <div className="font-bold text-xl">Senior Frontend Developer</div>
                    <div className="text-lg">Tech Company Inc.</div>
                    <div className="text-sm mb-2">2021 - Present</div>
                    <p>Led the development of the company's flagship SaaS product, improving performance by 40%.</p>
                  </div>

                  <div className="mb-6 border-b-2 border-black pb-6">
                    <div className="font-bold text-xl">Full Stack Developer</div>
                    <div className="text-lg">Digital Agency Co.</div>
                    <div className="text-sm mb-2">2019 - 2021</div>
                    <p>Built and maintained multiple client projects using React, Node.js, and various databases.</p>
                  </div>

                  <div>
                    <div className="font-bold text-xl">Junior Developer</div>
                    <div className="text-lg">Startup XYZ</div>
                    <div className="text-sm mb-2">2017 - 2019</div>
                    <p>Developed frontend features and fixed bugs for an e-commerce platform.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-pink-200 border-y-4 border-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black mb-12 inline-block bg-white rotate-1 p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
              Get In Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white border-4 border-black p-8 -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0)]">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block font-bold mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full border-2 border-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full border-2 border-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Message</label>
                    <textarea
                      className="w-full border-2 border-black p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <Button className="bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              <div>
                <div className="bg-yellow-300 border-4 border-black p-8 rotate-2 shadow-[8px_8px_0px_0px_rgba(0,0,0)] mb-8">
                  <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                  <p className="mb-6">Feel free to reach out to me through any of the following channels:</p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-6 h-6" />
                      <span className="font-medium">email@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-6 h-6" />
                      <span className="font-medium">linkedin.com/in/username</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="w-6 h-6" />
                      <span className="font-medium">github.com/username</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-300 border-4 border-black p-8 -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0)]">
                  <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
                  <p className="mb-6">
                    I'm currently available for freelance work and open to full-time opportunities. If you have a
                    project that needs coding skills, I'd love to hear from you!
                  </p>
                  <Button className="bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0)] inline-flex items-center gap-2">
                    View My Resume
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t-4 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-black text-2xl tracking-tight mb-2">Raissa Sabino</div>
              <p className="text-gray-400">© {new Date().getFullYear()} All Rights Reserved</p>
            </div>

            <div className="flex gap-6">
              <Link href="#" className="hover:text-yellow-400 transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="hover:text-yellow-400 transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-yellow-400 transition-colors">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

