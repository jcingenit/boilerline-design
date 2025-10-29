import React from "react";
import { Award, Trophy, Target, Calendar, FileText, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CompetitionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary from-muted/50 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl text-foreground mb-6">NAHB Student Competition</h1>
            <p className="text-xl text-white">
              Competing at the highest level of student housing design and innovation
            </p>
          </div>
        </div>
      </section>

      {/* About NAHB */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl text-foreground mb-6">About the Competition</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The National Association of Home Builders (NAHB) Student Competition challenges university teams to design and build innovative, affordable housing solutions that address real-world challenges.
                  </p>
                  <p>
                    Teams from across the nation compete in categories including sustainability, affordability, innovation, and livability. The competition provides students with hands-on experience in all aspects of home construction and design.
                  </p>
                  <p>
                    BoilerLine Design has consistently earned recognition in this prestigious competition, demonstrating Purdue's commitment to excellence in engineering and sustainable design.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-accent">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"
                  alt="Competition"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Achievements
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl text-neutral-900 mb-12 text-center">Our Achievements</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center border-2 border-[#cebc89]">
                <div className="bg-[#cebc89] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl text-neutral-900 mb-2">2024 Winner</h3>
                <p className="text-base text-neutral-600">EcoHouse 2024</p>
                <p className="text-sm text-neutral-500 mt-2">First Place Overall</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-[#cebc89] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl text-neutral-900 mb-2">2023 Finalist</h3>
                <p className="text-base text-neutral-600">Urban Living 2023</p>
                <p className="text-sm text-neutral-500 mt-2">Top 5 Nationally</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-[#cebc89] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-2xl text-neutral-900 mb-2">2022 Finalist</h3>
                <p className="text-base text-neutral-600">ModuHome 2022</p>
                <p className="text-sm text-neutral-500 mt-2">Innovation Award</p>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Competition Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl text-neutral-900 mb-12 text-center">Competition Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white from-[#cebc89]/10 to-transparent p-6 rounded-xl border border-[#cebc89]/20">
                <Target className="w-8 h-8 text-[#cebc89] mb-3" />
                <h3 className="text-lg text-neutral-900 mb-2">Sustainability</h3>
                <p className="text-sm text-neutral-600">
                  Energy efficiency and environmental impact
                </p>
              </div>
              <div className="bg-white from-[#cebc89]/10 to-transparent p-6 rounded-xl border border-[#cebc89]/20">
                <Target className="w-8 h-8 text-[#cebc89] mb-3" />
                <h3 className="text-lg text-neutral-900 mb-2">Affordability</h3>
                <p className="text-sm text-neutral-600">
                  Cost-effective design and construction
                </p>
              </div>
              <div className="bg-white from-[#cebc89]/10 to-transparent p-6 rounded-xl border border-[#cebc89]/20">
                <Target className="w-8 h-8 text-[#cebc89] mb-3" />
                <h3 className="text-lg text-neutral-900 mb-2">Innovation</h3>
                <p className="text-sm text-neutral-600">
                  Creative solutions and technology integration
                </p>
              </div>
              <div className="bg-white from-[#cebc89]/10 to-transparent p-6 rounded-xl border border-[#cebc89]/20">
                <Target className="w-8 h-8 text-[#cebc89] mb-3" />
                <h3 className="text-lg text-neutral-900 mb-2">Livability</h3>
                <p className="text-sm text-neutral-600">
                  Comfort, functionality, and user experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Resources */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl text-neutral-900 mb-8">Competition Timeline</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-[#cebc89] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg text-neutral-900 mb-1">Fall Semester</h3>
                      <p className="text-sm text-neutral-600">
                        Team formation, concept development, and initial design phase
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-[#cebc89] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg text-neutral-900 mb-1">Spring Semester</h3>
                      <p className="text-sm text-neutral-600">
                        Construction, refinement, and testing of the project
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-[#cebc89] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg text-neutral-900 mb-1">Competition Week</h3>
                      <p className="text-sm text-neutral-600">
                        Final presentations, judging, and awards ceremony
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl text-neutral-900 mb-8">Resources</h2>
                <div className="space-y-4">
                  <a 
                    href="https://www.nahb.org/why-nahb/types-of-membership/student-chapter-membership/student-competition" target="_blank"
                    className="flex items-center justify-between p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#cebc89]"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#cebc89]" />
                      <span className="text-base text-neutral-900">NAHB Competition Information</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-400" />
                  </a>
                  <a 
                    href="https://www.nahb.org/why-nahb/types-of-membership/student-chapter-membership/student-competition/nahb-student-competition-four-year-programs-custom" target="_blank"
                    className="flex items-center justify-between p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#cebc89]"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#cebc89]" />
                      <span className="text-base text-neutral-900">Competition Guidelines</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-400" />
                  </a>
                  <a 
                    href="/contact"
                    className="flex items-center justify-between p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#cebc89]"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#cebc89]" />
                      <span className="text-base text-neutral-900">Join Our Team</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}