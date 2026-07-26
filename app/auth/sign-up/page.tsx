"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { buttonVariants } from "../../../components/ui/button"
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signUpSchema } from "../../schemas/auth"
import { FieldGroup, FieldLabel, Field, FieldError } from "../../../components/ui/field"
import { z } from "zod"


const SignUpPage = () => {

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  return (
    <>
      <div className='w-full min-h-screen flex justify-center items-center '>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Sign up to your account</CardTitle>
            <CardDescription>
              Create your account to accses pure bless
            </CardDescription>
            <CardAction>
              <Link className={buttonVariants({ variant: "link" })} href="/">Home</Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <form className='flex flex-col gap-4'>
              <FieldGroup>
                <Controller name="name" control={form.control} render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Name</FieldLabel>
                    <Input
                      {...field}
                      placeholder="Jhon lennon"
                      required
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>)} />
              </FieldGroup>
              <FieldGroup>
                <Controller name="email" control={form.control} render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      {...field}
                      placeholder="Jhon lennon"
                      required
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>)} />
              </FieldGroup>
              <FieldGroup>
                <Controller name="password" control={form.control} render={({ field, fieldState }) => (
                  <Field>
                    <FieldLabel>Passwaord</FieldLabel>
                    <Input
                      {...field}
                      placeholder="********"
                      type='password'
                      required
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>)} />
              </FieldGroup>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Label htmlFor="password">Already have an account ? <span>
              <Link href="/auth/login">Login </Link>
            </span></Label>
            <Button type="submit" className="w-full">
              sign up
            </Button>
            <Button variant="outline" className="w-full">
              sign up with Google
            </Button>
          </CardFooter>
        </Card>
      </div>



    </>
  )
}

export default SignUpPage