"use client";
import React, { useState } from 'react';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/_components/ui/button";
import { Loader } from 'lucide-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/_components/ui/form";
import { Input } from "@/_components/ui/input";
import { Textarea } from '@/_components/ui/textarea';
import { toast } from 'sonner';


const formSchema = z.object({
  username: z.string().min(2).max(50),
  useremail: z.string().email(),
  usermessage: z.string().min(2),
});


const Contact = () => {
   const [isSubmitting, setIsSubmitting ] = useState(false); 

   const form = useForm<z.infer<typeof formSchema>>({
     resolver: zodResolver(formSchema),
     defaultValues: {
       username: "",
       useremail: "",
       usermessage: "",
     },
   });

   async function onSubmit(formData: z.infer<typeof formSchema>) {

     

     try {
      setIsSubmitting(true);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "33bfe2e4-c51b-4721-9324-9fa22c44acc0",
          Name: formData.username,
          Email: formData.useremail,
          Message: formData.usermessage,
        }),
      });

      const result = response.json();
      console.log(result);
      toast.success("Message successfully submitted!",
        
      );
      
     } catch (error) {
      console.log(error, "Error: Message not sent")
      toast.error("Message was not submitted!")
      setIsSubmitting(false);
     }
     
    }

  return (
    <div id="contact" className="w-full bg-[#09090b]/[0.9] p-4">
      <div>
        <div className="w-30 md:w-40 flex items-center justify-center p-4 border-2 rounded-full text-white">
          <h1 className=" ">Contact</h1>
        </div>
        <div className="w-full flex items-center justify-center my-10 xl:my-20">
          <h1 className="text-white text-[20px]">Let&apos;s Connect</h1>
        </div>
      </div>
      <div className="m-auto w-[80%] md:w-[60%] 2xl:w-[50%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Your Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className="h-10 md:h-14 xl:h-16 bg-stone-100 rounded-full"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="useremail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Your Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="h-10 md:h-14 xl:h-16 bg-stone-100 rounded-full"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="usermessage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      {...field}
                      className="bg-stone-100 h-24 lg:h-32"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex justify-center">
              <Button
                type="submit"
                className="w-full h-10 xl:h-14 sm:w-[80%] xl:w-[60%] bg-linear-to-br from-orange-500 to-blue-400 cursor-pointer text-black hover:bg-black hover:text-white rounded-full"
              >
                {isSubmitting ? <Loader /> : "Submit"}
              </Button>
            </div>
          </form>
        </Form>
        
      </div>
    </div>
  );
}

export default Contact