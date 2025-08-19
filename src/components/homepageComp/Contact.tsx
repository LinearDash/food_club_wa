"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, MapPin, Phone, Mail } from "lucide-react"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  fullName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.enum(["general", "catering", "feedback", "other"], "Subject is required"),
  message: z.string().min(1, "Message is required"),
})

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues :{
      fullName:"",
      email:"",
      phone:"",
      subject: undefined,
      message:"",

    }
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: keyof z.infer<typeof formSchema>, value: string) => {
    form.setValue(field, value)
  }

  const handleSubmit = async (value: z.infer<typeof formSchema>) => {
      setIsSubmitting(true)
  
      try {
        console.log("Form submitted with data:", value)
  
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000))
  
        setIsSubmitted(true)
      } catch (error) {
        console.error("Form submission error:", error)
      } finally {
        setIsSubmitting(false)
        form.reset()
      }
    }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto  px-4 sm:px-6 lg:px-8">
          <Card className="w-full">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">Your message has been received. We&#39;ll get back to you soon!</p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-12 sm:py-16 bg-blue-300 ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Card className="w-full bg-white">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center mb-6 text-primary">Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-bold ">Address</p>
                  <p className="text-muted-foreground">29A Ewart Street, Midvale WA 6056</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-bold">Phone</p>
                  <a href="tel:0430067850" className="text-primary hover:underline">
                    0430 067 850
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground text-2xl" />
                <div>
                  <p className="font-bold">Email</p>
                  <a href="mailto:foodclubwa2023@gmail.com" className="text-primary hover:underline">
                    foodclubwa2023@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full bg-white">
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
          
            <form onSubmit={form.handleSubmit((value) => handleSubmit(value))} className="space-y-6">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="fullName"
                    type="text"
                    placeholder="Your full name"
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                  />
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select
                    onValueChange={(value) => handleInputChange("subject", value)}
                    required
                    name="subject"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-white ">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="catering">Catering / Events</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help you..."
                  className="min-h-[120px]"
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground">We usually respond within 1 business day.</p>
              </div>

              <Button type="submit" className="w-full text-white" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
export default Contact;
