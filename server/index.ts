import { publicProcedure, router } from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone"
import z from "zod"

const appRouter = router({
    signin: publicProcedure.input(z.object({
        name: z.string(), password: z.string()
    })).mutation((opts) => {
        console.log(opts)
        return {
            msg: "Signed in successfully"
        }
    }),
    signup: publicProcedure.input(z.object({
        name: z.string(), password: z.string()
    })).mutation((opts) => {
        console.log(opts)
        return {
            msg: opts.input
        }
    })
})

export type AppRouter = typeof appRouter;


const server = createHTTPServer({
    router: appRouter
})


server.listen(3000)

console.log(`Server listening on port : ${3000}`)