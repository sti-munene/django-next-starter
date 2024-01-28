import React from "react";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import axios from "axios";
import { toast } from "sonner";

const signInFormSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export function SignInForm({ csrfToken }: { csrfToken: string }) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof signInFormSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    try {
      const response = await axios({
        method: "post",
        url: "/api/auth/callback/credentials",
        data: values,
      });
      toast.success("Sign in successful");
    } catch (error: any) {
      toast.error(error.message || "Sign in error");
    }
  };

  return (
    <Form {...form}>
      <form
        method="post"
        action="/api/auth/callback/credentials"
        // onSubmit={form.handleSubmit(onSubmit)}
        className="mb-4"
      >
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full mt-4" type="submit">
          Sign in
        </Button>
      </form>
    </Form>
  );
}
