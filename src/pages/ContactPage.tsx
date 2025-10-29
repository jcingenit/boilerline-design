import React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { parseCTA } from "../utils/parseMarkdown";
import { ctaContent } from "../content/data/cta";

export function ContactPage() {
  const ctaData = parseCTA(ctaContent);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary from-muted/50 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl text-foreground mb-6">{ctaData.title}</h1>
            <p className="text-xl text-white">{ctaData.description}</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-muted/50 p-8 rounded-xl border-2 border-accent/20">
                <h2 className="text-2xl text-foreground mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                    <Input 
                      id="contact-name"
                      type="text" 
                      placeholder="Your name" 
                      className="bg-card border-accent/30 focus:border-accent"
                      required
                      aria-describedby="name-error"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-sm text-muted-foreground mb-2 block">Email *</label>
                    <Input 
                      id="contact-email"
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="bg-card border-accent/30 focus:border-accent"
                      required
                      aria-describedby="email-error"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="text-sm text-muted-foreground mb-2 block">Subject</label>
                    <Input 
                      id="contact-subject"
                      type="text" 
                      placeholder="What's this about?" 
                      className="bg-card border-accent/30 focus:border-accent"
                      aria-describedby="subject-error"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="text-sm text-muted-foreground mb-2 block">Message *</label>
                    <Textarea 
                      id="contact-message"
                      placeholder="Tell us more..." 
                      rows={6}
                      className="bg-card border-accent/30 focus:border-accent"
                      required
                      aria-describedby="message-error"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground transition-all duration-300 flex items-center justify-center gap-2"
                    aria-describedby="form-status"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl text-foreground mb-6">Get in Touch</h2>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg text-foreground mb-1">Email</h3>
                      <p className="text-base text-muted-foreground">info@boilerbuild.org</p>
                      <p className="text-base text-muted-foreground">team@boilerbuild.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg text-foreground mb-1">Location</h3>
                      <p className="text-base text-muted-foreground">Purdue University</p>
                      <p className="text-base text-muted-foreground">West Lafayette, IN 47907</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg text-foreground mb-1">Phone</h3>
                      <p className="text-base text-muted-foreground">(765) 494-4600</p>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-gradient-to-br from-accent/10 to-transparent p-8 rounded-xl border-2 border-accent">
                  <h3 className="text-xl text-foreground mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-base text-foreground mb-1">How can I join the team?</h4>
                      <p className="text-sm text-muted-foreground">
                        We recruit new members at the beginning of each semester. Fill out the contact form and we'll reach out with more information.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-base text-foreground mb-1">Can I visit your projects?</h4>
                      <p className="text-sm text-muted-foreground">
                        We organize occasional tours and open houses. Contact us to schedule a visit or join our mailing list for announcements.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-base text-foreground mb-1">Do you accept sponsors?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes! We're always looking for industry partners and sponsors. Reach out to discuss sponsorship opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}