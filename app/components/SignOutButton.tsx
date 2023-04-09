'use client'
import {FC, useState} from 'react'
import Button from "@/ui/Button";
import {signIn} from "next-auth/react";

interface SignOutButtonProps {
}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signUserOut = async () => {
        setIsLoading(true)

        try {
            await signIn('google')
        } catch (err) {
            // toast({
            //     title: 'Error Signing In',
            //     message: 'Please try again later',
            //     type: 'error'
            // })
        }
    }

    return (
        <Button onClick={signUserOut} isLoading={isLoading}>Sign Out</Button>
    )
}

export default SignOutButton
